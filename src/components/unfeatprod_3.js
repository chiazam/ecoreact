import { statc } from "./static";
import { Symtext } from "./symtext";

export function Unfeatprod_3(props) {

    return (<>

        <section className=" shadow-md border border-gray-100 mx-1 rounded-md w-40">

            <section className="p-1">

                <img className="m-auto w-16 h-16" src={props.cover} alt="" />

            </section>

            <section className="p-1 text-center font-bold text-purple-700 text-sm">{props.name}</section>

            <section className="p-1 text-gray-500 text-center text-sm">{props.desc}</section>

        </section>

    </>);

};