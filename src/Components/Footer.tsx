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
  language: string,
  changeLangRo: any,
  changeLangEn: any
}

const Footer = (props: FooterProps) => {

    let textFooterHeader1 = (<FormattedMessage id="footer-header1" defaultMessage="Feature1" />);
    let textFooterHeader2 = (<FormattedMessage id="footer-header2" defaultMessage="Feature1" />);

    let textFooterCol1Title = (<FormattedMessage id="footer-col1-title" defaultMessage="Feature1" />);
    let textFooterCol2Title = (<FormattedMessage id="footer-col2-title" defaultMessage="Feature1" />);
    let textFooterCol3Title = (<FormattedMessage id="footer-col3-title" defaultMessage="Feature1" />);

    let textFooterCol11 = (<FormattedMessage id="footer-col1-1" defaultMessage="Feature1" />);
    let textFooterCol12 = (<FormattedMessage id="footer-col1-2" defaultMessage="Feature1" />);
    let textFooterCol13 = (<FormattedMessage id="footer-col1-3" defaultMessage="Feature1" />);
    let textFooterCol14 = (<FormattedMessage id="footer-col1-4" defaultMessage="Feature1" />);
    let textFooterCol15 = (<FormattedMessage id="footer-col1-5" defaultMessage="Feature1" />);

    let textFooterCol21 = (<FormattedMessage id="footer-col2-1" defaultMessage="Feature1" />);
    let textFooterCol22 = (<FormattedMessage id="footer-col2-2" defaultMessage="Feature1" />);
    let textFooterCol23 = (<FormattedMessage id="footer-col2-3" defaultMessage="Feature1" />);
    let textFooterCol24 = (<FormattedMessage id="footer-col2-4" defaultMessage="Feature1" />);
    let textFooterCol25 = (<FormattedMessage id="footer-col2-5" defaultMessage="Feature1" />);

    let textFooterCol31 = (<FormattedMessage id="footer-col3-1" defaultMessage="Feature1" />);
    let textFooterCol32 = (<FormattedMessage id="footer-col3-2" defaultMessage="Feature1" />);
    let textFooterCol33 = (<FormattedMessage id="footer-col3-3" defaultMessage="Feature1" />);
    let textFooterCol34 = (<FormattedMessage id="footer-col3-4" defaultMessage="Feature1" />);
    let textFooterCol35 = (<FormattedMessage id="footer-col3-5" defaultMessage="Feature1" />);

    let textFooterLink1 = (<FormattedMessage id="footer-link1" defaultMessage="Feature1" />);
    let textFooterLink2 = (<FormattedMessage id="footer-link2" defaultMessage="Feature1" />);
    let textFooterLink3 = (<FormattedMessage id="footer-link3" defaultMessage="Feature1" />);
    let textFooterLink4 = (<FormattedMessage id="footer-link4" defaultMessage="Feature1" />);
    let textFooterLink5 = (<FormattedMessage id="footer-link5" defaultMessage="Feature1" />);

  return (
    <div className="container-fluid footerContainer">
      <div className="d-flex w-100 border-bottom">
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 pb-5 px-4">
              <Row>
                <div className="title-sm mt-5 mb-2"></div>

              </Row>
              <Row>
                <h4 className="footerHeader my-2">
                  {textFooterHeader1}
                </h4>
              </Row>
              <Row>
                <p className="my-3">{textFooterHeader2}</p>
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
                <div className="text-uppercase font-weight-bold">{textFooterCol1Title}</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" >{textFooterCol11}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol12}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol13}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol14}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol15}</li>
                  </ul>
                </Col>
                <Col>
                  <div className="text-uppercase font-weight-bold">{textFooterCol2Title}</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" >{textFooterCol21}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol22}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol23}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol24} </li>
                    <li className="py-2 listElementFooter" >{textFooterCol25}</li>
                  </ul>
                </Col>
                <Col>
                <div className="text-uppercase font-weight-bold">{textFooterCol3Title}</div>
                  <ul className="list-unstyled">
                    <li className="py-2 listElementFooter" > {textFooterCol31}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol32} </li>
                    <li className="py-2 listElementFooter" >{textFooterCol33}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol34}</li>
                    <li className="py-2 listElementFooter" >{textFooterCol35}</li>
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
              <Dropdown.Item as="button" onClick={props.changeLangEn}>
                <i className="em em-flag-gb mx-1" aria-label="GB"></i>
                English</Dropdown.Item>
              <Dropdown.Item as="button" onClick={props.changeLangRo}>
                <i className="em em-flag-ro mx-1" aria-label="RO"></i>
                Romanian</Dropdown.Item>
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
              <li className="mx-2">{textFooterLink1}</li>
              <li className="mx-2">{textFooterLink2}</li>
              <li className="mx-2">{textFooterLink3}</li>
              <li className="mx-2">{textFooterLink4}</li>
              <li className="mx-2">{textFooterLink5}</li>
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
              <Dropdown.Item as="button" onClick={props.changeLangEn}>
                <i className="em em-flag-gb mx-1" aria-label="GB"></i>
                English</Dropdown.Item>
              <Dropdown.Item as="button" onClick={props.changeLangRo}>
                <i className="em em-flag-ro mx-1" aria-label="RO"></i>
                Romanian</Dropdown.Item>
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
            <li className="mx-2">{textFooterLink1}</li>
              <li className="mx-2">{textFooterLink2}</li>
              <li className="mx-2">{textFooterLink3}</li>
              <li className="mx-2">{textFooterLink4}</li>
              <li className="mx-2">{textFooterLink5}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
