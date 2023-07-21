// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
  message: string;
}
  | { successfulPayment: boolean };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    email,
    store_url,
    billing_firstName,
    billing_postcode,
    billing_country,
    billing_city,
    billing_secondLine,
    billing_lastName,
    billing_state,
    billing_firstLine,
    postcode,
    country,
    state,
    secondLine,
    firstLine,
    lastName,
    firstName,
    city,
    phoneNumber,
    total_order,
  } = req.body.data.object.metadata;

  const lineItems = Object.entries(req.body.data.object.metadata)
    .filter((item) => item[0].includes('item_'))
    .map((item: any) => JSON.parse(item[1]));

  try {
    if (req.body.type !== 'charge.succeeded') {
      console.log(req.body);
      console.log(JSON.stringify(req.body, null, 2));
      return res.status(500).json({ successfulPayment: false });
    }
    console.log(req.body);
    console.log(JSON.stringify(req.body, null, 2));
    const store = await prisma.store.findUnique({
      where: {
        store_url: store_url,
      },
      select: {
        store_id: true,
      },
    });

    let customer;
    customer = await prisma.customer.findFirst({
      where: {
        customer_email: email,
        store_id: store?.store_id,
      },
      select: {
        customer_id: true,
      },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          customer_first_name: firstName,
          customer_last_name: lastName,
          phone_number: String(phoneNumber),
          customer_email: email,
          store: {
            connect: {
              store_id: store?.store_id,
            },
          },
        },
      });
    }

    const getOrderCountForStore = await prisma.order.count({
      where: {
        store_id: store?.store_id,
      },
    });

    await prisma.order.create({
      data: {
        customer: {
          connect: {
            customer_id: customer.customer_id,
          },
        },
        friendly_order_number: getOrderCountForStore + 1000,
        total_order_cost: total_order,
        payment_id: req.body.data.object.payment_intent,
        order_details: lineItems,
        store: {
          connect: {
            store_id: store?.store_id,
          },
        },
        bill_address: {
          create: {
            address_first_name: billing_firstName,
            address_last_name: billing_lastName,
            address_line_1: billing_firstLine,
            address_line_2: billing_secondLine,
            city: billing_city,
            state: billing_state,
            country: billing_country,
            postcode: billing_postcode,
            customer: {
              connect: {
                customer_id: customer.customer_id,
              },
            },
          },
        },
        ship_address: {
          create: {
            address_first_name: firstName,
            address_last_name: lastName,
            address_line_1: firstLine,
            address_line_2: secondLine,
            city: city,
            state: state,
            country: country,
            postcode: postcode,
            customer: {
              connect: {
                customer_id: customer.customer_id,
              },
            },
          },
        },
        products: {
          connect: lineItems.map((item) => ({ product_id: item.productId })),
        },
      },
    });
    res.status(200).json({ message: 'Order created' });
  } catch (err) {
    console.log('Failed to create order', err);
    res.status(500).json({ message: 'Failed to create order' });
  }
}
