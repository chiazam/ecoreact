export function Symtext(props) {

    return(<section className={(props.rev === true ? 'flex-row-reverse' : '')+" flex p-2"}>

        {(props.sym !== false ? 
        
            <section className="flex p-1 items-center">
            
                <img alt src={props.sym} />
            
            </section>
            
        : '')}

        {(props.text !== false ?

            <section className="flex p-1 items-center">{props.text}</section>

        : '')}

    </section>);
    
}