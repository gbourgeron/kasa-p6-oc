import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logementsListe from '../../logements.json';
import './index.scss';

function Home() {
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" isHome={true} />
            <section>
                <ul className="gallery">
                    {logementsListe.map(({ id, title, cover }) => (
                    <Card key={id} id={id} title={title} cover={cover} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Home;
