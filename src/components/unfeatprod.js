import { statc } from "./static";
import { Symtext } from "./symtext";
import { Dotter } from "./dotter";

export function Unfeatprod(props) {

    let bg_color = "bg-white";

    let txt_color1 = "text-pink-600";

    let txt_color2 = "text-purple-600";

    let bg_color_opp = "bg-purple-600";

    if (props.active === true) {

        bg_color = "bg-purple-600";

        txt_color1 = "text-white";

        txt_color2 = "text-white";

        bg_color_opp = "bg-white";

    }

    return (

        <>

            <section className={bg_color + " shadow-md border border-gray-100 mx-1 rounded-md w-36"}>

                {(props.active === true) ? (

                    <section style={{ marginBottom: -37 }} className="flex relative">

                        <Symtext sym={statc.img.cart_purple_symb} text={false} />

                        <Symtext sym={statc.img.love_purple_symb} text={false} />

                        <Symtext sym={statc.img.sach_purple_symb} text={false} />

                    </section>

                ) : (<></>)}

                <section className="bg-gray-200">

                    <img className="m-auto w-full h-36" src={props.cover} alt="" />

                </section>

                {(props.active === true) ? (

                    <button style={{ marginTop: -32 }} className="flex p-1 text-center text-white bg-green-500 text-sm relative m-auto rounded-sm"> View Details </button>

                ) : (<></>)}

                <section className={txt_color1 + " p-1 text-center"}>{props.name}</section>

                <Dotter clanem="pt-1 rounded-sm flex-1" bg={['bg-green-300','bg-pink-300',bg_color_opp]}/>

                <section className={txt_color2 + " p-1 text-center text-xs"}>{props.code}</section>

                <section className={txt_color2 + " p-1 text-center text-xs"}>{props.price}</section>

            </section>

        </>

    );

}