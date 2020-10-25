import React from 'react';
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Footer from './Footer';
import Header from './Header';
import ParallaxContainer from './ParallaxContainer';
import SliderComponent from './Slider';

import { IntlProvider } from "react-intl";
import English from "../Languages/en-US.json";
import Romanian from "../Languages/ro-RO.json";
import BackToTopButton from './BackToTopButton';
import { Events, animateScroll as scroll} from 'react-scroll';


interface MainProps{

}

interface MainState{
    Yscroll: number,
    language: any,
    local: string,
    languageProps: string,
    languageFlag: string
}

class Main extends React.Component<MainProps, MainState>{
    constructor(props: any){
        super(props)

        this.state={
            Yscroll: 0,
            local: (navigator.language),
            language: English,
            languageProps: "English",
            languageFlag: "GB"
        }

        this.scrollToTop = this.scrollToTop.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    changeLanguage = (selectedLanguage: string) =>{
        switch(selectedLanguage){
            case "English":{
                this.setState({
                    language: English,
                    local: "en",
                    languageProps: "English",
                    languageFlag: "GB"
                }); break;
            }

            case "Romanian":{
                this.setState({
                    language: Romanian,
                    local: "ro",
                    languageProps: "Română",
                    languageFlag: "RO"
                }); break;
            }
        }
    }

    handleScroll = () => {
        let position = window.pageYOffset;
        // console.log("[main] position Y:",position);

        this.setState({
            Yscroll: position
        })
        return null;
    };

    scrollToTop() {
        scroll.scrollToTop();
      }
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, { passive: true });

        this.handleScroll();
        if(this.state.Yscroll >= 200){}

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
        
        return () => {
            window.removeEventListener('scroll', this.handleScroll);
        };
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    render(){
        return(
            <IntlProvider locale={this.state.local} messages={this.state.language}>
                <React.Fragment>
                    <Header 
                        language={this.state.languageProps}
                        languageFlag={this.state.languageFlag}
                        yscroll={this.state.Yscroll} 
                        changeLangRo={() => this.changeLanguage("Romanian")}
                        changeLangEn={() => this.changeLanguage("English")}
                    />

                    <SliderComponent />
                    <Cards1 yscroll={this.state.Yscroll}/>
                    <Cards2 yscroll={this.state.Yscroll}/>
                    <ParallaxContainer />
                    <Footer 
                        language={this.state.languageProps}
                        changeLangRo={() => this.changeLanguage("Romanian")}
                        changeLangEn={() => this.changeLanguage("English")}
                    />
                    
                    <BackToTopButton
                        yscroll={this.state.Yscroll} 
                        scrollTop={scroll.scrollToTop}
                        />
                </React.Fragment>
            </IntlProvider>
        )
    }
}

export default Main;