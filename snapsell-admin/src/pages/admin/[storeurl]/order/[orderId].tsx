import AdminLayout from '@/layouts/AdminLayout'
import { useRouter } from 'next/router'


function OrderDetail() {
    return (
        <>
            <p>Order detail</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AdminLayout title="Order Details">
            <OrderDetail />
        </AdminLayout>
    )
}
