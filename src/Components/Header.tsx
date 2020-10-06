import React from 'react';
import { FormattedMessage } from "react-intl";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'; 
import Button from 'react-bootstrap/Button';
import { MdHeadsetMic, MdPerson } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaSearch} from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import { features } from 'process';


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
            <div id="top_bar" className="shadow-xs float-right" >
                <div className="text-nowrap">
                    <div className="d-flex justify-content-between ">
                        <div className="d-flex justify-content-end">
                
                <DropdownButton 
                    id="topDDLanguage"
                    title={props.language}
                    variant="light">
                        <Dropdown.Item as="button">English</Dropdown.Item>
                        <Dropdown.Item as="button">German</Dropdown.Item>
                        <Dropdown.Item as="button">Romanian</Dropdown.Item>
                </DropdownButton>
                
                <div className="mx-2 my-1">
                    <div className="mx-2 d-inline-block">
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const formatNavbar = () => {
        return(
            <div className="d-flex justify-content-between">
                <h1>fleets</h1>
                <ul className="d-flex my-2">
                    <li>
                        <DropdownButton variant="link text-dark" title={textFeatures}>
                            <Dropdown.Item as="button">Feature1</Dropdown.Item>
                            <Dropdown.Item as="button">Feature2</Dropdown.Item>
                            <Dropdown.Item as="button">Feature3</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton variant="link text-dark" title={textSolutions}>
                            <Dropdown.Item as="button">Solution1</Dropdown.Item>
                            <Dropdown.Item as="button">Solution2</Dropdown.Item>
                            <Dropdown.Item as="button">Solution3</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <Button variant="link text-dark">{textPricing}</Button>
                    </li>
                    <li>
                        <Button variant="link text-dark">{textHowItWorks}</Button>
                    </li>
                    <li>
                        <Button variant="link text-dark">{textContactUs}</Button>
                    </li>
                </ul>
                <Button className="my-2 py-0 pl-2">
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
                <Container>
                    <Row>
                        {formatTopBar()}
                    </Row>
                    <Row>
                        <div className="d-flex justify-content-between">
                            {formatNavbar()}
                        </div>
                    </Row>
                
                </Container>

        </header>
    )
}

export default Header;