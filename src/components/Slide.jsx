import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import mob from "./Images/mob1.png";
import tab from "./Images/tab1.png";
const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function Slide() {
    return (
        <div style={{}}>
            <Carousel itemClass="carousel-item-padding-40-px" showDots responsive={responsive} arrows={false}>

                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={tab} alt='mob' style={{ height: '300px', width: '400px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
                <img src={mob} alt='mob' style={{ height: '300px', margin: '40px' }} />
            </Carousel>
        </div>
    )
}

export default Slide