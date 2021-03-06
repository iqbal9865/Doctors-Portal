import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
       <section className='contact-section mt-2 m-auto py-5'>
           <div className="container">
               <h4 style={{color:'#17d3c2', textAlign: 'center'}}>Contact US</h4>
               <h1 className="text-white" style={{textAlign: 'center'}}>Always Connect With Us</h1>
               <form action="https://formspree.io/f/mgerzlgv" method="POST">
                   <div className='form-group p-5'>
                        
                        <input placeholder='Email Address*' type="email" name='email' className="form-control" id="exampleInputEmail1" required /> <br />

                        
                        <input placeholder='Subject*' name='subject' type="text" className="form-control" id="subject" required />
                        <br />
                        <div class="form-group">
                            
                            <textarea placeholder='Your Message' class="form-control" id="exampleFormControlTextarea1" rows="5" required name='details'></textarea>
                        </div> <br />
                        <button style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}}>SUBMIT</button>
                   </div>
               </form>
           </div>
       </section>
    );
};

export default Contact;