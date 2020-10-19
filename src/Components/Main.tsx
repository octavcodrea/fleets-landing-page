import React from 'react';
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Footer from './Footer';
import Header from './Header';
import ParallaxContainer from './ParallaxContainer';
import SliderComponent from './Slider';

class Main extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header language="English"/>
                <SliderComponent />
                <Cards1 />
                <Cards2 />
                <ParallaxContainer />
                <Footer language="English"/>
                
            </React.Fragment>
        )
    }
}

export default Main;