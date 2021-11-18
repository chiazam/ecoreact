export function Blog_1(props) {

    let color = " text-purple-700";

    let b_color = " border-purple-700";

    if(props.active===true){

        color = " text-pink-700";

        b_color = " border-pink-700";

    }

    return (<>

        <section className="shadow-md border border-gray-100 mx-4 rounded-md w-52 mb-3">

            <section>

                <img className="w-full" src={props.cover} alt="" />

            </section>

            <section className="py-1 px-2 flex text-purple-700">
                
                <section className="px-1 text-sm">{props.owner}</section>
                
                <section className="px-1 text-sm">{props.date}</section>
                
            </section>

            <section className={"py-1 px-2 text-center font-bold text-sm"+color}>{props.topic}</section>

            <section className="py-1 px-2 text-center text-sm text-gray-400">{props.desc}</section>

            <section className="py-1 px-2 flex">
                
                <section className={"border-b text-sm"+color+b_color}>Read More</section>
                
            </section>

        </section>

    </>);

};