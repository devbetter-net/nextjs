export default function BlogLayout({ children }) {
    return (
        <section>
            <h1>Blog header</h1>
            <nav></nav>

            {children}
        </section>
    )
}