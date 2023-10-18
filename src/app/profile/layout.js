export default function ProfileLayout({children}) {
    return (
        <div>
            <h1>This is Profile Header Layout</h1>

            {children}

            <h1>This is Profile Footer Layout</h1>
        </div>
    )
}