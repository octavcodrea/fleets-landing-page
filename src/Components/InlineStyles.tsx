import { CSSProperties } from 'react';

import slider1 from "../Images/bg1.png";
import slider2 from "../Images/bg2.png";
import slider3 from "../Images/bg3.png";

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const accentColorLight2 = "#73ffe2";
const accentColorLight1 = "#3bebc7";
const accentColor = "#1AB394";
const accentColorDark1 = "#127561";
const accentColorDark2 = "#0a4035";



const inlineStyles:StylesDictionary  = {
    colorAccent:{
        color: `${accentColor}`
    },

    title:{
        fontFamily: "'Arial', sans-serif",
        fontWeight: "bolder"
    },

    fontPoppins:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
    },

    fontPoppinsSmall:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        fontSize: "0.8rem"
    },

    fontPoppinsGray:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        color: "#555555"
    },


    buttonAccent:{
        backgroundColor: `${accentColor}`,
        color: "white",
        border: "none"
    },

    buttonAccentLight:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        backgroundColor: `${accentColorLight1}`,
        color: `${accentColorDark2}`,
        border: "none",
        borderRadius: "5px"
    },

    buttonAccentLightSmall:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        backgroundColor: `${accentColorLight1}`,
        color: `${accentColorDark2}`,
        border: "none",
        borderRadius: "5px",
        fontSize: "0.8rem"
    },

    buttonAccentLightCircle:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        backgroundColor: `${accentColorLight1}`,
        color: `${accentColorDark2}`,
        border: "none",
        borderRadius: "25px"
    },

    buttonGray:{
        backgroundColor: "#777777",
        color: "white",
        border: "none"
    },

    h3Accent:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        color: `${accentColor}`
    },

    h3Black:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        color: `black`
    },

    cardParagraph:{
        fontFamily: '"Poppins", Helvetica, sans-serif'
    },

    parallaxContTextbox:{
        top: "-270px",
        
    },

    parallaxContHeader:{
        // fontFamily: '"Poppins", Helvetica, sans-serif',
        color: "white"
    },

    parallaxContHeader2:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        color: "white"
    },

    parallaxContButton:{
        backgroundColor: "transparent",
        border: "2px solid white",
        padding: "10px 20px",
        borderRadius: "10px",
        color: "white"
    },

    sliderDot:{
        display: "block",
        borderRadius: "10px",
        border: "none",
        
        // width: "10px",
        // height: "10px",
        margin: "-10px 0px",
        backgroundColor: "white"
    },

    sliderImg:{
        display: "block",
        width: "auto",
        height: "100%",
        // minHeight: "350px",
        // border: "3px dotted green",
    }, 

    slider:{
        minHeight: "350px",
        // border: "1px dashed orange",
        height: "350px"
    },

    slide1:{
        background: "red",
        backgroundSize: "cover",
        // border: "1px dashed blue"
    },

    sliderTextDivDesktop:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        left: "50%"
    },

    sliderTextDivMobile:{
        fontFamily: '"Poppins", Helvetica, sans-serif',
        right: "0%"
    }
    
}

export {inlineStyles, accentColor, accentColorDark1, accentColorDark2, accentColorLight1, accentColorLight2};