import { Container, Image } from "react-bootstrap";
import offer from "../asset/offer.jpg"

export default function ServiceComp({serviceRef}) {
  return (
    <Container ref={serviceRef} className="d-flex flex-wrap text-dark my-5 py-2 bg-service align-items-center justify-content-around" fluid>
        <div>
            <h1 className="mb-5">业务范围</h1>
            <div className="d-flex align-items-center justify-content-around service-con">
                <div className="service-col">
                    <div className="service-text">理发</div>
                    <div className="service-text">烫发</div>
                    <div className="service-text">染发</div>
                    <div className="service-text">盘发</div>
                </div>
                <div className="service-col">
                    <div className="service-text">吹风造型</div>
                    <div className="service-text">养发（生发）</div>
                    <div className="service-text">新娘跟妆</div>
                    <div className="service-text">形象设计</div>
                    <div className="service-text">皮肤护理</div>
                </div>
                <div className="service-col">
                    <div className="service-text">祛痣</div>
                    <div className="service-text">点疣</div>
                    <div className="service-text">淡斑</div>
                    <div className="service-text">纹眉</div>
                    <div className="service-text">纹唇</div>
                </div>
                <div className="service-col">
                    <div className="service-text">烫睫毛</div>
                    <div className="service-text">纹眼线</div>
                    <div className="service-text">脱毛</div>
                    <div className="service-text">化妆</div>
                    <div className="service-text">艾灸</div>
                </div>
            </div>
        </div>

        <div >
            <div>
                <Image src={offer} className="swiperImg" />
            </div>
        </div>

    </Container>
  )
}