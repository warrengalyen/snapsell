import MainLayout from '@/layouts/MainLayout'

function ProductPage() {
    return (
        <>
            <p>Products</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <MainLayout title="name">
            <ProductPage />
        </MainLayout>
    )
}
