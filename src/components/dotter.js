export function Dotter(props) {

    return (<>{
        (props.bg.length > 0) ? (

            <section className="">

                <section className="w-8 m-auto flex justify-center items-center">{ 

                    (props.bg).map((value,i) => <section key={i} className={value+" flex-1 "+props.clanem}></section>)

                 }</section>

            </section>

        ) : (<></>)
    }</>)

}