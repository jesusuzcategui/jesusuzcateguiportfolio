import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {BACKEND_URL} from "../shared/environment";

class Aboutpage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contenido: null
        };
    }

    componentDidMount() {
        axios.get(BACKEND_URL + "v2/pages/1833").then((response) => {
            console.log(response);
            this.setState({contenido: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        const contenido_render = document.querySelector("#contenido_render");
        if(this.state.contenido) {
            console.log(contenido_render);
            //contenido_render.innerHTML = this.state.contenido.content.rendered;
        }

        return (
            <div>
                {this.state.contenido && (<div>
                    <Container maxWidth="md">
                        <h1 style={{fontSize: "7rem", lineHeigth: "normal", margin: "0 auto", textAlign: "center"}}>{this.state.contenido.title.rendered}</h1>
                        <div id="contenido_render">
                            <div dangerouslySetInnerHTML={{__html: this.state.contenido.content.rendered}}></div>
                        </div>
                    </Container>
                </div>)}
            </div>
        );
    }
}

export default Aboutpage;