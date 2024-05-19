import './index.scss';

function Banner({ title, isHome }) {
    const backgroundClass = isHome ? 'background--home' : 'background--about';
    let titleParts = [];
    if (title) {
        titleParts = title.split(', ');
    }
    // const titleParts = title.split(', ');

    return (
        <section className="banner">
            {titleParts && (
                <h2>
                    {titleParts[0] && <span className='first-part'>{titleParts[0]}, </span>}
                    <br className='mobile-br' />
                    <span className='second-part'>{titleParts[1]}</span>
                </h2>
            )}
            {/* {title && <h2>{title}</h2>} */}
            <div className={`background ${backgroundClass}`}></div>
        </section>
    )
}

export default Banner;