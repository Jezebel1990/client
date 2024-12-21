import { Meta } from '@storybook/react'; 
import Footer from '.';


 export default { 
    title: 'Footer',
     component: Footer
} as Meta; 

export function Default() {
    return (
        <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
            <Footer />
        </div>
    );
}