import { statc } from "./static";
import { Symtext } from "./symtext";

export function Header(props) {

    return (<>

        <header>

            <section className="bg-purple-700 text-white flex">

                <section className="flex m-auto">

                    <Symtext sym={statc.img.envlp_symb} text={statc.email} />

                    <Symtext sym={statc.img.phone_symb} text={statc.phone} />

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.lang} />

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.coin} />

                    <Symtext sym={statc.img.user_symb} rev={true} text="Login" />

                    <Symtext sym={statc.img.love_symb} rev={true} text="Wishlist" />

                    <Symtext sym={statc.img.cart_symb} rev={true} text="" />

                </section>

            </section>

            <section></section>

        </header>

    </>);

}