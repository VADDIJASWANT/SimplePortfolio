import React,{useState,useRef} from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
export default function Contacts() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const recipientEmail = 'vaddijaswant@gmail.com';
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const submitButton = document.querySelector('#contactSubmitBtn');
    submitButton.classList.add('sending');
    submitButton.value = 'Sending...';
    emailjs
      .sendForm('service_fnhod57', 'template_oh4eykv', form.current, {
        publicKey: 'MELf92AogAd-Nzpd5',
      })
      .then(
        () => {
            console.log('SUCCESS!');
            submitButton.classList.remove('sending');
            submitButton.classList.add('success');
            submitButton.value = 'Sent Successfully';
            setTimeout(() => {
            submitButton.classList.remove('success');
            submitButton.value = 'Send';
            }, 10000);
        },
        (error) => {
            console.log('FAILED...', error.text);
            submitButton.classList.remove('sending');
            submitButton.classList.add('error');
            submitButton.value = 'Sending Failed';
            setTimeout(() => {
            submitButton.classList.remove('error');
            submitButton.value = 'Send';
            }, 10000);
        },
      );
  };
    const openContact = (type) => {
        switch(type){
            case 'github':
                window.open('https://github.com/VADDIJASWANT', '_blank');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/jaswant-vaddi-6699941ab/', '_blank');
                break;
            case 'message':
                const recipientName = encodeURIComponent(name);                
                const subject = encodeURIComponent(`Hi, I am ${name}`);
                const body = encodeURIComponent(`Name: ${name} \n PhoneNumber: ${number} \n ${message}`);
                const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
                window.open(mailtoLink, '_blank'); 
                break;
            default:
                const mailto = `mailto:${recipientEmail}?body=${""}`;
                window.open(mailto, '_blank'); 
                break;       
        }
    }

    return (
        <>
        <div id='contacts' className="font-kalam justify-center min-h-screen max-w-5xl mx-auto flex flex-col gap-10 px-20 sm:px-5">
            <p className='text-5xl font-bold'>Contact Me</p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
                <input name='user_name' id="name" placeholder="Name" className="input input-bordered w-full min-w-xs md:max-w-[75%] p-3 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} />
                <input name='user_phone' id="number" placeholder='Phone Number' className="input input-bordered w-full min-w-xs md:max-w-[75%] p-3 rounded-lg" value={number} onChange={(e) => setNumber(e.target.value)} />
                <input name='user_email' id='email' placeholder='Email' className="input input-bordered w-full min-w-xs md:max-w-[75%] p-3 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}  />
                <textarea name='message' style={{resize:'vertical'}} className='min-w-xs md:max-w-[75%] p-3 rounded-lg' rows='4' placeholder="Your Message ..." value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                <input id='contactSubmitBtn' type='submit' value='Send' className='btn btn-primary min-w-xs md:max-w-[75%] text-xl hover:bg-dark_primary hover:text-white bg-white' />
            </form>
            <div className='flex justify-center gap-5 min-w-xs md:max-w-[75%]'>
                <FontAwesomeIcon className='cursor-pointer' icon={faGithub} size='2xl' onClick={() => openContact("github")} />
                <FontAwesomeIcon className='cursor-pointer' icon={faEnvelope} size='2xl' onClick={() => openContact("")}  />
                <FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size='2xl' onClick={() => openContact("linkedin")} />
            </div>
        </div>
        </>
    )
}