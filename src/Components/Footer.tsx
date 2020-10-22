import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { MdHeadsetMic, MdPerson } from "react-icons/md";
// import {inlineStyles} from "./InlineStyles";

interface FooterProps {
  language: string;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="container-fluid footerContainer">
      {/* DESKTOP */}
      <div className="d-flex w-100 border-bottom">
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 pb-5 px-4">
              <Row className="border-bottom">
                <div className="title-sm mt-5"></div>

              </Row>
              <Row>
                <h4 className="footerHeader">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  alias rerum ex distinctio officia ut quia sit eaque. Eaque,
                  ut.
                </h4>
              </Row>
              <Row>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </Row>
            </Col>
            
            <Col className="col-12 col-lg-6 pt-0 pt-lg-5 ">
              {/* <Row className="pt-5 pb-1">
                <Col className="text-uppercase font-weight-bold">Solutions</Col>
                <Col className="text-uppercase font-weight-bold">Product</Col>
                <Col className="text-uppercase font-weight-bold">Customers</Col>
              </Row> */}

              <Row>
                <Col className="pb-5">
                <div className="text-uppercase font-weight-bold">Solutions</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" >Master Management</li>
                    <li className="py-2 listElementFooter" >Continuous Implementation</li>
                    <li className="py-2 listElementFooter" >Employee Engagement</li>
                    <li className="py-2 listElementFooter" >Change Management</li>
                    <li className="py-2 listElementFooter" >View more...</li>
                  </ul>
                </Col>
                <Col>
                  <div className="text-uppercase font-weight-bold">Product</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" >Master Management</li>
                    <li className="py-2 listElementFooter" >Continuous Implementation</li>
                    <li className="py-2 listElementFooter" >Employee Engagement</li>
                    <li className="py-2 listElementFooter" >Change </li>
                    <li className="py-2 listElementFooter" >View more...</li>
                  </ul>
                </Col>
                <Col>
                <div className="text-uppercase font-weight-bold">Customers</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" > Management</li>
                    <li className="py-2 listElementFooter" >Continuous </li>
                    <li className="py-2 listElementFooter" >Employee Engagement</li>
                    <li className="py-2 listElementFooter" >Change Management</li>
                    <li className="py-2 listElementFooter" >View more...</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* DESKTOP */}
      <div className="d-none d-lg-block container footerEnd">
        <div className="d-flex justify-content-between flex-wrap py-4" >
          <div className="d-flex col-12 col-lg-6" >
            <DropdownButton
              id="topDDLanguage"
              title={props.language}
              variant="light"
            >
              <Dropdown.Item as="button">English</Dropdown.Item>
              <Dropdown.Item as="button">German</Dropdown.Item>
              <Dropdown.Item as="button">Romanian</Dropdown.Item>
            </DropdownButton>


            <div className="mx-2 my-1">
              <div className="mx-2 d-inline-block">
                <MdHeadsetMic />
                <FormattedMessage
                  id="phone-US"
                  defaultMessage="+40 0000 0000"
                />
              </div>
            </div>
          </div>

          <div className="links col-12 col-lg-6" >
            <ul className="d-flex my-1 justify-content-end list-unstyled">
              <li className="mx-2">fleets</li>
              <li className="mx-2">link1</li>
              <li className="mx-2">link2</li>
              <li className="mx-2">link3</li>
              <li className="mx-2">link4</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="d-block d-lg-none container footerEnd">
        <div className="d-flex justify-content-between flex-wrap py-4" >
          <div className="d-flex col-12 col-lg-6 justify-content-center" >
            <DropdownButton
              id="topDDLanguage"
              title={props.language}
              variant="light"
            >
              <Dropdown.Item as="button">English</Dropdown.Item>
              <Dropdown.Item as="button">German</Dropdown.Item>
              <Dropdown.Item as="button">Romanian</Dropdown.Item>
            </DropdownButton>


            <div className="mx-2 my-1">
              <div className="mx-2 d-inline-block">
                <MdHeadsetMic />
                <FormattedMessage
                  id="phone-US"
                  defaultMessage="+40 0000 0000"
                />
              </div>
            </div>
          </div>

          <div className="links col-12 col-lg-6" >
            <ul className="d-flex my-1 justify-content-center list-unstyled">
              <li className="mx-2">fleets</li>
              <li className="mx-2">link1</li>
              <li className="mx-2">link2</li>
              <li className="mx-2">link3</li>
              <li className="mx-2">link4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
