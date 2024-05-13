import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import rulesListe from '../../apropos.json';

function Apropos() {
    return (
        <main>
            <Banner page="about" />
            <section className="rules-list">
                {rulesListe.map(({ id, title, description }) => (
                    <Collapse key={id} title={title} description={description} />
                ))}
            </section>
        </main>
    );
}

export default Apropos;