import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.JPG';
import React, { Component } from 'react';
import Slideshow from './slideshow';

const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
];
class SlideMain extends Component {
    render() {
        return (
            <div className="slide-main">
                <Slideshow
                    input={collection}
                    ratio={`3:2`}
                    mode={`automatic`}
                    timeout={`3000`}
                />
            </div>
        )
    }
}
export default SlideMain;