import React from 'react';
import { FormattedMessage } from "react-intl";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'; 
import Button from 'react-bootstrap/Button';
import { MdHeadsetMic, MdPerson, MdLanguage } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu} from 'react-icons/gi';

import { Col, Container, Row } from 'react-bootstrap';
import {inlineStyles} from "./InlineStyles";


interface HeaderProps{
    language: string
}

const Header = (props: HeaderProps) =>{

    let textFeatures = <FormattedMessage id="navbar-link-features" defaultMessage="Features"/>;
    let textSolutions =<FormattedMessage id="navbar-link-solutions" defaultMessage="Solutions"/>;
    let textPricing = <FormattedMessage id="navbar-link-pricing" defaultMessage="Pricing"/>;
    let textHowItWorks = <FormattedMessage id="navbar-link-howitworks" defaultMessage="How it works"/>;
    let textContactUs = <FormattedMessage id="navbar-link-contactus" defaultMessage="Contact Us"/>;
    let textAccount = <FormattedMessage id="navbar-button-account" defaultMessage="Account"/>;

    const formatTopBar = () =>{
        return(
            <Container>
                <Row>
                    <Col></Col>
                <DropdownButton 
                    id="topDDLanguage"
                    title={props.language}
                    variant="light">
                        <Dropdown.Item as="button">English</Dropdown.Item>
                        <Dropdown.Item as="button">German</Dropdown.Item>
                        <Dropdown.Item as="button">Romanian</Dropdown.Item>
                </DropdownButton>
                
                <div className="mx-2 my-1">
                    <div className="mx-2 d-inline-block" style={inlineStyles.fontPoppinsGray}>
                        <MdHeadsetMic />
                        <FormattedMessage id="phone-US" defaultMessage="+40 0000 0000"/>
                    </div>
                    |
                    <div className="mx-2 d-inline-block">
                        <FaFacebookF /> 
                    </div>
                    <div className="mx-2 d-inline-block">
                        <FaTwitter />
                    </div>
                    <div className="mx-2 d-inline-block">
                        <FaSearch />
                    </div>
                </div>
                </Row>
            </Container>
        )
    }

    const formatNavbar = () => {
        return(
            <div className="container d-flex justify-content-between">
                {/* MOBILE */}
                    <div className="navbar-sm d-flex d-lg-none my-3">
                        <div className="align-self-center">
                            <DropdownButton variant="link text-dark" title={<GiHamburgerMenu/>}>
                                <Dropdown.Item as="button">Features</Dropdown.Item>
                                <Dropdown.Item as="button">Solutions</Dropdown.Item>
                                <Dropdown.Item as="button">Pricing</Dropdown.Item>
                                <Dropdown.Item as="button">How it works</Dropdown.Item>
                                <Dropdown.Item as="button">Contact Us</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        <div>
                            <h1 className="align-self-center my-0" style={inlineStyles.title} >fleets</h1>
                        </div>
                        
                    </div>

                {/* DESKTOP */}
                    <div className="navbar d-none d-lg-flex my-2">
                        <div className="align-self-first">
                            <h1 className="title" style={inlineStyles.title} >fleets</h1>
                        </div>
                        <div>
                            <ul className="d-block my-2">
                                <li className="d-inline-block">
                                    <DropdownButton variant="link text-dark" title={textFeatures}>
                                        <Dropdown.Item as="button">Feature1</Dropdown.Item>
                                        <Dropdown.Item as="button">Feature2</Dropdown.Item>
                                        <Dropdown.Item as="button">Feature3</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li className="d-inline-block">
                                    <DropdownButton variant="link text-dark" title={textSolutions}>
                                        <Dropdown.Item as="button">Solution1</Dropdown.Item>
                                        <Dropdown.Item as="button">Solution2</Dropdown.Item>
                                        <Dropdown.Item as="button">Solution3</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li className="d-inline-block">
                                    <Button variant="link text-dark">{textPricing}</Button>
                                </li>
                                <li className="d-inline-block text-nowrap" >
                                    <Button variant="link text-dark">{textHowItWorks}</Button>
                                </li>
                                <li className="d-inline-block">
                                    <Button variant="link text-dark">{textContactUs}</Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Button className="d-inline-block my-3 py-0 pl-2 pr-3 " style={inlineStyles.buttonAccent}>
                        <div className="d-inline-block mx-1 my-1">
                            <MdPerson />
                        </div>
                        {textAccount}
                    </Button>
            </div>
        )
    }

    return(
        <header>

            {formatTopBar()}
            {formatNavbar()}

        </header>
    )
}

export default Header;