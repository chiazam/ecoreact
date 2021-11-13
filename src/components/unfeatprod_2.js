import { statc } from "./static";
import { Symtext } from "./symtext";

export function Unfeatprod_2(props) {

    let txt_color1 = "text-pink-600";

    let txt_color2 = "text-purple-600";

    let bg_color = "bg-gray-100";

    let bg_color_opp = "bg-white";

    let w ="w-56";

    let wrap= "";

    let img_h =" h-48";

    if (props.active === true) {

        bg_color_opp = "bg-gray-100";

        bg_color = "bg-white";

    }

    if(props.lin === true){

        txt_color1 = "text-purple-600";

        txt_color2 = "text-gray-600";

        w = "p-1 shadow-md border border-gray-100 mx-1 rounded-md w-36";

        wrap= " flex-wrap";

        img_h =" h-40";

    }

    return (<>

        <section className={w+" mx-1"}>

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

                <img className={"m-auto w-full"+img_h} src={props.cover} alt="" />

            </section>

            <section className={"flex text-sm"+wrap}>

                <section className={txt_color2 + " p-1"}>{props.name}</section>

                <section className="flex-1"></section>

                <section className={txt_color2 + " p-1"}>{props.price}</section>

                <section className={txt_color1 + " p-1"}>{props.price_2}</section>

            </section>

        </section>

    </>);

};