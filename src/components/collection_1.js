

export function Collection_1(props) {

    let bg_ = "bg-gray-100";

    if(props.active===true){

        bg_ = "bg-pink-100";

    }

    return (<>

        <section className={bg_+" w-52 p-2 my-2 mx-1"}>

            <section className="font-bold text-purple-800">{props.name}</section>

            <section>
                
                <span className="border-b text-sm border-pink-600 text-pink-600">{props.prompt}</span>
                
            </section>

            <section className="flex justify-end">
                
                <img className="w-40 h-20" alt="" src={props.cover}/>
            
            </section>

        </section>

    </>);

}