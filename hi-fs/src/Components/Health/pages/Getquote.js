import { useEffect, useState } from "react";
import { SingleAdditionalCover } from '../../PlanOptions/SingleAdditionalCovers';
import { GiInnerSelf } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa'
import { GrRestroomWomen } from 'react-icons/gr';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import styles from "../../PlanOptions/DiffPlanOptions.module.css";
import { Link } from "react-router-dom";


function Getquote() {
  const [carDetails, setCarDetails] = useState({
    liscencePlate: "",
    vehicleName: "",
    NCB: "",
    registrationMonthYear: "",
    carValue: 50.00,
    pincode: "",
  });

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

    return (
    <>
      <span className="fs-2 text-center"><b style={{color: 'purple'}}>Before we proceed, </b><b style={{color: 'black'}}>we need the following details.</b></span>
      <b className='fs-4 text-center mb-4'>Who would you like to cover?</b>
      <Card className="shadow-sm bg-white rounded align-self-center " style={{ width: '23rem' }}>
        <Card.Body className='p-3'>
        <Card.Title className='text-center pb-3'>Select members covered</Card.Title>
        <SingleAdditionalCover
          svg={<GiInnerSelf/>}
          heading="Self"
        ></SingleAdditionalCover>
        <SingleAdditionalCover
          svg={<GrRestroomWomen/>}
          heading="Spouse"
        ></SingleAdditionalCover>
        <SingleAdditionalCover
        svg={<FaChild/>}
        heading="Child"
      ></SingleAdditionalCover>
      </Card.Body>
      </Card>

      {/* <label for="customRange3" class="form-label">Customise your sum insured</label>
      <input type="range" class="form-range" min="0" max="2" step="0.5" id="customRange3"></input> */}

      <div
            style={{
              border: "1px solid #dcdee9",
              marginTop: "8px",
              paddingBottom: "8px",
            }}
            className={styles.fontType}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
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
                  fontSize: "16px",
                  lineHeight: "18px",
                  marginLeft: "480px",
                  marginTop: "16px",
                  marginRight: "13px",
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
                  fontSize: "22px",
                  lineHeight: "16px",
                  marginTop: "16px",
                  // float: "left",
                  marginLeft: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: "14px",
                  }}
                >
                  {riskValues.high}L
                </div>{" "}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "12px",
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
                  fontSize: "20px",
                  lineHeight: "16px",
                  marginLeft: "480px",
                  marginTop: "16px",
                  color: "#3F8FD8",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: "12px",
                    color: "black"
                  }}
                >
                  {riskValues.low}L
                </div>{" "}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "12px",
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
                step={5.042}
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
          
          <nav class="navbar fixed-bottom navbar-light bg-light">
            <a class="navbar-brand" style={{
              fontStyle: "normal",
              width: "90px",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "16px",
              marginLeft: "400px",
            }}>
              ₹ {ownDamagePlan} <span style={{color: "gray", fontSize: "12px"}}> + GST</span>
            </a>
            <Link to="/Health/Overview">
            <button type="button" class="btn btn-success" style={{marginRight: "350px",
              border: "none",
              borderRadius: "5%",
              backgroundColor: "green"}}>
              Proceed
            </button>
            </Link>
          </nav>


    </>
    );
  }
  
  export default Getquote;
  