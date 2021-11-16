export function Unfeatprod_4(props) {

    // View Shop

    return (<><section className="m-2">

        <section className="flex justify-center items-center shadow-md w-32 h-32 bg-gray-300 rounded-full">

            <img className="w-28 h-28" src={props.cover} alt="" />

        </section>

        {(props.active===true)?(<section style={{marginTop: "-3em",marginBottom: "1.3em"}} className="flex justify-center"><button className="p-1 text-sm text-white bg-green-400"> View Shop </button></section>):(<></>)}

        <section className="p-1 text-center text-purple-700 text-sm">{props.name}</section>

        <section className="p-1 text-purple-700  text-center text-sm">{props.price}</section>

    </section></>);


};