import AuthLayout from '@/layouts/AuthLayout'

function SignUp() {
    return (
        <>
            <p>Sign-up</p>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function() {
    return (
        <AuthLayout title="Sign Up">
            <SignUp />
        </AuthLayout>
    )
}
