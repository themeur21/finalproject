import React from "react";
import "./style.css";
import Sidebar from "../Sidebar";

/**
 * @author
 * @function Layout
 **/

const Layout = props => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <center>
        <div>
          <centre>
            <div class="wrapper">
              <ul>
                <li class="facebook">
                  <a href="#">
                    <i class="fa fa-facebook fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li class="twitter">
                  <a href="#">
                    <i class="fa fa-twitter fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li class="instagram">
                  <a href="#">
                    <i class="fa fa-instagram fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li class="google">
                  <a href="#">
                    <i class="fa fa-google fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li class="whatsapp">
                  <a href="#">
                    <i class="fa fa-whatsapp fa-2x" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </centre>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
          />
        </div>
      </center>
    </React.Fragment>
  );
};

export default Layout;
