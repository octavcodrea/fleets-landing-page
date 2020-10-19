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
import {inlineStyles} from "./InlineStyles";

interface FooterProps {
  language: string;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="container-fluid ">
      {/* DESKTOP */}
      <div className="d-flex w-100 border-top border-bottom">
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 border-bg-right pb-5">
              <Row className="border-bottom">
                <div className="title-sm mt-5"></div>

              </Row>
              <Row>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  alias rerum ex distinctio officia ut quia sit eaque. Eaque,
                  ut.
                </h3>
              </Row>
              <Row>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </Row>
            </Col>
            
            <Col className="col-12 col-lg-6">
              <Row className="border-bottom pt-5 pb-1">
                <Col className="text-uppercase font-weight-bold">Solutions</Col>
                <Col className="text-uppercase font-weight-bold">Product</Col>
                <Col className="text-uppercase font-weight-bold">Customers</Col>
              </Row>

              <Row>
                <Col className="pb-5">
                  <ul className="list-unstyled">
                    <li className="py-2 cardParagraph" >Master Management</li>
                    <li className="py-2 cardParagraph" >Continuous Implementation</li>
                    <li className="py-2 cardParagraph" >Employee Engagement</li>
                    <li className="py-2 cardParagraph" >Change Management</li>
                    <li className="py-2 cardParagraph" >View more...</li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-unstyled">
                    <li className="py-2 cardParagraph" >Master Management</li>
                    <li className="py-2 cardParagraph" >Continuous Implementation</li>
                    <li className="py-2 cardParagraph" >Employee Engagement</li>
                    <li className="py-2 cardParagraph" >Change </li>
                    <li className="py-2 cardParagraph" >View more...</li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-unstyled">
                    <li className="py-2 cardParagraph" > Management</li>
                    <li className="py-2 cardParagraph" >Continuous </li>
                    <li className="py-2 cardParagraph" >Employee Engagement</li>
                    <li className="py-2 cardParagraph" >Change Management</li>
                    <li className="py-2 cardParagraph" >View more...</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* DESKTOP */}
      <div className="d-none d-lg-block container">
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
      <div className="d-block d-lg-none container">
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
