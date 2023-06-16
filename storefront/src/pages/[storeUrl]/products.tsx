import MainLayout from '@/layouts/MainLayout'

function Products() {
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
            <Products />
        </MainLayout>
    )
}
