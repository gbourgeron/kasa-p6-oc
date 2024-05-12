import './index.scss';

function Banner({ title, isHome }) {
    const backgroundClass = isHome ? 'background--home' : 'background--about';

    return (
        <section className="banner">
            {title && <h2>{title}</h2>}
            <div className={`background ${backgroundClass}`}></div>
        </section>
    )
}

export default Banner;