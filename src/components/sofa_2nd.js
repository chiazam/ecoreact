import { statc } from "./static";


export function Sofa_2nd(props) {

    return (<>

        <section className="p-16 my-4">

            <section className="flex flex-row-reverse justify-center">

                <section className="p-1">

                    <img className="w-96 h-96" src={statc.img.sofa_3} alt="" />

                </section>

                <section className="p-1 w-96">

                    <section className="font-bold text-xl text-purple-800 p-1">20% Discount Of All Products</section>

                    <section className="text-pink-600">Eams Sofa Compact</section>

                    <section className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</section>

                    <section className="flex">

                        <section className="li-shine">

                            <li className="p-1 text-gray-500 text-sm">Material expose like metals</li>

                            <li className="p-1 text-gray-500 text-sm">Simple neutral colours.</li>

                        </section>

                        <section className="li-shine">

                            <li className="p-1 text-gray-500 text-sm">Clear lines and geomatric figures</li>

                            <li className="p-1 text-gray-500 text-sm">Material expose like metals</li>

                        </section>

                    </section>

                    <section className="flex mt-8">

                        <section className="px-2 flex items-center text-white h-10 bg-pink-600 rounded-sm mr-2">Shop Now</section>

                    </section>

                </section>

            </section>

        </section>

    </>)

}