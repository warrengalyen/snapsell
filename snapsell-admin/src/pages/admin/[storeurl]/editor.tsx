import AdminLayout from '@/layouts/AdminLayout'


function Editor() {
    return (
        <>
            <p>Store editor</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AdminLayout title="Editor">
            <Editor />
        </AdminLayout>
    )
}
