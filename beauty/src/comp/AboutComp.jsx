import { Container, Row, Col } from "react-bootstrap"

export default function AboutComp({aboutRef}) {
  return (
    <Container ref={aboutRef} className="text-dark bg-service" fluid>
    <Row className="my-5">
        <h1>关于</h1>
    </Row>
    <Row className="justify-content-center">
        <Col>
            <Row className="justify-content-center">
                个人简介
            </Row>
            <Row className="justify-content-center">
                黑茶妹
            </Row>   
        </Col>
        <Col>
            <Row className="justify-content-center">
                地址
            </Row>
            <Row className="justify-content-center">
                36-09 Main St (10.D) 缅街
            </Row>   
        </Col>
    </Row>
</Container>
  )
}