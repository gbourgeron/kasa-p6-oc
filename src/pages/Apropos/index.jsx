import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import rulesListe from '../../apropos.json';
import './index.scss';

function Apropos() {
    return (
        <main>
            <Banner page="about" />
            <section className="rules-list">
                {rulesListe.map(({ id, title, description }) => (
                    <Collapse key={id} title={title} content={description} contentType="paragraph" />
                ))}
            </section>
        </main>
    );
}

export default Apropos;