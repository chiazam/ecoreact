import { statc } from "./static";


export function Sofa_1st(props) {

    return (<>

        <section className="bg-gray-100 p-16 my-16">

            <section className="flex justify-center">

                <section className="p-1">

                    <img className="w-96 h-96" src={statc.img.sofa_2} alt="" />

                </section>

                <section className="p-1 w-96">

                    <section className="font-bold text-xl text-purple-800 p-1">Unique Features Of leatest &
                        Trending Poducts</section>

                    <section className="li-shine py-8">

                        <li className="red p-1 text-gray-500 text-sm">All frames constructed with hardwood solids and laminates</li>

                        <li className="blue p-1 text-gray-500 text-sm">Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails</li>

                        <li className="green p-1 text-gray-500 text-sm">Arms, backs and seats are structurally reinforced</li>


                    </section>

                    <section className="flex">

                        <section className="px-2 flex items-center text-white h-10 bg-pink-600 rounded-sm mr-2">Add To Cart</section>

                        <section>

                            <section className="p-1 text-purple-500 font-bold text-sm">B&B Italian Sofa </section>

                            <section className="p-1 text-purple-500 text-sm">$32.00</section>

                        </section>

                    </section>

                </section>

            </section>

        </section>

    </>)

}