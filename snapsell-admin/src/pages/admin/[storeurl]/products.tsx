import AdminLayout from '@/layouts/AdminLayout'


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
        <AdminLayout title="Products">
            <Products />
        </AdminLayout>
    )
}
