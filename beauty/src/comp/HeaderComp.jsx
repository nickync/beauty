import { Container, Navbar, Image, Row, Col, Nav } from "react-bootstrap";
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
    <Container className="px-0" fluid>
        <Navbar expand='large' className="bg-purple bg-gradient text-white bg-body-tertiary">
        <Row className="w-100 align-items-center">
            <Col xs={4} className="px-0">
                <Image src={logo} fluid style={{width:"5rem"}} className=""/>
            </Col>
            <Col xs={4} className="px-0">
                <Navbar.Brand className="mx-auto fs-1 fst-italic fw-bolder"> 美容美发 </Navbar.Brand>
            </Col>
            <Col xs={3} className="px-0">
                <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
                    <Container>
                        <Navbar.Brand className="mx-auto">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="d-flex">
                                    <Nav.Item>
                                        <Nav.Link className="header-btn" onClick={() => handleScroll(mainRef.current)}>主页</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="header-btn" onClick={() => handleScroll(serviceRef.current)}>服务</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="header-btn" onClick={() => handleScroll(aboutRef.current)}>关于</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Col>
            <Col xs={1} className="px-0">
                <WechatComp />
            </Col>
        </Row>
    </Navbar>

    </Container>

  )
}