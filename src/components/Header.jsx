import React,{ useState,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelopeOpen, faUserTie, faHandshake, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
export default function Header(){
    const [navDisplay,setNavDisplay] = useState(false)

    const toggleNav = () => {
        const nav = $('.Nav')
        if(nav.hasClass('bottom-10')){
            nav.removeClass('bottom-10').addClass('bottom-[-100%]')
        }else{
            nav.removeClass('bottom-[-100%]').addClass('bottom-10')
        }
    }
    const nav = (place) => {
        const Home = $("#Home")[0];
        const Skills = $("#skills")[0];
        const Contact = $("#contacts")[0];
        console.log(Contact);
        switch(place){
            case 'Home':
                Home.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Skills':
                Skills.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Contact':
                Contact.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }

    useEffect(() => {
        AOS.init()
    },[])
    return(
        <>
        <div className=''>
            <div data-aos="fade-right" onClick={toggleNav} className='flex fixed top-10 left-10' title='Nav Bar'>
                <FontAwesomeIcon icon={faBars} size='2x' />
            </div>
            <div className='Nav flex w-full justify-center items-center fixed bottom-[-100%] duration-300'>
                <div className='backdrop-blur-md navbar px-10 rounded-full flex items-center justify-center h-16 gap-5 bg-white border'>
                    <div onClick={() => {nav('Home')}} title="Home" className='Home flex items-center justify-center w-12 h-12 hover:bg-dark_primary hover:text-white text-dark_primary rounded-full'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} size='xl'/>
                    </div>
                    <div onClick={() => {nav('Skills')}} title="Skills" className='Skill flex items-center justify-center w-12 h-12 hover:bg-dark_primary hover:text-white text-dark_primary rounded-full'>
                        <FontAwesomeIcon icon={faUserTie} size='xl'/>                    
                    </div>
                    {/* <div className='Services flex items-center justify-center w-12 h-12 hover:bg-dark_primary hover:text-white text-dark_primary rounded-full'>
                        <FontAwesomeIcon icon={faHandshake} size='xl'/>
                    </div>
                    <div className='Testimonials flex items-center justify-center w-12 h-12 hover:bg-dark_primary hover:text-white text-dark_primary rounded-full'>
                        <FontAwesomeIcon icon={faBriefcase} size='xl'/>
                    </div> */}
                    <div onClick={() => {nav('Contact')}} title="Contact" className='Contact flex items-center justify-center w-12 h-12 hover:bg-dark_primary hover:text-white text-dark_primary rounded-full'>
                        <FontAwesomeIcon icon={faAddressBook} size='xl'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
