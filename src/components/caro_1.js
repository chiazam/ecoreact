import { useState } from "react";

export function Caro_1(props) {

    const [cover_2, set_cover_2] = useState(props.cover_2[0]);

    return (<>

        <section className="bg-gray-100">

            <section className="flex">

                <section>

                    <img className="h-52 w-52" src={props.cover_1} alt="" />

                </section>

                <section className="flex-1">

                    <section className="mt-32 text-sm text-pink-500">{props.quote}</section>

                    <section className="text-2xl font-bold">{props.topic}</section>

                    <section className="text-sm text-gray-500">{props.desc}</section>

                    <section className="flex">

                        <section className="my-2 px-6 flex items-center text-white h-10 bg-pink-600 rounded-sm mr-2">{props.button}</section>

                    </section>

                </section>

                <section className="flex-1">

                    <section className="w-3/4">

                        <section className="p-1 flex relative justify-end" style={{marginBottom: "-80px"}}>

                            <img className="w-20" src={props.cover_3} alt="" />

                        </section>

                        <img className="w-full" src={cover_2} alt="" />

                    </section>

                </section>

            </section>

            <section className="flex justify-center">{

                (props.cover_2).map(

                    (value, i) => <section key={i} onClick={()=>{

                        set_cover_2(()=> value);

                    }} className="p-1 mx-1 my-2 border-pink-600 border rotate-45 transform"></section>

                )

            }</section>

        </section>

    </>);

};