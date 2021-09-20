import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './SlidermainComponent.css';
import { Slide } from 'react-slideshow-image';
import { BACKEND_URL } from "../../shared/environment";
import axios from 'axios';

class Slidermain extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            slideImages: []
        };
    }

    componentDidMount() {
        axios.get(BACKEND_URL + "v2/slider/").then((response) => {
            console.log(response);
            this.setState({slideImages: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        const imagesSlides = this.state.slideImages.map((element, index) => {
            return (
                <div key={index} className="each-slide">
                    <div style={{'backgroundImage': `url(${element.post_meta_fields.imagen.link})`}}>
                        <div className="each-slide-container">
                            <h2 className="heading heading-ligth">{element.title.rendered}</h2>
                            <p className="small-text">{element.post_meta_fields.description}</p>
                        </div>
                    </div>
                </div>
            );
        });

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            prevArrow: <div className="arrow-control arrow-control-left"><span className="fas fa-chevron-left"></span></div>,
            nextArrow: <div className="arrow-control arrow-control-right"><span className="fas fa-chevron-right"></span></div>
        };

        return (
            <React.Fragment>
                <div className="slide-container">
                    <Slide {...properties}>
                        {imagesSlides}
                    </Slide>
                </div>
            </React.Fragment>
        );
    }


}

export default Slidermain;