import React from 'react'
import img1 from "./Images/computer.png";
import "./MainContainer.css"
// import img2 from "./images/Screenshot (17).png";
function MainContainer() {
    return (
        <div>
            <div class="main-section-laptop">
                <div class="left-section-lapo">
                    <img src={img1} id="book-com" alt="logo" />
                </div>
                <div class="right-section-cont">
                    <p class="Happy-content">
                        Benefits.Coverage that'll make everyone happy .
                    </p>
                    <p id="cool">
                        HRmatters,simplifies the process of curating .and providing great
                        benefits to your pepole from comprehensive healthcare plans to perks
                        like commuter benefits .
                    </p>
                </div>
            </div>
            {/* ***************************************************************************************** */}
            <div class="container2">
                <div class="left-class-easier">
                    <p class="payroll">Payroll.</p>
                    <p class="wow">Paying your people could't be easier.</p>
                </div>
                <div class="right-class-content">
                    <p class="milzo">
                        HRmatters.makes paying your people fast and easy.With a few clicks,
                        your done.But don't worry.we didn't stop there.Our payroll is packed
                        with advanced your company needs as it grows larger and more
                        complex.
                    </p>
                    <p class="dark-content">And so much more ....</p>
                    <p class="pritty">
                        Mangaing is your people complex. The HRmatters .Platefrom help in
                        the matter most .
                    </p>
                </div>
            </div>
            {/* **************************************************************************** */}
            <div class="img-main-section">
                {/* <img src={img2} id="flower-img" alt="logo" /> */}
            </div>
        </div>

    )
}

export default MainContainer