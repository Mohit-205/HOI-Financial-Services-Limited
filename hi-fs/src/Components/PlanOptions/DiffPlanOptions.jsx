import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Navbarothers from "../Homepage/Navbarothers"
import styles from "./DiffPlanOptions.module.css";
import recommended from "./assets/recommended.svg";
import {
  calendarSvg,
  carSvg,
  emiSvg,
  mapSvg,
  needHelpSvg,
} from "./assets/svgs";
import { images } from "./assets/imgs";
import Calamities from "./assets/Calamities.svg";
import Accident from "./assets/Accident-Collision-New.svg";
import Consumables from "./assets/Consumables.svg";
import Firedamage from "./assets/Fire-Damage.svg";
import Theft from "./assets/Theft-New.svg";
import Thirdparty from "./assets/ThirdParty-Losses.svg";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Cardetail from "../Cars/Cardetail/Cardetail";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Typecarpopup from "../Cars/Typecarpopup/Typecarpopup";

const InContainer = styled.div`
  //background-color: green;
  //height: 400px;
  width: 752px;
  margin: auto;
  margin-top: 64px;
  display: flex;
  grid-gap: 16px;
`;
const InContleft = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 368px;
  border: 1px solid #dcdee9;
`;
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 368px;
  // margin-left: 10.9%;
  border: 1px solid #dcdee9;
`;

export const DifferentPlanOptions = () => {
  var data;
  const [carDetails, setCarDetails] = useState({
    liscencePlate: "",
    vehicleName: "",
    NCB: "",
    registrationMonthYear: "",
    carValue: 12.55,
    pincode: "",
  });
  useEffect(() => {
    try {
      let id = localStorage.getItem("ackoid");
      //`https://acko.herokuapp.com/cars/${id}`
      const res = axios
        .get(`http://localhost:8000/cars/${id}`)
        .then((res) => {
          console.log(res.data);
          data = res.data;
          console.log(data);
          setCarDetails({
            liscencePlate: data.number,
            vehicleName: data.name,
            NCB: data.ncb,
            registrationMonthYear: data.month + "," + data.year,
            pincode: data.pincode,
            carValue: 12.55,
            mobile: data.mobile,
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const pincode = 400607;

  const history = useHistory();

  const riskValues = {
    high: (carDetails.carValue * 0.294023904).toFixed(2),
    low: carDetails.carValue.toFixed(2),
  };

  const [insuredValue, setInsuredValue] = useState(
    (riskValues.low / 2).toFixed(2)
  );

  const handleSliderChange = (e) => {
    setInsuredValue(Number(e.target.value).toFixed(2));
    setOwnDamagePlan((insuredValue * 0.549322709 * 1000).toFixed(0));
    setsmartSaverZeroDepreciationPlan(
      (insuredValue * 0.7803984 * 1000).toFixed(0)
    );
    setzeroDepreciationPlan((insuredValue * 1.176494 * 1000).toFixed(0));
  };
  const [ownDamagePlan, setOwnDamagePlan] = useState(
    (insuredValue * 0.549322709 * 1000).toFixed(0)
  );

  const [smartSaverZeroDepreciationPlan, setsmartSaverZeroDepreciationPlan] =
    useState((insuredValue * 0.7803984 * 1000).toFixed(0));
  const [zeroDepreciationPlan, setzeroDepreciationPlan] = useState(
    (insuredValue * 1.176494 * 1000).toFixed(0)
  );

  const handleSelectClick = () => {
    localStorage.setItem("currentPremium", ownDamagePlan);
    localStorage.setItem("currentIDV", insuredValue);
    history.push("/additionalCovers");
  };

  const handleSelectClick1 = () => {
    localStorage.setItem("currentPremium", smartSaverZeroDepreciationPlan);
    localStorage.setItem("currentIDV", insuredValue);
    history.push("/additionalCovers1");
  };

  const handleSelectClick2 = () => {
    localStorage.setItem("currentPremium", zeroDepreciationPlan);
    localStorage.setItem("currentIDV", insuredValue);
    history.push("/additionalCovers2");
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Navbarothers/>
      <InContainer>
        <InContleft>
          <div
            style={{
              border: "1px solid #dcdee9",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                paddingTop: "13px",
                paddingBottom: "13px",
              }}
            >
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex" }}>
                  {" "}
                  {carSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    {carDetails.liscencePlate} {carDetails.vehicleName}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {calendarSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    NCB - {carDetails.NCB}%{" "}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {calendarSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    Registration in {carDetails.registrationMonthYear}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {mapSvg}{" "}
                  <span className={styles.vehicle}> {carDetails.pincode} </span>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  float: "right",
                  paddingRight: "18px",
                  paddingTop: "16px",
                  paddingBottom: "4px",
                  fontSize: "12px",
                }}
                className={styles.editLink}
              >
                <a href="/cars/carnumber" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#528ae2" }}> Edit</span>{" "}
                </a>
              </div>
              <div>
                <img id="img"
                  style={{
                    width: "135px",
                    height: "60px",
                    marginTop: "16px",
                    float: "right",
                  }}
                  src={images.ecosport} 
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #dcdee9",
              paddingBottom: "8px",
            }}
            className={styles.fontType}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "16px",
                  // float: "left",
                  marginLeft: "16px",
                }}
              >
                Insured Declared Value (IDV)
              </span>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "18px",
                  marginLeft: "110px",
                  marginTop: "16px",
                  marginRight: "32px",
                  color: "#3F8FD8",
                }}
              >
                {" "}
                ₹{insuredValue}L
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  width: "105px",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "14px",
                  marginTop: "16px",
                  // float: "left",
                  marginLeft: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  {riskValues.high}L
                </div>{" "}
                <div
                  style={{
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  HIGH RISK
                </div>
              </span>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  width: "150px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  marginLeft: "210px",
                  marginTop: "16px",

                  color: "#3F8FD8",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "black"
                  }}
                >
                  {riskValues.low}L
                </div>{" "}
                <div
                  style={{
                    fontSize: "10px",
                    lineHeight: "10px",
                    color: "black"
                  }}
                >
                  LOW RISK
                </div>
              </span>
            </div>
            <div
              style={{
                height: "16px",
                marginLeft: "16px",
                marginRight: "32px",
                marginTop: "8px",
              }}
            >
              <input
                min={riskValues.high}
                max={riskValues.low}
                onChange={handleSliderChange}
                step={0.01}
                type="range"
              />
            </div>
            <div
              style={{
                //height: "16px",
                marginLeft: "16px",
                marginRight: "32px",
                marginTop: "8px",

                display: "grid",
                justifyContent: "right",
              }}
            >
              <div
                style={{
                  width: "100px",
                  marginTop: "-5px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #3EB753",
                    borderTopColor: "white",
                    height: "6px",
                  }}
                ></div>
                <div
                  style={{
                    width: "0",
                    height: "0",
                    margin: "auto",
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid #3EB753",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: "8px",
                    textAlign: "center",
                  }}
                >
                  4 out of 5 users select an IDV within this range
                </div>
              </div>
            </div>
          </div>

          <div className={styles.needHelpMain}>
            <div>{needHelpSvg}</div>
            <div>
              <div>Need help with something?</div>
              <div>
                Request a callback, sit back relax! Our experts will help you
                with all your queries
              </div>
              <Link to= "/Contactus/Contact"><div className={styles.contactexpert}>Talk to an expert {">"} </div></Link>
            </div>
          </div>
        </InContleft>
        <InContright>
          <div className={styles.insideContRight}>
            <div>
              <div>3 Plans for your Ecosport</div>
              <div>
                {" "}
                <span>{emiSvg}</span> starting from ₹208
              </div>
              <div>
                {" "}
                <img src={recommended} alt="" />{" "}
              </div>
              <div>
                <div>
                  <div>Own Damage Plan</div>
                  <div>Recommended if you already have a third party plan</div>
                  <button onClick={() => setModalShow(true)}>See Details</button>
                  {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                </div>
                <div>
                  <div>
                    ₹ {ownDamagePlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(ownDamagePlan * 2.44301924).toFixed(0)}{" "}
                    <span> + GST</span>
                  </div>
                  <button onClick={handleSelectClick}>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <div className={styles.insidemainclass}>
            <div>
              <div>
                <div>
                  <div>Comprehensive Plans</div>
                  <div>
                  Covers damages to your car and others
                  </div>
                  <button onClick={() => setModalShow1(true)}>See Details</button>
                  {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
                </div>
                <div>
                  <div>
                    ₹ {smartSaverZeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(smartSaverZeroDepreciationPlan * 2.0595).toFixed(0)} <span> + GST</span>
                  </div>
                  <button onClick={handleSelectClick1}>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.insideLastClass}>
            <div>
              <div>
                <div>
                  <div>Zero Depreciation Plan</div>
                  <div>
                    Includes all benefits of Own Damage plan and covers full
                    cost of car parts during claims.
                  </div>
                  <button onClick={() => setModalShow2(true)}>See Details</button>
                  {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
                </div>
                <div>
                  <div>
                    ₹ {zeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(zeroDepreciationPlan * 1.753569784).toFixed(0)}
                    <span> + GST</span>
                  </div>
                  <button onClick={handleSelectClick2}>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </InContright>
      </InContainer>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Own Damage Plan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p class="font-weight-normal">Own damage car insurance is helpful in case of damages caused to the car in natural and man-made calamaties.</p>
        <p class="font-weight-bold">What's Covered</p>
        <Container>
          <Row>
            <Col>
            <img src={Calamities}></img><b>Calamities</b><p>Damages due to natural or man-made causes like earthquake,riots,etc.</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Comprehensive Plans
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p class="font-weight-normal">Covers damage to your car and others..</p>
        <p class="font-weight-bold">What's Covered</p>
        <Container>
          <Row>
            <Col>
            <img src={Accident}></img><b>Accidents</b><p>Damages to the car due to an accident</p>
            </Col>
            <Col>
            <img src={Firedamage}></img><b>Fire</b><p>In case your car catches fire, resulting from self-ignition, explosion or lightning</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={Theft}></img><b>Theif</b><p>If your car is stolen, we will pay you the value as per policy of your car</p>
            </Col>
            <Col>
            <img src={Calamities}></img><b>Calamities</b><p>Damages due to natural or man-made causes like earthquake,riots,etc.</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={Thirdparty}></img><b>Third Party Losses</b><p>Death, injury or property damage to any third party arising from your car</p>
            </Col>
            <Col>
            <img src={Consumables}></img><b>Consumables</b><p>Includes coverage for nuts, bolts etc during claims</p>
            </Col>
          </Row>
        </Container>
        <p class="font-weight-bold text-danger">What's Not Covered</p>
        <Container>
          <Row>
            <Col>
            <h9>&#x2022; Non-Accident Damages</h9>
            </Col>
            <Col>
            <h9>&#x2022; Commercial usage of the Car</h9>
            </Col>
          </Row>
          <Row>
            <Col>
            <h9>&#x2022; Pre-existing damages</h9>
            </Col>
            <Col>
            <h9>&#x2022; Normal wear and tear of tyres, tubes and engine</h9>
            </Col>
          </Row>
          <Row>  
            <Col>
            <h9>&#x2022; Illegal Driving</h9>
            </Col>
            <Col>
            <h9>&#x2022; Indirect damages or liability due to your car accident</h9>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Zero Depreciation Plan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p class="font-weight-normal">Bumper to Bumper cover. Includes all benefits of a comprehensive policy and covers depreciation cost of parts</p>
        <p class="font-weight-bold">What's Covered</p>
        <Container>
          <Row>
            <Col>
            <img src={Accident}></img><b>Accidents</b><p>Damages to the car due to an accident</p>
            </Col>
            <Col>
            <img src={Firedamage}></img><b>Fire</b><p>In case your car catches fire, resulting from self-ignition, explosion or lightning</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={Theft}></img><b>Theif</b><p>If your car is stolen, we will pay you the value as per policy of your car</p>
            </Col>
            <Col>
            <img src={Calamities}></img><b>Calamities</b><p>Damages due to natural or man-made causes like earthquake,riots,etc.</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={Thirdparty}></img><b>Third Party Losses</b><p>Death, injury or property damage to any third party arising from your car</p>
            </Col>
            <Col>
            <img src={Consumables}></img><b>Consumables</b><p>Includes coverage for nuts, bolts etc during claims</p>
            </Col>
          </Row>
        </Container>
        <p class="font-weight-bold text-danger">What's Not Covered</p>
        <Container>
          <Row>
            <Col>
            <h9>&#x2022; Non-Accident Damages</h9>
            </Col>
            <Col>
            <h9>&#x2022; Commercial usage of the Car</h9>
            </Col>
          </Row>
          <Row>
            <Col>
            <h9>&#x2022; Pre-existing damages</h9>
            </Col>
            <Col>
            <h9>&#x2022; Normal wear and tear of tyres, tubes and engine</h9>
            </Col>
          </Row>
          <Row>  
            <Col>
            <h9>&#x2022; Illegal Driving</h9>
            </Col>
            <Col>
            <h9>&#x2022; Indirect damages or liability due to your car accident</h9>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
}