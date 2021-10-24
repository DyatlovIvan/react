import {UncontrolledAccordion} from "./UncontrolledAccordion";

type AccordionTitleType = {
    title:string
    setCollapsed:(value:boolean)=> void
    presentCollapsed:boolean
} 

export function UncontrolledAccordionTitle(props:AccordionTitleType){

    return(
        <h1 onClick={()=>{props.setCollapsed(!props.presentCollapsed)}}>{props.title}</h1>
    )
}