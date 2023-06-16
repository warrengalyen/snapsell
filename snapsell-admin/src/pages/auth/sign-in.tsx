import AuthLayout from '@/layouts/AuthLayout'

function SignIn() {
    return (
        <>
            <p>Sign-in</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AuthLayout title="Sign In">
            <SignIn />
        </AuthLayout>
    )
}
