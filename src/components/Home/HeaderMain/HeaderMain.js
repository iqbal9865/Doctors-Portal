import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
   
    return (
        <main style={{height:'550px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                <p style={{color:'gray'}} className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem maxime dicta cupiditate officiis ratione sed eius facilis hic odit vitae!</p>
                <button style={{backgroundColor: '#17d3c2', padding:'11px 26px', border:'none', color:'white',fontWeight:'700'}} className=''><b> GET APPOINTMENT</b></button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;