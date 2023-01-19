import {useState} from 'react'

const ContactMe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/send", {
            method: "POST",
            headers: {
                    "Content-type": "application/json",
                },
            body: JSON.stringify({name, email, message}),
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            if(data.status === 200){
                setName("");
                setEmail("");
                setMessage("");
            }
        })
        .catch((err)=> console.log(err));
        
    }
return(
    //have linked in and socials on there
    // background of ripples cominng up from bottom
    <div className="section-contact">
        <h2 className="capital small-section">
            LETS CONNECT!
        </h2>
        <div className="big-section">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='section1'>
                    <div>
                        <input className='width100 form-format' type="text" name="name" placeholder="name" value={name} required onChange={(ev)=> setName(ev.target.value)}/>
                    </div>
                    <div>
                        <input className='width100 form-format' type="email" name="email" placeholder="your email address" value={email} required onChange={(ev)=> setEmail(ev.target.value)}/>
                    </div>
                </div>
                
                <div className='section2'>
                    <textarea className='width100 height100 form-format' name="message" placeholder="message" value={message} required onChange={(ev)=> setMessage(ev.target.value)}/>
                </div>
                <div>
                    <button className="form-format" type="submit" value="submit">Send</button> 
                </div>
            </form>
        </div>
    </div>
);
}
export default ContactMe;