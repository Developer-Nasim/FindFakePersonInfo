import emailjs from '@emailjs/browser'; 
export default function SendMail(mailinfo) { 
    const templateParams = {...mailinfo};
    emailjs.send('service_mvr5sfr','template_02os09h', templateParams, import.meta.env.VITE_PUBLIC_KEY)
        .then((response) => {
           console.log('SUCCESS! sent mail', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}