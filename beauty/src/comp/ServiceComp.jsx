import { Container, Row, Col } from "react-bootstrap";

export default function ServiceComp({serviceRef}) {
  return (
    <Container ref={serviceRef} className="container-fluid text-dark my-5 py-2 bg-service">
        <Row className="my-5">
            <h1>服务</h1>
        </Row>
        <Row className="py-3">
            <Col xs={4}>服务1</Col>
            <Col xs={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at saepe dicta officia minima consectetur ad repellendus, temporibus nihil repudiandae, veritatis impedit laboriosam rem in tempore! Doloremque consequatur provident quidem.</Col>
        </Row>
        <Row className="py-3">
            <Col xs={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cupiditate. Repellendus, quis delectus architecto mollitia neque quia saepe? Ipsa odit, rerum nemo error maxime delectus veniam illo? Ad, non corporis.</Col>
            <Col xs={4}>服务2</Col>
        </Row>
        <Row className="py-3">
            <Col xs={4}>服务3</Col>
            <Col xs={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at saepe dicta officia minima consectetur ad repellendus, temporibus nihil repudiandae, veritatis impedit laboriosam rem in tempore! Doloremque consequatur provident quidem.</Col>
        </Row>
    </Container>
  )
}