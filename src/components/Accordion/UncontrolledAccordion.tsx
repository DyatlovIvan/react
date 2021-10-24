import { useState } from "react"
import { AccordionBody } from "./AccordionBody"
import { AccordionTitle } from "./AccordionTitle"
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";

type AccordionType = {
    title: string
   
}
export function UncontrolledAccordion(props: AccordionType) {
    let [collapsed,setCollapsed] = useState(true);


    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}
                                        presentCollapsed={collapsed}
                                        setCollapsed = {setCollapsed} />
            {!collapsed && <AccordionBody />}
        </div>
    )

}