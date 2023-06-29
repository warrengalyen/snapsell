import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { CartProduct } from '../pages/[storeUrl]/cart';
import { InputWithLabel } from './InputWithLabel';
import Loading from './Loading';

const columns = [
  { id: 'item', name: 'Item' },
  { id: 'name', name: 'Name' },
  { id: 'price', name: 'Price' },
  { id: 'quantity', name: 'Quantity' },
  { id: 'total', name: 'Total' },
];

export default function CartLineItemTable({
                                            products,
                                            cartContext,
                                            setOrderTotal,
                                          }: {
  products: CartProduct;
  cartContext: {
    cartItems: { id: string; quantity: number }[];
    setCartItems: React.Dispatch<React.SetStateAction<any>>;
  };
  setOrderTotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();
  const [quantityValues, setQuantityValues] = useState<Record<string, number>>(
    {}
  );

  console.log({ quantityValues });

  useEffect(() => {
    const obj: Record<string, number> = {};
    products.forEach((item) => {
      obj[item.product_id] =
        cartContext.cartItems.find(
          (cartItem) => cartItem.id === item.product_id
        )?.quantity || 0;
    });
    setQuantityValues({ ...obj });
  }, [products]);

  console.log(cartContext.cartItems);

  useEffect(() => {
    setOrderTotal(
      products
        .map((item) => {
          return item.product_price * quantityValues[item.product_id];
        })
        .reduce((acc, curr) => acc + curr, 0)
    );
    cartContext.setCartItems((prev: { id: string; quantity: number }[]) => {
      const newCartItems = prev.map((item) => {
        return {
          ...item,
          quantity: Number(quantityValues[item.id]),
        };
      });
      return newCartItems;
    });
  }, [quantityValues]);

  if (Object.entries(quantityValues).length === 0) return <Loading />;

  return (
    <div className="grid grid-cols-5 gap-6 items-center rounded-md bg-gray-50 p-8">
      {columns.map((column) => (
        <p key={column.id} className="font-medium">
          {column.name}
        </p>
      ))}
      {products.map((lineItem) => {
        if (
          quantityValues[lineItem.product_id] <= 0 &&
          String(quantityValues[lineItem.product_id]) !== ''
        ) {
          return null;
        }
        return (
          <Fragment key={lineItem.product_id}>
            <img
              src={lineItem.product_images[0].image_url}
              alt={lineItem.product_images[0].image_alt}
              className="w-20 h-20 object-fit rounded-md"
            />
            <Link
              href={`/${router.query.storeUrl}/product/${lineItem.product_id}/${lineItem.product_name_slug}`}
            >
              <p className="w-30 truncate">{lineItem.product_name}</p>
            </Link>
            <p>
              {' '}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(lineItem.product_price)}
            </p>
            <div className="w-16">
              <InputWithLabel
                label="Quantity"
                name="quantity"
                id={String(lineItem.product_id)}
                type="number"
                state={quantityValues}
                showLabel={false}
                direction="column"
                setState={setQuantityValues}
                min={0}
              />
            </div>
            <p>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(
                lineItem.product_price * quantityValues[lineItem.product_id]
              )}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
