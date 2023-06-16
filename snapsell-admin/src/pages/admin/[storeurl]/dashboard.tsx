import AdminLayout from '@/layouts/AdminLayout'


function Dashboard() {
    return (
        <>
            <p>Dashboard</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AdminLayout title="Dashboard">
            <Dashboard />
        </AdminLayout>
    )
}
