import Layout from "../../layouts/Main";
import Link from "next/link";
import React, { useState } from "react";
import Supplyer from "./supplyer";
import ServicePoint from "./service-point";
const BecamePartner = () => {
  const [data, setData] = useState([Supplyer(), ServicePoint()]);
  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll((val) => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentIdx(index);
    toggleCurrent();
  };

  return (
    <Layout>
      <section className="form-page partner-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <a>
                <i className="icon-left"></i> Back to Home
              </a>
            </Link>
          </div>
          <div className="form-block">
            <div className="form-logo">
              <h2>Apply to be a</h2>
            </div>
            <div className="reg-log-role">
              <button className="cus" onClick={() => setCurrent(0)}>
                Supplyer
              </button>
              <button className="or">OR</button>
              <button className="ser" onClick={() => setCurrent(1)}>
                Service point manager
              </button>
            </div>
          </div>
          <div>
            {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
          </div>
          {showCurrent ? <div>{data[currentIdx]}</div> : null}
        </div>
      </section>
    </Layout>
  );
};

export default BecamePartner;
