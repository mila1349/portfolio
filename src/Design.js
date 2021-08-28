import React, { Component } from 'react';
import Navbar from './Navbar'
import Carousel from "react-elastic-carousel";
import {Img} from './DesignImg'
import './Design.css'
import ImageZoom from "react-image-zooom";

import Ohii1 from "./image/ohii-landing.PNG"
import Ohii2 from "./image/ohii.png"
import Hotel1 from "./image/hotel-landing.PNG"
import Hotel2 from "./image/hotel.png"
import Rest1 from "./image/restaurant-landing.PNG"
import Rest2 from "./image/restaurant.png"

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:750, itemsToShow:3},
    {width:1200, itemsToShow:4},
]

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
          design: [
            {
                small:Ohii1,
                big:Ohii2
            },
            {
                small:Hotel1,
                big:Hotel2
            },
            {
                small:Rest1,
                big:Rest2
            }],

            show:Ohii2,
            
        };
    }

    handleClick(img){

        this.setState({
            show:img
        })
    }

    render() {
    return (
        <div className="design">
            <Navbar
                no="04"
                name="Design"
            />

            <div className="image" key={this.state.show}>
                <ImageZoom
                    src={this.state.show}
                    className="hover-img"
                    alt="hover this shit"
                />
            </div>

            <div className="img-carousel">
                <Carousel breakPoints={breakPoints}>
                    {
                        this.state.design.map(item=>(
                            <Img
                                onClick={this.handleClick.bind(this, item.big)}
                                src={item.small}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
  }
}

export default Design;