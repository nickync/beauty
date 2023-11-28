import { Container, Row, Col, Image } from "react-bootstrap";
import offer from "../asset/offer.jpg"

export default function ServiceComp({serviceRef}) {
  return (
    <Container ref={serviceRef} className="d-flex flex-wrap text-dark my-5 py-2 bg-service" fluid>
        <Col xs={6} className="d-flex flex-row align-items-center">
            {/* <Row className="my-5">
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
            </Row> */}
            <Col>
                <Row className="service-text">理发</Row>
                <Row className="service-text">烫发</Row>
                <Row className="service-text">染发</Row>
                <Row className="service-text">盘发</Row>
            </Col>
            <Col>
                <Row className="service-text">吹风造型</Row>
                <Row className="service-text">养发（生发）</Row>
                <Row className="service-text">新娘跟妆</Row>
                <Row className="service-text">形象设计</Row>
                <Row className="service-text">皮肤护理</Row>
            </Col>
            <Col>
                <Row className="service-text">祛痣</Row>
                <Row className="service-text">点疣</Row>
                <Row className="service-text">淡斑</Row>
                <Row className="service-text">纹眉</Row>
                <Row className="service-text">纹唇</Row>
            </Col>
            <Col>
                <Row className="service-text">烫睫毛</Row>
                <Row className="service-text">纹眼线</Row>
                <Row className="service-text">脱毛</Row>
                <Row className="service-text">化妆</Row>
                <Row className="service-text">艾灸</Row>
            </Col>
        </Col>
        <Col xs={6}>
            {/* <Row>
                <h1>活动</h1>
            </Row> */}
            <Row>
                <Image src={offer} className="swiperImg" />
            </Row>
        </Col>

    </Container>
  )
}