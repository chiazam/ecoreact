import { statc } from "./static";
import { Unfeatprod } from "./unfeatprod";

export function Featprod(props) {

    return (

        <>

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Featured Products</section>

            <section className="flex justify-center p-1">

                <Unfeatprod code="Code - Y523201" cover={statc.img.chair_1} name="Cantilever chair" price="$42.00" />

                <Unfeatprod code="Code - Y523201" cover={statc.img.chair_2} name="Cantilever chair" price="$42.00" />

                <Unfeatprod code="Code - Y523201" cover={statc.img.chair_3} name="Cantilever chair" price="$42.00" />

                <Unfeatprod code="Code - Y523201" cover={statc.img.chair_4} name="Cantilever chair" price="$42.00" />

            </section>

        </>

    )

};