import {ComponentMeta, ComponentStory} from '@storybook/react';
import { Rating } from './Rating';


export default {
    title: 'Components/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>



const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
export const RatingTemplate = Template.bind({});
