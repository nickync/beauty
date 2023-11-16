import { Container, Navbar, Image, Row, Col, Nav, Tabs, Tab } from "react-bootstrap";
import logo from '../logo_transparent.png';
import wechat from '../wechat-36.svg';
import WechatComp from "./WechatComp";

export default function HeaderComp() {
  return (
    <Navbar expand='large' className="bg-purple bg-gradient text-white bg-body-tertiary">
        <Row className="w-100 align-items-center">
            <Col xs={4}>
                <Image src={logo} fluid style={{width:'90px', height:'90px'}} className="ms-5"/>
            </Col>
            <Col xs={4}>
                <Navbar.Brand className="mx-auto fs-1 fst-italic fw-bolder"> 美容美发 </Navbar.Brand>
            </Col>
            <Col xs={3}>
            <Container>
                <Navbar.Brand className="mx-auto">
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Location</Nav.Link>
                            <Nav.Link>Location</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                     */}
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" justify className="flex-row">
                        <Tab eventkey="home" title="主页">Home</Tab>
                        <Tab eventkey="home" title="地址">Location</Tab>
                        <Tab eventkey="home" title="关于">About</Tab>
                    </Tabs>
                </Navbar.Brand>
            </Container>
            </Col>
            <Col xs={1}>
                <Image src={wechat} fluid style={{width:'30px'}} className="me-1"/>
                <WechatComp />
            </Col>
        </Row>
    </Navbar>
  )
}