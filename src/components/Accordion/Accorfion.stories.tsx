import {Accordion, AccordionType} from "./Accordion2";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

const callback = action('accordion mode change')
const onClickCallBack = action('some item')

const Template :Story<AccordionType>= (args)=> <Accordion{...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    title : 'Menu',
    newCollapsed : true,
    setNewCollapsed: onClickCallBack
    //onChange:callback,
   // items:[],
    //onClick: onClickCallBack
}