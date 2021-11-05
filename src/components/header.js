import { statc } from "./static";
import { Symtext } from "./symtext";

export function Header(props) {

    return (<>

        <header>

            <section className="bg-purple-700 text-white">

                <section className="flex">

                    <Symtext sym={statc.img.envlp_symb} text={statc.email} />

                    <Symtext sym={statc.img.phone_symb} text={statc.phone} />

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.lang} />

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.coin} />

                </section>

            </section>

            <section></section>

        </header>

    </>);

}