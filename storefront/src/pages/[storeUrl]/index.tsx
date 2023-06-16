import MainLayout from '@/layouts/MainLayout';

function StoreHome() {
  return (
    <>
      <p>Store home</p>
    </>
  );
}

// eslint-disable-next-line react/display-name
export default function() {
  return (
    <MainLayout title='name'>
      <StoreHome />
    </MainLayout>
  );
}
