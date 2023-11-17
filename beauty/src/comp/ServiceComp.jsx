import { Container, Row, Col } from "react-bootstrap";

export default function ServiceComp({serviceRef}) {
  return (
    <Container ref={serviceRef} className="container-fluid text-dark my-2 bg-service">
        <Row className="my-5">
            <h1>服务</h1>
        </Row>
        <Row>
            <Col>服务1<div>...</div></Col>
            <Col>服务2<div>...</div></Col>
            <Col>服务3<div>...</div></Col>
        </Row>
    </Container>
  )
}