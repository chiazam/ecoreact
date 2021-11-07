
export function Unfeatprod(props) {

    return (

        <>

            <section style={{ width: 200 + 'px', height: 250 + 'px' }} className="shadow-md border border-gray-100 mx-1 rounded-md">

                <section className="bg-gray-200">

                    <img src={props.cover} alt="" style={{ width: 150 + 'px', height: 150 + 'px'  }} />

                </section>

                <section className="p-1 font-bold text-center text-pink-600">{props.name}</section>

            </section>

        </>

    );

}