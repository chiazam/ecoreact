export function Banner_1(props) {

    return (

        <section className="my-6">

            <section>

                <img className="w-full" src={props.cover} alt="" />

            </section>

            <section style={{marginTop: "-10em",marginBottom: "8em"}} class="relative">

                <section  className="font-bold text-xl text-purple-800 p-1 text-center"> {props.name} </section>

                <section className="flex justify-center items-center"> <button className="px-2 flex items-center text-white h-10 bg-pink-600 rounded-sm mr-2">{props.button}</button> </section>

            </section>

        </section>

    );

}