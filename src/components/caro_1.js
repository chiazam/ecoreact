
export function Caro_1(props) {

    return (<>

        <section className="bg-gray-100 flex">

            <section>

                <img className="h-52 w-52" src={props.cover_1} alt=""/>

            </section>

            <section className="flex-1">

                <section className="mt-32 text-sm text-pink-500">{props.quote}</section>

                <section className="text-2xl font-bold">{props.topic}</section>

                <section className="text-sm text-gray-500">{props.desc}</section>

                <section class="flex">
                    
                    <section class="my-2 px-6 flex items-center text-white h-10 bg-pink-600 rounded-sm mr-2">{props.button}</section>

                </section>

            </section>

            <section className="flex-1"></section>

        </section>

    </>);

};