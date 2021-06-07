import React from 'react';
import maskGroup from '../../../images/Mask Group 3.png'
import './FeatureService.css';
const FeatureServices = () => {
    return (
        <section className='feature-area px-3 pb-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-1 d-none d-md-block'>
                        <img id='img' src={maskGroup} alt="" className="img-fluid w-100" />
                    </div>
                    <div style={{textAlign:'justify'}} className='col-md-7 '>
                        <h1>Exceptional Dental <br/> Care, On Your Terms </h1>
                        <p style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia a nobis quas libero, nesciunt ex repellendus obcaecati blanditiis nemo minus architecto praesentium ratione. Quia est eos nobis aspernatur aut labore id aperiam quae eligendi, aliquam commodi sit! Doloribus impedit sequi ipsam repudiandae veniam, eveniet quidem ducimus temporibus similique praesentium quod corporis, quisquam ab facilis tempore ex reprehenderit explicabo libero molestias fugit eum.  molestiae natus officiis perferendis quidem praesentium necessitatibus est voluptate nihil nemo eum adipisci explicabo tempora amet aut hic. Perferendis vero praesentium accusamus dolores iure, repudiandae nesciunt rruuhjw</p>
                        <button style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;