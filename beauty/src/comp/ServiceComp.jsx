import { Container, Row, Col } from "react-bootstrap";

export default function ServiceComp({serviceRef}) {
  return (
    <Container ref={serviceRef} className="flex-wrap text-dark my-5 py-2 bg-service" fluid>
        <Row className="my-5">
            <h1>服务</h1>
        </Row>
        <Row className="py-3">
            <Col xs={4} className="service-header">美发</Col>
            <Col xs={8}>理发， 烫发， 染发， 盘发</Col>
        </Row>
        <Row className="py-3">
            <Col xs={8}>吹风造型， 养发（生发）， 新娘跟妆， 形象设计， 皮肤护理</Col>
            <Col xs={4} className="service-header">养发</Col>
        </Row>
        <Row className="py-3">
            <Col xs={4} className="service-header">美容</Col>
            <Col xs={8}>祛痣， 点疣， 淡斑， 纹眉， 纹唇</Col>
        </Row>
        <Row className="py-3">
            <Col xs={8}>烫睫毛， 纹眼线， 脱毛， 化妆， 艾灸</Col>
            <Col xs={4} className="service-header">美容</Col>
        </Row>
    </Container>
  )
}