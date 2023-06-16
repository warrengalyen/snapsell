import MainLayout from '@/layouts/MainLayout';

function Cart() {
  return (
    <>
      <p>Cart</p>
    </>
  );
}

// eslint-disable-next-line react/display-name
export default function() {
  return (
    <MainLayout title='name'>
      <Cart />
    </MainLayout>
  );
}
