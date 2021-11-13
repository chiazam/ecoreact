export function Tiny_side(props) {

    return (<>

        <section className="w-52 p-1 flex">

            <section className="p-1 bg-gray-100">
                
                <img className="w-10 h-10" alt="" src={props.cover}/>
            
            </section>

            <section class="p-1">

                <section className="font-bold text-purple-800 text-sm">{props.name}</section>

                <section className="text-purple-800 text-sm">{props.prompt}</section>

            </section>

        </section>

    </>)

}