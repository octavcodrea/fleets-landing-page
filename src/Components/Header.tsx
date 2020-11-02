import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { MdHeadsetMic, MdPerson, MdKeyboardArrowDown } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi";

import { Col, Container, Row } from "react-bootstrap";
// import { accentColor } from "./InlineStyles";
// import {inlineStyles} from "./InlineStyles";

interface HeaderProps {
  language: string,
  yscroll: number,
  changeLangRo: any,
  changeLangEn: any,
  languageFlag: string
}

interface StateTypes {
  isOpen: boolean;
}

const Header = (props: HeaderProps) => {
  let textLanguage = (
  <div style={{display: "inline-block"}}>
    <i className="em em-flag-gb mx-1" aria-label="GB"></i> English
  </div>);

  switch(props.language){
    default:{ textLanguage = (
      <div style={{display: "inline-block"}}>
          <i className="em em-flag-gb mx-1" aria-label="GB"></i> English
      </div>
    ); break; }
    case "English": {
      textLanguage = (
        <div style={{display: "inline-block"}}>
          <i className="em em-flag-gb mx-1" aria-label="GB"></i> English
        </div>
      ); break;
    } 
    case "Romanian": {
      textLanguage = (
        <div style={{display: "inline-block"}}>
          <i className="em em-flag-ro mx-1" aria-label="RO"></i> Română
        </div>
      ); break;
    }
    case "Română": {
      textLanguage = (
        <div style={{display: "inline-block"}}>
          <i className="em em-flag-ro mx-1" aria-label="RO"></i> Română
        </div>
      ); break;
    } 
    
    case "Spanish": {
      textLanguage = (
        <div style={{display: "inline-block"}}>
          <i className="em em-flag-gb mx-1" aria-label="GB"></i> Spanish
        </div>
      ); break;
    } 
  }

  let textFeatures = (
    <div>
      <FormattedMessage id="navbar-link-features" defaultMessage="Features" />
      <MdKeyboardArrowDown className="mx-1"/>
    </div>
  );
  let textSolutions = (
    <div>
      <FormattedMessage id="navbar-link-solutions" defaultMessage="Solutions" />
      <MdKeyboardArrowDown className="mx-1"/>
    </div>
  );
  let textPricing = (
    <FormattedMessage id="navbar-link-pricing" defaultMessage="Pricing" />
  );
  let textHowItWorks = (
    <FormattedMessage
      id="navbar-link-howitworks"
      defaultMessage="How it works"
    />
  );

  let textContactUs = (
    <FormattedMessage id="navbar-link-contactus" defaultMessage="Contact Us" />
  );
  let textAccount = (
    <FormattedMessage id="navbar-button-account" defaultMessage="Account" />
  );

  let textDropdown1 = (<FormattedMessage id="navbar-dropdownitem1" defaultMessage="Feature1" />);
  let textDropdown2 = (<FormattedMessage id="navbar-dropdownitem2" defaultMessage="Feature2" />);
  let textDropdown3 = (<FormattedMessage id="navbar-dropdownitem3" defaultMessage="Feature3" />);
  let textDropdown4 = (<FormattedMessage id="navbar-dropdownitem4" defaultMessage="Feature4" />);
  let textDropdown5 = (<FormattedMessage id="navbar-dropdownitem5" defaultMessage="Feature5" />);
  let textDropdown6 = (<FormattedMessage id="navbar-dropdownitem6" defaultMessage="Feature6" />);
  let textDropdown7 = (<FormattedMessage id="navbar-dropdownitem7" defaultMessage="Feature7" />);
  let textDropdown8 = (<FormattedMessage id="navbar-dropdownitem8" defaultMessage="Feature8" />);

  const [isOpen, setIsOpen] = useState([false, false]);
  const [isLanguageMenuOpen, setisLanguageMenuOpen] = useState(false);

  const scrollThreshold = 80;
  
  const handleOpen = (index: number) => {
    setIsOpen((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

  const handleClose = (index: number) => {
    setIsOpen((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

  useEffect(
    () => {
      if(props.yscroll >= scrollThreshold){
        setisLanguageMenuOpen(false);
      }
    },
    [isLanguageMenuOpen, props.yscroll]
  );

  const formatTopBar = () => {

    return (
      <Container className={props.yscroll < scrollThreshold ? "header-topbar-visible" : "header-topbar-hidden"}>
        <Row>
          <Col></Col>
          <DropdownButton
            id="topDDLanguage"
            title={textLanguage}
            variant="light"
            onClick={() => setisLanguageMenuOpen(!isLanguageMenuOpen)}
            show={isLanguageMenuOpen}
          >

              <Dropdown.Item as="button" onClick={props.changeLangEn}>
                  <i className="em em-flag-gb mx-1" aria-label="GB"></i>
                  English
              </Dropdown.Item>

              <Dropdown.Item as="button" onClick={props.changeLangRo}>
                  <i className="em em-flag-ro mx-1" aria-label="RO"></i>
                  Romanian
              </Dropdown.Item>

          </DropdownButton>


          <div className="mx-2 my-2">
            <div className="mx-2 d-inline-block fontPoppinsLightGray align-middle">
              <MdHeadsetMic />
              <FormattedMessage id="phone" defaultMessage="+40 0000 0000" />
            </div>
            |
            <div className="mx-2 d-inline-block text-secondary">
              <GrFacebookOption />
            </div>
            <div className="mx-2 d-inline-block text-secondary">
              <FaLinkedinIn />
            </div>
            {/* <div className="mx-2 d-inline-block">
              <FaSearch />
            </div> */}
          </div>
        </Row>
      </Container>
    );
  };

  const formatNavbarContainer = () => {
    return(
      <div className="navbar-container">
        <div className={props.yscroll < scrollThreshold ? "header" : "header-sticky"}> 
        {/* <div className="header"> */}
          {formatTopBar()}
          {formatNavbar()}
        </div>
      </div>
    )
  }

  const formatNavbar = () => {
    return (
      <div className="container px-0">
        {/* DESKTOP */}
        <div className="navbar w-100 d-none d-lg-flex px-0 justify-content-between">
          <div className="navbar d-none d-lg-flex my-1 px-0">
            <div className="align-self-first">
                <div className={props.yscroll < scrollThreshold ? "align-self-center my-0 title-md" : "align-self-center my-0 title-sm"}></div>
              {/* <h1 className="title">fleets</h1> */}
            </div>
            <div>
              <ul className="d-block my-2">
                <li className="d-inline-block">
                  <DropdownButton
                    className={"headerNavbarLink"}
                    variant={isOpen[0] ? "navbarlinkselected" : "navbarlink"}
                    title={textFeatures}
                    onMouseEnter={() => handleOpen(0)}
                    onMouseLeave={() => handleClose(0)}
                    show={isOpen[0]}
                    
                  >
                    <Dropdown.Item as="button">{textDropdown1}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown2}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown3}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown4}</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className="d-inline-block">
                  <DropdownButton
                    className="headerNavbarLink"
                    title={textSolutions}
                    variant={isOpen[1] ? "navbarlinkselected" : "navbarlink"}
                    onMouseEnter={() => handleOpen(1)}
                    onMouseLeave={() => handleClose(1)}
                    show={isOpen[1]}
                  >
                    <Dropdown.Item as="button">{textDropdown5}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown6}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown7}</Dropdown.Item>
                    <Dropdown.Item as="button">{textDropdown8}</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className="d-inline-block">
                  <Button
                    className="headerNavbarLink"
                    variant={isOpen[2] ? "navbarlinkselected" : "navbarlink"}
                    onMouseEnter={() => handleOpen(2)}
                    onMouseLeave={() => handleClose(2)}
                  >
                    {textPricing}
                  </Button>
                </li>
                <li className="d-inline-block text-nowrap">
                  <Button
                    className="headerNavbarLink"
                    variant={isOpen[3] ? "navbarlinkselected" : "navbarlink"}
                    onMouseEnter={() => handleOpen(3)}
                    onMouseLeave={() => handleClose(3)}
                  >
                    {textHowItWorks}
                  </Button>
                </li>
                <li className="d-inline-block">
                  <Button
                    className="headerNavbarLink"
                    variant={isOpen[4] ? "navbarlinkselected" : "navbarlink"}
                    onMouseEnter={() => handleOpen(4)}
                    onMouseLeave={() => handleClose(4)}
                  >
                    {textContactUs}
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <Button className="d-inline-block my-3 pr-3 buttonAccent" variant="accent">
            <div className="d-inline-block mx-1 my-1">
              <MdPerson />
            </div>
            {textAccount}
          </Button>
        </div>

        {/* MOBILE */}
        <div className="d-flex my-3 px-2 d-lg-none justify-content-between">
          <div>
            {/* <h1 className="align-self-center my-0 title">fleets</h1> */}
            <div className="align-self-center my-0 title-sm"></div>
          </div>

            <div className="d-flex">
            <Button className="d-block buttonAccent mx-2" variant="accent">
                <div className="d-inline-block mx-1 my-1">
                <MdPerson />
                </div>
                {textAccount}
            </Button>
    
            <div className="d-block align-self-center buttonAccent mx-2 p-1">
                <DropdownButton
                variant="link text-dark"
                title={<GiHamburgerMenu color="white"/>}
                >
                <Dropdown.Item as="button">{textFeatures}</Dropdown.Item>
                <Dropdown.Item as="button">{textSolutions}</Dropdown.Item>
                <Dropdown.Item as="button">{textPricing}</Dropdown.Item>
                <Dropdown.Item as="button">{textHowItWorks}</Dropdown.Item>
                <Dropdown.Item as="button">{textContactUs}</Dropdown.Item>
                </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header>

      {formatNavbarContainer()}
    </header>
  );
};

export default Header;
