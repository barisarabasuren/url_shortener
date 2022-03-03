import {Button} from 'antd'
import { Link } from "react-router-dom";
import omg from '../images/omg.png'
import './landingPage.css'

const LandingPage = () => {
    return(
        <div className='landing_page'>
            <div className='landing_page_top'>
                <h1>Do you want your URLs to be muuuch(!) shorter? </h1>
                <p> Give it a try!</p>
                <Link to='/home'>
                    <Button type="primary" size='large'>
                        Get Started
                    </Button>
                </Link>
                
            </div>
            <img className='omg_img' src={omg} alt="omg" />
        </div>
    );
};

export default LandingPage;