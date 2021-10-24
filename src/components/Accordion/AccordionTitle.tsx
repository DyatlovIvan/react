type AccordionTitleType = {
    title:string
    newCollapsed:boolean
    setNewCollapsed:(value:boolean) => void
} 

export function AccordionTitle(props:AccordionTitleType){

    return(
        <h1 onClick={()=>props.setNewCollapsed(!props.newCollapsed)}>{props.title}</h1>
    )
}