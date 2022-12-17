import React from "react";
import NavLink from "react-bootstrap/esm/NavLink";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Nidhal_Rebhi</h2>

            <hr />
            <h4 className="list-unstyled">
              <p>Thanks for visit our portfolio ...</p>
            </h4>
          </div>

          <div className="col">
            <h2>Contact</h2>

            <hr />
            <ui className="list-unstyled">
              <li>Tunis, Tunisia</li>
              <li>r.nidhal97@outlook.fr</li>
              <li>53416956</li>
              <li>58061503</li>
            </ui>
          </div>
        </div>

        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nidhal Rebhi | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
