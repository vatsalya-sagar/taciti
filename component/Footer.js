import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      {/* <div id="Contact">
        <div className="footerBg">
          <div className="innerCard">
            <div className="box">
              <h1>
                Suite #204 <br />
                6010 W Spring Creek Pkwy, <br />
                Plano, TX 75024, USA <br />{" "}
              </h1>
              <h2>info@taciti.com</h2>
            </div>
            <div className="servicesBox">
              <h1 className="serTxt">Services</h1>
              <p>Strategy & Advisory</p>
              <p>ERP Lead Transformation</p>
              <p>Transformation Management & Goverance</p>
              <p>Technology Services</p>
              <p>Human Capital Management</p>
            </div>
            <div className="servicesBox">
              <h1 className="serTxt">Services</h1>
              <p>Strategy & Advisory</p>
              <p>ERP Lead Transformation</p>
              <p>Transformation Management & Goverance</p>
              <p>Technology Services</p>
              <p>Human Capital Management</p>
            </div>
            <div className="servicesBox">
              <h1 className="serTxt">Services</h1>
              <p>Strategy & Advisory</p>
              <p>ERP Lead Transformation</p>
              <p>Transformation Management & Goverance</p>
              <p>Technology Services</p>
              <p>Human Capital Management</p>
            </div>
          </div>
        </div>
      </div> */}
      <div id="footer">
        <div className="footerBg">
          <div className="innerCard   col-12 ">
            <div className="row">
              <div className="col-md-3">
                <div className="box">
                  <h1>
                    Suite #204 <br />
                    6010 W Spring Creek Pkwy, <br />
                    Plano, TX 75024, USA <br />
                  </h1>
                  <h2>info@taciti.com</h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className="servicesBox">
                  <h1 className="serTxt">Services</h1>
                  <p>
                    <Link href="/business-consulting/" className="custom-link">
                      Strategy & Advisory
                    </Link>
                  </p>
                  <p>
                    <Link href="/process-advisory/">
                      ERP Lead Transformation
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link href="/business-transformation/">
                      Transformation Management & Goverance
                    </Link>
                  </p>
                  <p>
                    <Link href="/technology-services/">
                      Technology Services
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link href="/talent-management-transformation/">
                      Human Capital Management
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="servicesBox">
                  <h1 className="serTxt">Industries</h1>
                  <p>
                    <Link
                      href="/manufacturing-industries/"
                      className="custom-link"
                    >
                      Manufacturing Industries{" "}
                    </Link>
                  </p>
                  <p>
                    <Link href="/life-sciences/">Life Sciences</Link>
                  </p>
                  <p>
                    {" "}
                    <Link href="/consumer-packaged-goods/">
                      Consumer Packaged Goods{" "}
                    </Link>
                  </p>
                  <p>
                    <Link href="/hi-tech/">Hi-Tech </Link>
                  </p>
                  <p>
                    {" "}
                    <Link href="/utility/">Utilities</Link>
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="servicesBox">
                  <h1 className="serTxt">Qulck Links</h1>
                  <p>
                    <Link href="/contact-us/" className="custom-link">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
