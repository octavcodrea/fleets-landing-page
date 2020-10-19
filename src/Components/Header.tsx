import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import ReactCountryFlag from "react-country-flag"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { MdHeadsetMic, MdPerson, MdLanguage } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Col, Container, Row } from "react-bootstrap";
import { accentColor } from "./InlineStyles";
// import {inlineStyles} from "./InlineStyles";

interface HeaderProps {
  language: string;
}

interface StateTypes {
  isOpen: boolean;
}

const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState([false, false]);

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

  let textFeatures = (
    <FormattedMessage id="navbar-link-features" defaultMessage="Features" />
  );
  let textSolutions = (
    <FormattedMessage id="navbar-link-solutions" defaultMessage="Solutions" />
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

  const formatTopBar = () => {
    return (
      <Container>
        <Row>
          <Col></Col>
          <DropdownButton
            id="topDDLanguage"
            title={props.language}
            variant="light"
          >
            <Dropdown.Item as="button">
                <i className="em em-flag-gb mx-1" aria-label="US"></i>
                 English</Dropdown.Item>
            {/* <Dropdown.Item as="button">German</Dropdown.Item> */}
            <Dropdown.Item as="button">
                <i className="em em-flag-ro mx-1" aria-label="RO"></i>
                Romanian</Dropdown.Item>
          </DropdownButton>

          <div className="mx-2 my-1">
            <div className="mx-2 d-inline-block fontPoppinsGray">
              <MdHeadsetMic />
              <FormattedMessage id="phone-US" defaultMessage="+40 0000 0000" />
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
    );
  };

  const formatNavbar = () => {
    return (
      <div className="container d-flex">
        {/* DESKTOP */}
        <div className="navbar w-100 d-none d-lg-flex justify-content-between">
          <div className="navbar d-none d-lg-flex my-2">
            <div className="align-self-first">
                <div className="align-self-center my-0 title-md"></div>
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
                    <Dropdown.Item as="button">Feature1</Dropdown.Item>
                    <Dropdown.Item as="button">Feature2</Dropdown.Item>
                    <Dropdown.Item as="button">Feature3</Dropdown.Item>
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
                    <Dropdown.Item as="button">Solution1</Dropdown.Item>
                    <Dropdown.Item as="button">Solution2</Dropdown.Item>
                    <Dropdown.Item as="button">Solution3</Dropdown.Item>
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

          <Button className="d-inline-block my-3 pr-3 buttonAccent">
            <div className="d-inline-block mx-1 my-1">
              <MdPerson />
            </div>
            {textAccount}
          </Button>
        </div>

        {/* MOBILE */}
        <div className="d-flex my-3 d-lg-none justify-content-between">
          <div>
            {/* <h1 className="align-self-center my-0 title">fleets</h1> */}
            <div className="align-self-center my-0 title"></div>
          </div>

            <div className="d-flex">
            <Button className="d-block buttonAccent mx-2">
                <div className="d-inline-block mx-1 my-1">
                <MdPerson />
                </div>
                {textAccount}
            </Button>
    
            <div className="d-block align-self-center buttonAccent mx-2">
                <DropdownButton
                variant="link text-dark"
                title={<GiHamburgerMenu />}
                >
                <Dropdown.Item as="button">Features</Dropdown.Item>
                <Dropdown.Item as="button">Solutions</Dropdown.Item>
                <Dropdown.Item as="button">Pricing</Dropdown.Item>
                <Dropdown.Item as="button">How it works</Dropdown.Item>
                <Dropdown.Item as="button">Contact Us</Dropdown.Item>
                </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header>
      {formatTopBar()}
      {formatNavbar()}
    </header>
  );
};

export default Header;
