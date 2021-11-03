import AUI_Button from "../components/AUI_Button/";

// Import action for onclick actions.
import {action } from '@storybook/addon-actions';


//👇 This default export determines where your story goes in the story list
export default {
    title: 'AUI_Button',
    component: AUI_Button,
    // Default values can be placed within here
    argTypes: {
        onClick: {action: 'clicked'},
        children: {
            defaultValue: 'Default Text',
        },
     
     
    }
};

//👇 We create a “template” of how args map to rendering
// eslint-disable-next-line
const Template = (args) => <AUI_Button {...args} />;

// Binding allows us to copy the function above to these variables
export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Dark = Template.bind({});

Default.args={
    cursor:'pointer',
    padding: '10px',
}

Primary.args = {
    /*👇 The args you need here will depend on your component */
    ...Default.args,
    color: 'white',
    backgroundColor: 'steelblue',
    padding: '10px',
    borderColor: 'transparent',
    borderRadius: '5px',
    children: 'Primary',
    onClick: action('Primary Button Clicked')
};

Secondary.args = {
    ...Default.args,
    color: 'white',
    backgroundColor: '#37a545',
    padding: '15px',
    borderColor: 'transparent',
    borderRadius: '10px',
    children: 'Secondary'
};

Dark.args = {
    ...Default.args,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '1em',
    borderColor: 'black',
    borderRadius: '10px',
    children: 'Dark'
};

Dark.args = {
    ...Default.args,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '1em',
    borderColor: 'black',
    borderRadius: '10px',
    children: 'Dark'
};