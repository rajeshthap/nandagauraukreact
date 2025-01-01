import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../assets/css/LeftNav.css";
import Accordion from "react-bootstrap/Accordion";
import UKLogon from "../../assets/images/UKLogo.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Card, Form } from "react-bootstrap";
import KanyaBorn from "../../assets/images/kanyaborn.png";
import Girls12th from "../../assets/images/girls12th.png";
import PdfFile from "../../assets/images/12thpass.png";
import "../../assets/css/HomePage.css";
import BirthInfo from "../modal/BirthInfo";
import Girls12thPass from "../modal/Girls12thPass";
import Footer from "../footer/Footer";
import DashboardIndex from "./DashboardIndex";
import BirthCheckbox from "./BirthCheckbox";
import InnerNavigation from "./InnerNavigation";
import DashHeader from "./DashHeader";

const UserDashboard = () => {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  return (
    <>
      <div>
        {/* Header */}
        {/* <header>
          <div className="logosec">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
              className="icn menuicn"
              id="menuicn"
              alt="menu-icon"
              onClick={toggleNav}
            />

            <Link to="#" className="logo-page">
              <img src={UKLogon} alt="logo" className="logo" />
            </Link>
            <div className="nd-title">
              <span className="nd-subtitle">
                उत्तराखंड सरकार | Gov.t of Uttarakhand{" "}
              </span>
              <span className="subtitle">
                महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
              </span>
            </div>
          </div>

          <div className="message">
            <div className="nd-msg">
              <span>User:</span> Deepika
            </div>

            <div className="dp" alt="logout" title="Click to logout">
              <LuLogOut />
            </div>
          </div>
        </header> */}
        <DashHeader />

        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
        <InnerNavigation />

          {/* Main Content */}

          <div className="main">
            <DashboardIndex />

            <div className="box-container">
              <Accordion className="nd-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header> कन्या के जन्म पर</Accordion.Header>
                  <Accordion.Body>
                    {/* <Card className="mt-4 pt-3 nd-Login-form flex-fill"> */}
                    <p className="text-center nd-card-title">
                      कन्या के जन्म पर
                    </p>
                    <div className="nd-card-img">
                      <img src={KanyaBorn} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body">
                      <ol className="mt-2">
                        <li>कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो</li>
                        <li>माता / पिता / अभिभावक के हस्ताक्षर</li>
                        <li>स्थाई निवास प्रमाण पत्र</li>
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
                    {/* </Card> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    बालिका के इंटर उत्तीर्ण करने पर
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* <Card className="mt-4 pt-3 nd-Login-form flex-fill"> */}
                    <p className="text-center nd-card-title">
                      बालिका के इंटर उत्तीर्ण करने पर
                    </p>
                    <div className="nd-card-img">
                      <img src={Girls12th} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body">
                      <ol className="mt-2">
                        <li>
                          आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें,
                          अधूरी एवं गलत जानकारी भरने पर आवेदन निरस्त कर दिया
                          जाएगा।
                        </li>
                        <li>
                          यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं
                          हेतु ही मान्य है ।
                        </li>
                        <li>
                          एक परिवार की किन्हीं भी दो से अधिक बालिकाओं (जीवित
                          बालिकाओं) को नंदा गौरा योजना से लाभान्वित नहीं किया
                          जाएगा।
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
                    {/* </Card> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>अनाथ आश्रम</Accordion.Header>
                  <Accordion.Body>
                    {/* <Card className="mt-4 pt-3 nd-Login-form flex-fill"> */}
                    <p className="text-center nd-card-title">
                      बालिका के इंटर उत्तीर्ण करने पर
                    </p>
                    <div className="nd-card-img">
                      <img src={Girls12th} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body">
                      <ol className="mt-2">
                        <li>
                          आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें,
                          अधूरी एवं गलत जानकारी भरने पर आवेदन निरस्त कर दिया
                          जाएगा।
                        </li>
                        <li>
                          यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं
                          हेतु ही मान्य है ।
                        </li>
                        <li>
                          एक परिवार की किन्हीं भी दो से अधिक बालिकाओं (जीवित
                          बालिकाओं) को नंदा गौरा योजना से लाभान्वित नहीं किया
                          जाएगा।
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
                    {/* </Card> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Row className="nd-box">
                <Col lg={4} md={4} sm={12} className="d-flex">
                  <Card className="mt-4 pt-3 nd-Login-form flex-fill">
                    <p className="text-center nd-card-title">
                      कन्या के जन्म पर
                    </p>
                    <div className="nd-card-img">
                      <img src={KanyaBorn} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body nd-start-item">
                      <ol>
                        <li>कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो</li>
                        <li>माता / पिता / अभिभावक के हस्ताक्षर </li>
                        <li>स्थाई निवास प्रमाण पत्र</li>
                        <li>
                          परिवार रजिस्टर की नकल <strong>या</strong> सभासद/पार्षद
                          द्वारा दिया गया प्रमाण पत्र
                        </li>
                        <li>राशन कार्ड की प्रति</li>
                        <li>संस्थागत प्रसव का प्रमाण पत्र</li>
                        <li>जन्म पंजीकरण का प्रमाण पत्र</li>
                        <li>आय प्रमाण पत्र</li>
                        <li>माता और पिता / अभिभावक का आधार कार्ड</li>
                        <li>
                          नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर{" "}
                          <strong>या</strong> किराया समझौते के कागजात
                          <small>
                            {" "}
                            ना उपलब्ध होने की स्तिथि में गृह कर ना देने का ग्राम
                            प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र
                          </small>
                        </li>
                        <li>माता और पिता / अभिभावक का पैन कार्ड</li>
                        <li>
                          आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र।
                          (प्रारूप यहाँ से डाउनलोड करें।){" "}
                        </li>
                        <li>
                          मातृशिशु प्रतिरक्षण / एम०सी० पी० (टीकाकरण) कार्ड{" "}
                        </li>
                        <li>
                          परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं
                          विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति
                        </li>
                        <li>
                          सामाजिक आर्थिक और जाति जनगणना (SECC) में परिवार की
                          स्थिति के आंकलन की प्रति (यदि उपलबध है)
                        </li>
                        <li>
                          शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही
                          अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य
                          बालिकाओं को पूर्व में कन्या के जन्म पर योजना का लाभ
                          दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न
                          बिंदु शामिल होंगे
                          <ol type="a">
                            <li>
                              मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी
                              प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है
                            </li>
                            <li>
                              मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी,समस्त
                              सूचनाएं सही –सही दी गयी है
                            </li>
                            <li>
                              मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है{" "}
                            </li>
                            <li>
                              मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष
                              के बैंक स्टेटमेंट सहित दे दिया गया है
                            </li>
                          </ol>
                        </li>

                        <li>
                          अन्य आवश्यक अभिलेख:-
                          <ol>
                            <li>
                              परिवार के विगत 03 बार के बिजली के बिलों की प्रति
                              तथा विगत 01 बार के पानी के बिल की प्रति
                              <small>
                                कनेक्शन न होने की स्तिथि में शपथ पत्र में आवश्यक
                                रूप से उल्लेख करे।
                              </small>
                            </li>
                            <li>कोई अन्य दस्तावेज़ की प्रतिलिपि</li>
                          </ol>
                        </li>
                        <li>
                          <span> ** </span>मेरे द्वारा शासनादेश तथा नियमो का
                          पूर्णता अध्ययन कर लिए गया है
                        </li>
                      </ol>
                    </div>
                    <div className="nd-check-btn">
                      <div className="nd-chek-box mb-3">
                        <BirthCheckbox />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg={4} md={4} sm={12} className="d-flex">
                  <Card className="mt-4 pt-3 nd-Login-form flex-fill">
                    <p className="text-center nd-card-title">
                      बालिका के इंटर उत्तीर्ण करने पर
                    </p>
                    <div className="nd-card-img">
                      <img src={Girls12th} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body nd-start-item">
                      <ol>
                        <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो ।</li>
                        <li>छात्रा के हस्ताक्षर</li>
                        <li>माता / पिता/अभिभावक के हस्ताक्षर</li>
                        <li>हाईस्कूल का प्रमाण-पत्र</li>
                        <li>
                          कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र।
                          राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से
                          कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित
                          अंक पत्र की छायाप्रति
                        </li>
                        <li>छात्रा एवं माता और पिता/अभिभावक का आधार कार्ड</li>
                        <li>छात्रा एवं माता और पिता/अभिभावक का पैन कार्ड</li>
                        <li>छात्रा का स्थाई निवास प्रमाण पत्र</li>
                        <li>
                          नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर{" "}
                          <strong>या</strong> किराया समझौते के कागजात ना उपलब्ध
                          होने की स्तिथि में गृह कर ना देने का ग्राम
                          प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र
                        </li>
                        <li>आय प्रमाण पत्र</li>
                        <li>
                          परिवार रजिस्टर की नकल <strong>या</strong> सभासद/पार्षद
                          द्वारा दिया गया प्रमाण पत्र तथा राशन कार्ड की प्रति
                          (बालिका का नाम राशन कार्ड में अंकित होना अनिवार्य है)
                        </li>
                        <li>
                          सामाजिक आर्थिक और जाति जनगणना में परिवार की स्थिति के
                          आंकलन की प्रति (यदि उपलबध है)
                        </li>
                        <li>
                          परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा
                          विगत 01 बार के पानी के बिल की प्रति कनेक्शन न होने की
                          स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।{" "}
                        </li>
                        <li>
                          शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही
                          अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य
                          बालिकाओं को पूर्व में 12वीं कक्षा पूरी करने पर योजना
                          का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में
                          निम्न बिंदु आवश्यक रूप से शामिल होंगे :
                          <ol>
                            <li>
                              मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी
                              प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है, मेरी
                              यह पुत्री अविवाहित है।{" "}
                            </li>
                            <li>
                              मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी समस्त
                              सूचनाएं सही –सहीदी गयी है
                            </li>
                            <li>
                              मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है{" "}
                            </li>
                            <li>
                              मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष
                              के बैंक स्टेटमेंट सहित दे दिया गया है
                            </li>
                          </ol>
                        </li>
                        <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
                        <li>
                          परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं
                          विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति
                        </li>
                        <li>
                          उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति
                        </li>
                        <li>
                          प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण
                          पत्र केवल संस्थागत छात्रा के लिए (प्रारूप यहाँ से
                          डाउनलोड करें।){" "}
                        </li>
                      </ol>
                    </div>
                    <div className="nd-check-btn">
                      <div className="nd-chek-box mb-3">
                        <BirthCheckbox />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg={4} md={4} sm={12} className="d-flex">
                  <Card className="mt-4 pt-3 nd-Login-form flex-fill">
                    <p className="text-center nd-card-title">
                      नारी निकेतन, अनाथ आश्रम में पलने वाली बालिका के इंटर
                      उत्तीर्ण करने पर
                    </p>
                    <div className="nd-card-img">
                      <img src={Girls12th} alt="onlone-form"></img>
                    </div>
                    <div className="nd-card-body nd-start-item">
                      <ol>
                        <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो ।</li>
                        <li>छात्रा के हस्ताक्षर</li>
                        <li>माता / पिता/अभिभावक के हस्ताक्षर</li>
                        <li>हाईस्कूल का प्रमाण-पत्र</li>
                        <li>
                          कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र।
                          राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से
                          कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित
                          अंक पत्र की छायाप्रति
                        </li>
                        <li>छात्रा एवं माता और पिता/अभिभावक का आधार कार्ड</li>
                        <li>छात्रा एवं माता और पिता/अभिभावक का पैन कार्ड</li>
                        <li>छात्रा का स्थाई निवास प्रमाण पत्र</li>
                        <li>
                          नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर{" "}
                          <strong>या</strong> किराया समझौते के कागजात ना उपलब्ध
                          होने की स्तिथि में गृह कर ना देने का ग्राम
                          प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र
                        </li>
                        <li>आय प्रमाण पत्र</li>
                        <li>
                          परिवार रजिस्टर की नकल <strong>या</strong> सभासद/पार्षद
                          द्वारा दिया गया प्रमाण पत्र तथा राशन कार्ड की प्रति
                          (बालिका का नाम राशन कार्ड में अंकित होना अनिवार्य है)
                        </li>
                        <li>
                          सामाजिक आर्थिक और जाति जनगणना में परिवार की स्थिति के
                          आंकलन की प्रति (यदि उपलबध है)
                        </li>
                        <li>
                          परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा
                          विगत 01 बार के पानी के बिल की प्रति कनेक्शन न होने की
                          स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।{" "}
                        </li>
                        <li>
                          शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही
                          अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य
                          बालिकाओं को पूर्व में 12वीं कक्षा पूरी करने पर योजना
                          का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में
                          निम्न बिंदु आवश्यक रूप से शामिल होंगे :
                          <ol>
                            <li>
                              मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी
                              प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है, मेरी
                              यह पुत्री अविवाहित है।{" "}
                            </li>
                            <li>
                              मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी समस्त
                              सूचनाएं सही –सहीदी गयी है
                            </li>
                            <li>
                              मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है{" "}
                            </li>
                            <li>
                              मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष
                              के बैंक स्टेटमेंट सहित दे दिया गया है
                            </li>
                          </ol>
                        </li>
                        <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
                        <li>
                          परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं
                          विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति
                        </li>
                        <li>
                          उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति
                        </li>
                        <li>
                          प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण
                          पत्र केवल संस्थागत छात्रा के लिए (प्रारूप यहाँ से
                          डाउनलोड करें।){" "}
                        </li>
                      </ol>
                    </div>
                    <div className="nd-check-btn">
                      <div className="nd-chek-box mb-3">
                        <BirthCheckbox />
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
