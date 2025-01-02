import React from "react";

import {

  Row,
  Col,

 
  Card,
  Carousel,
} from "react-bootstrap";
import Nandonline from "../../assets/images/onlinenanda.png";
import OnlineImage from "../../assets/images/vig_2024.jpg";
import KanyaBorn from "../../assets/images/kanyaborn.png";
import Girls12th from "../../assets/images/girls12th.png";
import AnathAshrm from "../../assets/images/anathashrm.png";
import PdfFile from "../../assets/images/12thpass.png";
import "../../assets/css/HomePage.css";
import ModalOne from "../modal/ModalOne";
import BirthInfo from "../modal/BirthInfo";
import Girls12thPass from "../modal/Girls12thPass";
import Orphanage from "../modal/Orphanage";
function HomePage() {
  const carouselItems = [
    { id: 1, src: OnlineImage, alt: "Slide 1", caption: "" },
    { id: 1, src: OnlineImage, alt: "Slide 1", caption: "" },
  ];
  return (
    <div className="container-fluid">
      <Row>
        <Col lg={3} md={3} sm={12} className="d-flex">
          <Card className="mt-4 pt-3 nd-Login-form flex-fill">
            <p className="text-center nd-card-title">
              नंदा गौरा आवेदन पत्र ऑनलाइन भरने से पूर्व निम्न निर्देशों का
              भली-भाँति अध्ययन कर लें :-
            </p>
            <div className="nd-card-img">
              <img src={Nandonline} alt="onlone-form" className="img-fluid"></img>
            </div>
            <div className="nd-card-body">
              <ol className="mt-2">
                <li>
                  आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं
                  गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।
                </li>
                <li>
                  यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं हेतु ही
                  मान्य है ।
                </li>
                <li>
                  एक परिवार की किन्हीं भी दो से अधिक बालिकाओं(जीवित बालिकाओं) को
                  नंदा गौरा योजना से लाभान्वित नहीं किया जाएगा।
                </li>
              </ol>
            </div>
            <div className="nd-btn">
              <ModalOne />
              {/* <Button className="nd-card-btn ">Know more</Button> */}
            </div>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} className="d-flex">
          <Card className="mt-4 pt-3 nd-Login-form flex-fill">
            <p className="text-center nd-card-title">पूर्ण विज्ञप्ति:-</p>
            <Carousel className="carouael-slide">
              {carouselItems.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100 imag"
                    src={item.src}
                    alt={item.alt}
                  />
                  <Carousel.Caption>
                    <h3>{item.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Col>
        <Col lg={2} md={2} sm={12} className="d-flex">
          <Card className="mt-4 pt-3 nd-Login-form flex-fill">
            <p className="text-center nd-card-title">कन्या के जन्म पर</p>
            <div className="nd-card-img">
              <img src={KanyaBorn} alt="onlone-form" className="img-fluid"></img>
            </div>
            <div className="nd-card-body">
              <ol className="mt-2">
                <li>
                  आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं
                  गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।
                </li>
                <li>
                  यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं हेतु ही
                  मान्य है ।
                </li>
                <li>
                  एक परिवार की किन्हीं भी दो से अधिक बालिकाओं (जीवित बालिकाओं) को
                  नंदा गौरा योजना से लाभान्वित नहीं किया जाएगा।
                </li>
              </ol>
            </div>
            <div className="nd-btn">
             <BirthInfo />
            </div>
            <div className="nd-card-info">
              <p>
                आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र
                <img src={PdfFile} alt="pdf-file"></img>
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={2} md={2} sm={12} className="d-flex"> 
          <Card className="mt-4 pt-3 nd-Login-form flex-fill">
            <p className="text-center nd-card-title">
              बालिका के इंटर उत्तीर्ण करने पर
            </p>
            <div className="nd-card-img">
              <img src={Girls12th} alt="onlone-form" className="img-fluid"></img>
            </div>
            <div className="nd-card-body">
              <ol className="mt-2">
                <li>
                  आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं
                  गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।
                </li>
                <li>
                  यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं हेतु ही
                  मान्य है ।
                </li>
                <li>
                  एक परिवार की किन्हीं भी दो से अधिक बालिकाओं (जीवित बालिकाओं) को
                  नंदा गौरा योजना से लाभान्वित नहीं किया जाएगा।
                </li>
              </ol>
            </div>
            <div className="nd-btn">
           <Girls12thPass />
            </div>
            <div className="nd-card-info">
              <p className="nd-card-info-data">
                आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र
                <span className="nd-card-icon">Download</span>
                <img src={PdfFile} alt="pdf-file"></img>
              </p>
              <p>
                आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र
                <span className="nd-card-icon">Download</span>
                <img src={PdfFile} alt="pdf-file"></img>
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={2} md={2} sm={12} className="d-flex">
          <Card className="mt-4 pt-3 nd-Login-form flex-fill">
            <p className="text-center nd-card-title">
              बालिका के इंटर उत्तीर्ण करने पर
            </p>
            <div className="nd-card-img">
              <img src={AnathAshrm} alt="onlone-form"className="img-fluid"></img>
            </div>
            <div className="nd-card-body">
              <ol className="mt-2">
                <li>
                  आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं
                  गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।
                </li>
                <li>
                  यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं हेतु ही
                  मान्य है ।
                </li>
                <li>
                  एक परिवार की किन्हीं भी दो से अधिक बालिकाओं(जीवित बालिकाओं)को
                  नंदा गौरा योजना से लाभान्वित नहीं किया जाएगा।
                </li>
              </ol>
            </div>
            <div className="nd-btn">
             <Orphanage />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
