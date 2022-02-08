import React from "react";

function WhyCard({ icon, name }) {
  return (
    <div className="why__card">
      {icon} <span>{name}</span>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="why__section">
      <div className="section__heading">Why Us</div>
      <div className="section__info">
        It Is A Long Established Fact That A Reader Will Be Distracted By The
        Readable Content Of A Page When Looking At Its Layout. The Point Of
        Using Lorem
      </div>
      <div className="why__section__content">
        <WhyCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.852"
              height="63.852"
              viewBox="0 0 63.852 63.852"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#ed263d" />
                  <stop offset="1" stop-color="#77131f" />
                </linearGradient>
              </defs>
              <path
                id="Path_254"
                data-name="Path 254"
                d="M33.916,2A31.926,31.926,0,1,0,65.842,33.926,31.938,31.938,0,0,0,33.916,2ZM45.441,22.241A6.162,6.162,0,1,1,39.279,28.4,6.145,6.145,0,0,1,45.441,22.241ZM26.286,17.2a7.535,7.535,0,1,1-7.535,7.535A7.548,7.548,0,0,1,26.286,17.2Zm0,29.148V58.317A25.562,25.562,0,0,1,9.876,42.482c3.352-3.576,11.717-5.4,16.41-5.4a32.476,32.476,0,0,1,6.066.7C27.116,40.567,26.286,44.238,26.286,46.345Zm7.63,13.122a21.874,21.874,0,0,1-2.522-.128V46.345c0-4.533,9.386-6.8,14.047-6.8,3.416,0,9.322,1.245,12.26,3.671a25.6,25.6,0,0,1-23.785,16.25Z"
                transform="translate(-1.99 -2)"
                fill="url(#linear-gradient)"
              />
            </svg>
          }
          name="Easy Comparison"
        />
        <WhyCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.852"
              height="63.852"
              viewBox="0 0 63.852 63.852"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#ed263d" />
                  <stop offset="1" stop-color="#77131f" />
                </linearGradient>
              </defs>
              <path
                id="Path_254"
                data-name="Path 254"
                d="M33.916,2A31.926,31.926,0,1,0,65.842,33.926,31.938,31.938,0,0,0,33.916,2ZM45.441,22.241A6.162,6.162,0,1,1,39.279,28.4,6.145,6.145,0,0,1,45.441,22.241ZM26.286,17.2a7.535,7.535,0,1,1-7.535,7.535A7.548,7.548,0,0,1,26.286,17.2Zm0,29.148V58.317A25.562,25.562,0,0,1,9.876,42.482c3.352-3.576,11.717-5.4,16.41-5.4a32.476,32.476,0,0,1,6.066.7C27.116,40.567,26.286,44.238,26.286,46.345Zm7.63,13.122a21.874,21.874,0,0,1-2.522-.128V46.345c0-4.533,9.386-6.8,14.047-6.8,3.416,0,9.322,1.245,12.26,3.671a25.6,25.6,0,0,1-23.785,16.25Z"
                transform="translate(-1.99 -2)"
                fill="url(#linear-gradient)"
              />
            </svg>
          }
          name="100% Verified Data"
        />
        <WhyCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.852"
              height="63.852"
              viewBox="0 0 63.852 63.852"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#ed263d" />
                  <stop offset="1" stop-color="#77131f" />
                </linearGradient>
              </defs>
              <path
                id="Path_254"
                data-name="Path 254"
                d="M33.916,2A31.926,31.926,0,1,0,65.842,33.926,31.938,31.938,0,0,0,33.916,2ZM45.441,22.241A6.162,6.162,0,1,1,39.279,28.4,6.145,6.145,0,0,1,45.441,22.241ZM26.286,17.2a7.535,7.535,0,1,1-7.535,7.535A7.548,7.548,0,0,1,26.286,17.2Zm0,29.148V58.317A25.562,25.562,0,0,1,9.876,42.482c3.352-3.576,11.717-5.4,16.41-5.4a32.476,32.476,0,0,1,6.066.7C27.116,40.567,26.286,44.238,26.286,46.345Zm7.63,13.122a21.874,21.874,0,0,1-2.522-.128V46.345c0-4.533,9.386-6.8,14.047-6.8,3.416,0,9.322,1.245,12.26,3.671a25.6,25.6,0,0,1-23.785,16.25Z"
                transform="translate(-1.99 -2)"
                fill="url(#linear-gradient)"
              />
            </svg>
          }
          name="Easy Access"
        />
        <WhyCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.852"
              height="63.852"
              viewBox="0 0 63.852 63.852"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#ed263d" />
                  <stop offset="1" stop-color="#77131f" />
                </linearGradient>
              </defs>
              <path
                id="Path_254"
                data-name="Path 254"
                d="M33.916,2A31.926,31.926,0,1,0,65.842,33.926,31.938,31.938,0,0,0,33.916,2ZM45.441,22.241A6.162,6.162,0,1,1,39.279,28.4,6.145,6.145,0,0,1,45.441,22.241ZM26.286,17.2a7.535,7.535,0,1,1-7.535,7.535A7.548,7.548,0,0,1,26.286,17.2Zm0,29.148V58.317A25.562,25.562,0,0,1,9.876,42.482c3.352-3.576,11.717-5.4,16.41-5.4a32.476,32.476,0,0,1,6.066.7C27.116,40.567,26.286,44.238,26.286,46.345Zm7.63,13.122a21.874,21.874,0,0,1-2.522-.128V46.345c0-4.533,9.386-6.8,14.047-6.8,3.416,0,9.322,1.245,12.26,3.671a25.6,25.6,0,0,1-23.785,16.25Z"
                transform="translate(-1.99 -2)"
                fill="url(#linear-gradient)"
              />
            </svg>
          }
          name="100% Information Security"
        />
        <WhyCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.852"
              height="63.852"
              viewBox="0 0 63.852 63.852"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#ed263d" />
                  <stop offset="1" stop-color="#77131f" />
                </linearGradient>
              </defs>
              <path
                id="Path_254"
                data-name="Path 254"
                d="M33.916,2A31.926,31.926,0,1,0,65.842,33.926,31.938,31.938,0,0,0,33.916,2ZM45.441,22.241A6.162,6.162,0,1,1,39.279,28.4,6.145,6.145,0,0,1,45.441,22.241ZM26.286,17.2a7.535,7.535,0,1,1-7.535,7.535A7.548,7.548,0,0,1,26.286,17.2Zm0,29.148V58.317A25.562,25.562,0,0,1,9.876,42.482c3.352-3.576,11.717-5.4,16.41-5.4a32.476,32.476,0,0,1,6.066.7C27.116,40.567,26.286,44.238,26.286,46.345Zm7.63,13.122a21.874,21.874,0,0,1-2.522-.128V46.345c0-4.533,9.386-6.8,14.047-6.8,3.416,0,9.322,1.245,12.26,3.671a25.6,25.6,0,0,1-23.785,16.25Z"
                transform="translate(-1.99 -2)"
                fill="url(#linear-gradient)"
              />
            </svg>
          }
          name="Expert Recommendation"
        />
      </div>
    </section>
  );
}
