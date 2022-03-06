import {Button} from 'antd'
import omg from '../images/omg.png'
import './landingPage.css'

interface LandingPageProps {
    router: (bool: boolean) => void
}

const LandingPage: React.FC<LandingPageProps> = ({router}) => {
    const handleClick = () => {
        return (event: React.MouseEvent) => {
            router(false)
            event.preventDefault();
          }
    }

    return(
        <div className='landing_page'>
            <div className='landing_page_top'>
                <h1>Do you want your URLs to be muuuch(!) shorter? </h1>
                <p> Give it a try!</p>
                <Button onClick={handleClick()} type="primary" size='large'>
                    Get Started
                </Button>
            </div>
            <img className='omg_img' src={omg} alt="omg" />
        </div>
    );
};

export default LandingPage;