import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer_main_container">
      <div className="footer_maincontainer_content">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="footer_maincontainercontententry_wrapper"
        >
          <img
            src={logo}
            alt="logo"
            className="footer_maincontainercontententrywrapper_img"
          />
          <div className="footer_maincontainercontententrywrappersocial_wrapper">
            <a
              href=""
              className="footer_maincontainercontententrywrapper_social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.252"
                height="21.999"
                viewBox="0 0 10.252 21.999"
              >
                <g
                  id="facebook-logo_1_"
                  data-name="facebook-logo (1)"
                  transform="translate(-125.619)"
                >
                  <path
                    id="Path_63"
                    data-name="Path 63"
                    d="M132.441,7.208v-1.9a4.176,4.176,0,0,1,.04-.661,1.283,1.283,0,0,1,.18-.461.736.736,0,0,1,.454-.314,3.231,3.231,0,0,1,.835-.087h1.9V0h-3.03a4.932,4.932,0,0,0-3.778,1.248,5.257,5.257,0,0,0-1.148,3.678V7.208h-2.27V11h2.269V22h4.552V11h3.03l.4-3.791Z"
                    transform="translate(0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            <a
              href=""
              className="footer_maincontainercontententrywrapper_social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.169"
                height="17.199"
                viewBox="0 0 21.169 17.199"
              >
                <path
                  id="twitter_1_"
                  data-name="twitter (1)"
                  d="M21.169,50.036a9.048,9.048,0,0,1-2.5.685,4.315,4.315,0,0,0,1.909-2.4,8.673,8.673,0,0,1-2.752,1.05,4.339,4.339,0,0,0-7.507,2.968,4.468,4.468,0,0,0,.1.99,12.284,12.284,0,0,1-8.945-4.539,4.341,4.341,0,0,0,1.334,5.8,4.286,4.286,0,0,1-1.961-.535V54.1a4.36,4.36,0,0,0,3.477,4.264,4.331,4.331,0,0,1-1.138.143,3.837,3.837,0,0,1-.822-.074,4.381,4.381,0,0,0,4.055,3.023,8.72,8.72,0,0,1-5.381,1.851A8.128,8.128,0,0,1,0,63.252,12.218,12.218,0,0,0,6.657,65.2,12.267,12.267,0,0,0,19.009,52.85c0-.192-.007-.377-.016-.561A8.658,8.658,0,0,0,21.169,50.036Z"
                  transform="translate(0 -48)"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href=""
              className="footer_maincontainercontententrywrapper_social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.968"
                height="17.199"
                viewBox="0 0 16.968 17.199"
              >
                <g
                  id="linkedin-logo_1_"
                  data-name="linkedin-logo (1)"
                  transform="translate(0 -9.558)"
                >
                  <path
                    id="LinkedIn"
                    d="M16.968,20.1v6.654H13.331V20.548c0-1.56-.526-2.624-1.842-2.624a2.006,2.006,0,0,0-1.866,1.411,2.789,2.789,0,0,0-.121.941v6.481H5.864s.049-10.515,0-11.6H9.5V16.8c-.007.012-.017.026-.024.037H9.5V16.8a3.586,3.586,0,0,1,3.278-1.918C15.173,14.879,16.968,16.538,16.968,20.1ZM2.059,9.558a1.949,1.949,0,0,0-2.059,2,1.938,1.938,0,0,0,2.01,2.006h.024a1.95,1.95,0,0,0,2.058-2.006A1.942,1.942,0,0,0,2.059,9.558ZM.216,26.757H3.853v-11.6H.216Z"
                    transform="translate(0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            <a
              href=""
              className="footer_maincontainercontententrywrapper_social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.186"
                height="17.199"
                viewBox="0 0 14.186 17.199"
              >
                <g id="XMLID_798_" transform="translate(-33.181)">
                  <path
                    id="XMLID_799_"
                    d="M45.527,1.762A7.116,7.116,0,0,0,40.686,0a7.805,7.805,0,0,0-5.613,2.062,5.956,5.956,0,0,0-1.892,4.224,3.933,3.933,0,0,0,2.248,3.931.776.776,0,0,0,.283.055.622.622,0,0,0,.614-.482c.048-.17.158-.591.205-.773a.7.7,0,0,0-.2-.784,2.426,2.426,0,0,1-.6-1.708A4.409,4.409,0,0,1,40.408,2.2c2.411,0,3.908,1.306,3.908,3.407a6.811,6.811,0,0,1-.844,3.459,2.494,2.494,0,0,1-2.065,1.377,1.4,1.4,0,0,1-1.089-.474A1.15,1.15,0,0,1,40.1,8.929c.107-.433.254-.886.4-1.323A7.858,7.858,0,0,0,41,5.452a1.6,1.6,0,0,0-1.652-1.72A2.517,2.517,0,0,0,37.106,6.5a3.948,3.948,0,0,0,.308,1.548c-.158.639-1.1,4.435-1.277,5.151-.1.418-.724,3.719.3,3.982,1.155.3,2.187-2.919,2.293-3.282.085-.3.383-1.413.566-2.1a3.589,3.589,0,0,0,2.329.858,5.285,5.285,0,0,0,4.17-1.988,7.725,7.725,0,0,0,1.568-4.88A5.507,5.507,0,0,0,45.527,1.762Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
        </Link>
        <div className="footer_maincontainercontententry_wrapper">
          <div className="footer_maincontainercontententry_heading">Links</div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Home
          </Link>
          <Link
            to="/admissions"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Admissions
          </Link>
          <Link
            to="/careers"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Campus Life
          </Link>
          <Link
            to="/our-campus"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            LGS Societies
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Guide
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Blog
          </Link>
        </div>
        <div className="footer_maincontainercontententry_wrapper">
          <div className="footer_maincontainercontententry_heading">
            Support
          </div>
          <Link
            to="/faq"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            FAQ
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            How it Works
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Features
          </Link>
          <Link
            to="/contact-us"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer_maincontainercontententrywrapper_entry"
          >
            Reporting
          </Link>
        </div>
        <div className="footer_maincontainercontententry_wrapper">
          <div className="footer_maincontainercontententry_heading">
            Contact Us
          </div>
          <a href="" className="footer_maincontainercontententrywrapper_entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.907"
              height="17.907"
              viewBox="0 0 17.907 17.907"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#1a1a1a" />
                  <stop offset="1" stop-color="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M17.4,12.654l-3.917-1.679a.839.839,0,0,0-.979.241l-1.735,2.12a12.964,12.964,0,0,1-6.2-6.2L6.687,5.4a.837.837,0,0,0,.241-.979L5.25.508A.845.845,0,0,0,4.288.022L.651.861A.839.839,0,0,0,0,1.679,16.227,16.227,0,0,0,16.229,17.908a.839.839,0,0,0,.818-.651l.839-3.637a.85.85,0,0,0-.49-.965Z"
                transform="translate(0 0)"
                fill="url(#linear-gradient)"
              />
            </svg>
            +92 345 7225510
          </a>
          <a href="" className="footer_maincontainercontententrywrapper_entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.824"
              height="14.732"
              viewBox="0 0 21.824 14.732"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#1a1a1a" />
                  <stop offset="1" stop-color="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_zocial-email"
                data-name="Icon zocial-email"
                d="M.072,17.495V5.373q0-.021.063-.4l7.134,6.1L.156,17.916a1.784,1.784,0,0,1-.084-.421ZM1.019,4.131a.907.907,0,0,1,.358-.063H20.591a1.192,1.192,0,0,1,.379.063l-7.155,6.124-.947.758-1.873,1.536L9.121,11.013l-.947-.758ZM1.04,18.737l7.176-6.882,2.778,2.252,2.778-2.252,7.176,6.882a1.01,1.01,0,0,1-.358.063H1.377a.953.953,0,0,1-.337-.063Zm13.679-7.66,7.113-6.1a1.256,1.256,0,0,1,.063.4V17.495a1.613,1.613,0,0,1-.063.421Z"
                transform="translate(-0.072 -4.068)"
                fill="url(#linear-gradient)"
              />
            </svg>
            ahmadarshad17@gmail.com
          </a>
          <a href="" className="footer_maincontainercontententrywrapper_entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.463"
              height="30.77"
              viewBox="0 0 23.463 30.77"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#1a1a1a" />
                  <stop offset="1" stop-color="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_map-city-hall"
                data-name="Icon map-city-hall"
                d="M5.437,14.054H7.671V28.413h3.352V16.105h3.352V28.413h3.351V16.105h3.353V28.413h3.352V14.054h2.233a1.075,1.075,0,0,0,1.118-1.026,1,1,0,0,0-.466-.83l0,0-.017-.01-.029-.017L16.609,6.651V5.034c1.969.905,3.59-.654,6.144.283V1.746c-2.555-.937-4.176.621-6.144-.284V1.233a.56.56,0,0,0-1.116,0V6.651L4.83,12.168l-.029.017-.016.011v0a1,1,0,0,0-.464.83A1.074,1.074,0,0,0,5.437,14.054ZM6.554,29.439,4.32,31.49H27.783l-2.235-2.051Z"
                transform="translate(-4.32 -0.72)"
                fill="url(#linear-gradient)"
              />
            </svg>
            Islamabad, Pakistan
          </a>
        </div>
      </div>
      <div className="footer_maincontainercontentbuttom_content">
        <div className="footer_maincontainercontententrywrapperentry_copyright">
          Copyright & Design By @DSME GLOBAL
        </div>
        <div className="footer_maincontainercontententrywrapper_right">
          <div className="footer_maincontainercontententrywrapperentry_link">
            Terms of use
          </div>
          <div className="footer_maincontainercontententrywrapperentry_link">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
