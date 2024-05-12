function Banner({ title }) {
    return (
        <section className="banner">
            {title && <h2>{title}</h2>}
        </section>
    )
}

export default Banner;