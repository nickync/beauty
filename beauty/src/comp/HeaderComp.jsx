import { Container, Navbar, Image, Row, Col, Nav, Tabs, Tab } from "react-bootstrap";
import logo from '../logo_transparent.png';
import WechatComp from "./WechatComp";

export default function HeaderComp({mainRef, serviceRef, aboutRef}) {

    const handleScroll = ( ref ) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }

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
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
                <Container>
                    <Navbar.Brand className="mx-auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="flex-row">
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleScroll(mainRef.current)}>主页</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleScroll(serviceRef.current)}>服务</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleScroll(aboutRef.current)}>关于</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            </Col>
            <Col xs={1}>
                <WechatComp />
            </Col>
        </Row>
    </Navbar>
  )
}