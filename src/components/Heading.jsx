import React from 'react'
import "./Heading.css"
function Heading() {
    return (
        <div className='container'>
            <div className='subContainer'>
                <div className='part-1'>
                    <button className='btn'>Click me</button>
                </div>
                <div className='part-2'>
                    <h1>Interactive demo </h1>
                    <p>Lorem ipsum dolor sit amet consectetuendi aut molestiae <span style={{ color: 'orangered' }}>temporibus ea, a aliquid id?</span></p>
                </div>
            </div>
        </div>
    )
}

export default Heading