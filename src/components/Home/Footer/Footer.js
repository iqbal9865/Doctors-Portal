import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
       <section className='footer-section mt-5'>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-3">
                        <a className="link" href="">Emergency Dental Care</a>
                        <a className="link" href="">Check Up</a>
                        <a className="link" href="">personal diseases treatment</a>
                        <a className="link" href="">Tooth Extraction</a>
                        <br />
                        
                    </div>
                    <div className="col-md-3">
                        <a className="link" href="">Check Up</a>
                        <a className="link" href="">Services</a>
                        <a className="link" href="">Check Up</a>
                        <a className="link" href="">Emergency Dental Care</a>
                        <br />
                       
                    </div>
                    <div className="col-md-3">
                        <a className="link" href="">Oral Health</a>
                        <a className="link" href="">Check Up</a>
                        <a className="link" href="">personal diseases treatment</a>
                        <a className="link" href="">Tooth Extraction</a>
                        <br />
                    </div>
                    <div className="col-md-3">
                        <a className="link" href="">Our Address</a>
                        <a className="link" href="">JindaBazar, Sylhet-3106</a>
                        
                    </div>
                </div>
                <p className="link-p" style={{textAlign:'center'}}>CopyRight 2021 All Right Reserved <a className="link" style={{display:'inline',color:'#17d3c2'}} href="https://iqbal-s-portfolio.web.app/" target='_blank'>Md. Iqbal Ahmed</a></p>
            </div>
       </section>
    );
};

export default Footer;