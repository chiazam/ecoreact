import { statc } from "./static";
import { Symtext } from "./symtext";

export function Header(props) {

    return (<>

        <header className="border-gray-300 border-b sticky">

            <section className="bg-purple-700 text-white">

                <section className="flex m-auto">

                    <Symtext sym={statc.img.envlp_symb} text={statc.email} />

                    <Symtext sym={statc.img.phone_symb} text={statc.phone} />

                    <section className="flex-1"></section>

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.lang} />

                    <Symtext sym={statc.img.arrow_symb} rev={true} text={statc.coin} />

                    <Symtext sym={statc.img.user_symb} rev={true} text="Login" />

                    <Symtext sym={statc.img.love_symb} rev={true} text="Wishlist" />

                    <Symtext sym={statc.img.cart_symb} rev={true} text={false} />

                </section>

            </section>

            <section className="bg-white">

                <section className="flex m-auto">

                    <Symtext text={<section className="font-bold text-lg">Hekto</section>} rev={true} sym={false} />

                    <Symtext sym={statc.img.arrow_pink_symb} rev={true} text={<section className="text-pink-600">Home</section>} />

                    <Symtext text="Pages" rev={true} sym={false} />

                    <Symtext text="Products" rev={true} sym={false} />

                    <Symtext text="Blog" rev={true} sym={false} />

                    <Symtext text="Shop" rev={true} sym={false} />

                    <Symtext text="Contacts" rev={true} sym={false} />

                    <section className="flex-1"></section>

                    <Symtext sym={false} rev={true} text={<section className="border-gray-300 border flex">

                        <input className="p-1 border-0 bg-transparent outline-none"/>

                        <button className="p-1 flex items-center border-0 bg-pink-600 outline-none">

                            <img alt src={statc.img.sach_symb} />

                        </button>

                    </section>} />

                </section>

            </section>

        </header>

    </>);

}