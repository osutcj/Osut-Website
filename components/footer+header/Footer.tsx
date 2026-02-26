import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <a id="Contact"></a>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="https://www.utcluj.ro/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/images/UTalb.png" alt="Logo" />
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/OSUTCJ">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/osutcluj/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:osutcluj@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <a href="https://osut.org/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/images/OSUT alb.png" alt="Logo" />
          </a>
          <div className="footer-bottom-contact">
            <h3 style={{ textAlign: "center", marginLeft: "0px" }}>Contact:</h3>
            <p>
              <b>Organizația Studenților din Universitatea Tehnică din Cluj-Napoca</b>
            </p>
            <p>
              Email: <a href="mailto:osutcluj@gmail.com">osutcluj@gmail.com</a>
            </p>
            <p>
              <b>Timiș Traian - President</b>
            </p>
            <p>
              Phone Number: <i>0757332298</i>
            </p>
            <p>
              Email: <a href="mailto:osutcluj@gmail.com">osutcluj@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
