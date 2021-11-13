export function Symtext(props) {

    return(<section className={(props.rev === true ? 'flex-row-reverse' : '')+" flex p-1"}>

        {(props.sym !== false ? 
        
            <section className="flex p-1 items-center">
            
                <img src={props.sym} alt="" />
            
            </section>
            
        : '')}

        {(props.text !== false ?

            <section className="flex p-1 items-center">{props.text}</section>

        : '')}

    </section>);
    
}