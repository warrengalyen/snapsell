// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '../../../utils/prisma';

type Data = {
  name: string;
};

type formValues = {
  email: string;
  storeName: string;
  storeURL: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function createAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const values = await req.body;
    let parsedValues = JSON.parse(values);
    console.log(parsedValues);
    const hashedPassword = bcrypt.hashSync(parsedValues.password, 10);
    const user = await prisma.user.create({
      data: {
        user_first_name: parsedValues.firstName,
        user_last_name: parsedValues.lastName,
        user_email: parsedValues.email,
        password_hash: hashedPassword,
      },
    });
    const store = await prisma.store.create({
      data: {
        store_url: parsedValues.storeURL,
        store_name: parsedValues.storeName,
        // store_owner: user.user_id,
        user: {
          connect: {
            user_id: user.user_id,
          },
        },
      },
    });
    res.status(201).send({ created: true });
  } catch (e) {
    console.log(e);
    res.status(500).send('invalid password or userid');
  }
}
