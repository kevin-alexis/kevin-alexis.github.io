import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {Input, Textarea, Button} from "@nextui-org/react";
import {MailIcon} from '../MailIcon/MailIcon';
import Modal200 from '../Modal200/Modal200.jsx';
import Modal400 from '../Modal400/Modal400.jsx';

const Contact = () => {

    const form = useRef();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ri20ea4', 'template_7lqri6s', form.current, 'FHFjDOo2YIchum53z')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            setShowSuccessModal(true);
        }, (error) => {
            console.log(error.text);
            setShowErrorModal(true);
        });
        
};


    return (
        <section className="contact">
            <h1 id="header-contact">Contact</h1>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <Input
                isRequired
                key='outside'
                type="text"
                label="Full Name"
                labelPlacement='outside'
                placeholder='Your Name'
                name="user_name"
                startContent={
                    <p className='person'>👤</p>
                }
                />
                <Input
                isRequired
                key='outside'
                type="email"
                label="Email"
                placeholder='your@example.com'
                labelPlacement='outside'
                name="user_email"
                startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                />
                <Textarea
                name="message"
                cols="40" rows="10" 
                isRequired
                key='outside'
                type="email"
                label="Message"
                labelPlacement='outside'
                disableAutosize
                placeholder='Your Message'
                classNames={{
                        input: "resize min-h-[40px]",
                }}
                />
                <Button type='submit' value="Send" color="primary" variant="ghost">
                    Send
                </Button>  
            </form>
            {showSuccessModal && <Modal200 setShowSuccessModal={setShowSuccessModal}/>}
            {showErrorModal && <Modal400 setShowErrorModal={setShowErrorModal}/>}
        </section>
    );
}

export default Contact;
















// import React from "react";
// import {Input} from "@nextui-org/react";

// export default function Contact() {
//   const placements = [
//     "outside",
// ];

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-2">
//         <h3 className="text-default-500 text-small">Without placeholder</h3>
//         <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
//           {placements.map((placement) => (
//             <Input
//               key={placement}
//               type="email"
//               label="Email"
//               labelPlacement={placement}
//               description={placement}
//             />
//           ))}
//         </div>
//       </div>  
//     </div>  
//   );
// }
