import { Container, Row, Col } from "react-bootstrap"

export default function AboutComp({aboutRef}) {
  return (
    <Container ref={aboutRef} className="container-fluid text-dark my-2 bg-service">
    <Row className="my-5">
        <h1>关于</h1>
    </Row>
    <Row>
        <Col>个人简介<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur dolore perferendis odio modi unde dolores, quidem odit alias et vel laudantium fuga, ullam qui sed magnam nesciunt placeat corporis.</div></Col>
        <Col>地址<div>...</div></Col>
    </Row>
</Container>
  )
}