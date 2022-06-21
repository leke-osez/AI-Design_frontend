import React from 'react'
import './possibility.css';
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className= 'gpt3__possibility-container section__padding'>
            <div className= 'gpt3__possibility-image'>
                <img src = {possibility} alt = 'possibility'/>
            </div>
            <div className= 'gpt3__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                
                <h1 className= 'gradient__text'>The possibilities are beyond your imagination</h1>

                <section className='gpt3__possibility-content__body'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </section>

                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
