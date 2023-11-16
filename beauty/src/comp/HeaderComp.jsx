import { Container, Navbar, Image, Row, Col } from "react-bootstrap";
import logo from '../logo_transparent.png';
import wechat from '../wechat-36.svg';
import WechatComp from "./WechatComp";

export default function HeaderComp() {
  return (
    <Navbar expand='large' className="bg-purple bg-gradient text-white">
        <Row className="w-100 align-items-center">
            <Col xs={4}>
                <Image src={logo} fluid style={{width:'80px', height:'80px'}} className="ms-5"/>
            </Col>
            <Col xs={4}>
                <Navbar.Brand className="mx-auto fs-1 fst-italic fw-bolder"> 美容美发 </Navbar.Brand>
            </Col>
            <Col xs={4}>
                <Navbar.Brand className="mx-auto">
                    <Image src={wechat} fluid style={{width:'30px'}} className="me-1"/>
                    <WechatComp />
                </Navbar.Brand>
            </Col>
        </Row>
    </Navbar>
  )
}