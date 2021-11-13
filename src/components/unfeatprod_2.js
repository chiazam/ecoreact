import { statc } from "./static";
import { Symtext } from "./symtext";

export function Unfeatprod_2(props) {

    let txt_color1 = "text-pink-600";

    let txt_color2 = "text-purple-600";

    let bg_color = "bg-gray-100";

    let bg_color_opp = "bg-white";

    if (props.active === true) {

        bg_color_opp = "bg-gray-100";

        bg_color = "bg-white";

    }

    return (<>

        <section className="mx-1 w-56">

            {(props.active === true) ? (

                <section className="relative" style={{ marginBottom: -153 }}>

                    <section style={{width: "70px", borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" }} className="p-1 text-center bg-purple-700 text-white">Sale</section>

                    <section style={{marginTop: "20px"}}>

                        <Symtext sym={statc.img.cart_purple_symb} text={false} />

                        <Symtext sym={statc.img.love_purple_symb} text={false} />

                        <Symtext sym={statc.img.sach_purple_symb} text={false} />

                    </section>

                </section>

            ) : (<></>)}

            <section className={bg_color}>

                <img className="m-auto w-full h-48" src={props.cover} alt="" />

            </section>

            <section className="flex text-sm">

                <section className={txt_color2 + " p-1"}>{props.name}</section>

                <section className="flex-1"></section>

                <section className={txt_color2 + " p-1"}>{props.price}</section>

                <section className={txt_color1 + " p-1"}>{props.price_2}</section>

            </section>

        </section>

    </>);

};