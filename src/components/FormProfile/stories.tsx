import { Meta, StoryObj } from '@storybook/react' 

import FormProfile from '.' 

export default { 
    title: 'Form/FormProfile', 
    component: FormProfile
} as Meta 

export const Default: StoryObj = () => (
<div style={{ maxWidth: 860, margin: 'auto' }}>
<FormProfile />
</div>
)

Default.args = {}