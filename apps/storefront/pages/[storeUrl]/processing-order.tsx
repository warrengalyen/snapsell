import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../_app';
import HeadingText from '../../components/HeadingText';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function ProcessingOrder() {
  const router = useRouter();
  const {
    setCartItems,
  }: { setCartItems: React.Dispatch<React.SetStateAction<any>> } =
    useContext(CartContext);
  const [refetchQuantity, setRefetchQuantity] = useState(0);

  const {
    data: orderId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      setRefetchQuantity(refetchQuantity + 1);
      return fetch('/api/checkout/' + router.query.payment_intent).then((res) =>
        res.json()
      );
    },
    enabled: !!router.isReady && !!router.query.payment_intent,
    refetchInterval: () => {
      if (refetchQuantity > 10) return false;
      return 1000;
    },
  });

  useEffect(() => {
    setCartItems([]);
    window.localStorage.removeItem('cartItems');
  }, []);

  if (
    isError ||
    (router.isReady && !router.query.payment_intent) ||
    refetchQuantity > 10
  )
    return (
      <p>
        Sorry, an error occurred loading this page. Your order has still been
        processed.
      </p>
    );

  if (!isLoading && orderId.order_id && router.query.storeUrl) {
    router.push(
      `/${router.query.storeUrl}/${orderId.order_id}/order-confirmation`
    );
  }

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col text-center gap-2">
      <LoadingSpinner />
      <div>
        <HeadingText size="h4">Processing order...</HeadingText>
        <p>Please wait while we process your order</p>
      </div>
    </div>
  );
}
