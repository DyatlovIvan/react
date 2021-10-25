import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";

export type AccordionType = {
  title: string
  newCollapsed:boolean
  setNewCollapsed:(value:boolean) => void
}
export function Accordion(props: AccordionType) {



  return (
    <div>
      <AccordionTitle title={props.title} setNewCollapsed={props.setNewCollapsed} newCollapsed={props.newCollapsed}/>
      {!props.newCollapsed &&<AccordionBody/>}
    </div>
  )

}