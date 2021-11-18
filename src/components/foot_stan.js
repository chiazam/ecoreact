export function Foot_stan(props) {

    return (<>

        <section className="px-2 py-1">

            <section className="text-sm font-bold">{props.name}</section>

            {
                (props.active===true)?(<section className="flex">

                    <input className="p-1 flex-1 bg-gray-50" type="text" placeholder="Enter Email Address"/>
                    
                    <button className="p-1 bg-pink-500 text-white">Sign up</button>

                </section>):(<></>)
            }

            <section>{

                (props.list).map(

                    (value, i) => <section key={i} className="py-1 text-sm text-gray-500">{value}</section>

                )

            }</section>

        </section>

    </>);

};