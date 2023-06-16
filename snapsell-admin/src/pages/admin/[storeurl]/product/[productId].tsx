import AdminLayout from '@/layouts/AdminLayout'


function ProductDetail() {
    return (
        <>
            <p>ProductDetail</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AdminLayout title="Product details">
            <ProductDetail />
        </AdminLayout>
    )
}
