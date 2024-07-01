import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  const [exploreHover, setExploreHover] = useState(false);
  const [activityHover, setActivityHover] = useState(false);
  const [eventHover, setEventHover] = useState(false);
  const [seasonHover, setSeasonHover] = useState(false);

  return (
    <>
      <div
        id="about-us"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1 className="about-us-heading"></h1>
        <div className="about-us-block">
          <div
            className="about-us-community"
            onMouseOver={() => setExploreHover(true)}
            onMouseLeave={() => setExploreHover(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                style={{
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  width: "3rem",
                  background: "#8064A2",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z"
                  fill="white"
                />
              </svg>

              <div className="about-us-blk-text">People</div>
            </div>
            <p className="about-us-blk-para">
              An Individual or Organization. Teacher, Coach, Professional or
              Online Seller. Company, Business or Association.
            </p>
            <Button
              className="bbb"
              style={{
                float: "left",
                width: "122px",
                borderRadius: "8px",
                marginLeft: "3%",
                background: "#FFFFFF",
                color: "#8064A2",
                border: "2px solid #8064A2",
              }}
            >
              Connect
            </Button>
          </div>
          <div
            className="about-us-product"
            onMouseOver={() => setActivityHover(true)}
            onMouseLeave={() => setActivityHover(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg
                width="24"
                height="34"
                viewBox="0 0 24 34"
                fill="none"
                style={{
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  width: "3rem",
                  background: "#77933C",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 0.333252C5.54992 0.333252 0.333252 5.54992 0.333252 11.9999C0.333252 20.7499 11.9999 33.6666 11.9999 33.6666C11.9999 33.6666 23.6666 20.7499 23.6666 11.9999C23.6666 5.54992 18.4499 0.333252 11.9999 0.333252ZM11.9999 16.1666C9.69992 16.1666 7.83325 14.2999 7.83325 11.9999C7.83325 9.69992 9.69992 7.83325 11.9999 7.83325C14.2999 7.83325 16.1666 9.69992 16.1666 11.9999C16.1666 14.2999 14.2999 16.1666 11.9999 16.1666Z"
                  fill="white"
                />
              </svg>

              <div className="about-us-blk-text">Place</div>
            </div>
            <p className="about-us-blk-para">
              An Address. Classroom, Shop, Performance or Event Venue, Sports
              Arena, Play Area, Studio, School or Campus.
            </p>
            <Button
              className="bbb"
              style={{
                float: "left",
                width: "122px",
                borderRadius: "8px",
                marginLeft: "3%",
                background: "#FFFFFF",
                color: "#8064A2",
                border: "2px solid #8064A2",
              }}
            >
              Meet up
            </Button>
          </div>
        </div>
        <div className="about-us-block">
          <div
            className="about-us-location"
            onMouseOver={() => setEventHover(true)}
            onMouseLeave={() => setEventHover(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  width: "3rem",
                  background: "#C0504D",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.5335 12.0832V12.2998L34.1002 21.2998C33.8126 22.3681 33.1789 23.3107 32.2982 23.9803C31.4176 24.6498 30.3398 25.0084 29.2335 24.9998H16.4835C15.2319 25.0049 14.0238 24.5403 13.098 23.6979C12.1723 22.8555 11.5962 21.6964 11.4835 20.4498L10.4002 8.18317C10.3626 7.76763 10.1706 7.38129 9.86203 7.10048C9.55344 6.81967 9.15075 6.66481 8.73353 6.6665H5.11686C4.67483 6.6665 4.25091 6.49091 3.93835 6.17835C3.62579 5.86579 3.4502 5.44186 3.4502 4.99984C3.4502 4.55781 3.62579 4.13389 3.93835 3.82133C4.25091 3.50877 4.67483 3.33317 5.11686 3.33317H8.73353C9.98521 3.32809 11.1933 3.79267 12.119 4.6351C13.0448 5.47754 13.6209 6.63656 13.7335 7.88317V8.33317H33.2169C33.692 8.32944 34.1624 8.42733 34.5966 8.62027C35.0308 8.81321 35.4187 9.09674 35.7344 9.45186C36.05 9.80697 36.2861 10.2255 36.4268 10.6793C36.5675 11.1331 36.6096 11.6118 36.5502 12.0832H36.5335Z"
                  fill="white"
                />
                <path
                  d="M15.1169 36.6667C17.418 36.6667 19.2835 34.8012 19.2835 32.5C19.2835 30.1989 17.418 28.3334 15.1169 28.3334C12.8157 28.3334 10.9502 30.1989 10.9502 32.5C10.9502 34.8012 12.8157 36.6667 15.1169 36.6667Z"
                  fill="white"
                />
                <path
                  d="M28.4501 36.6667C30.7513 36.6667 32.6168 34.8012 32.6168 32.5C32.6168 30.1989 30.7513 28.3334 28.4501 28.3334C26.1489 28.3334 24.2834 30.1989 24.2834 32.5C24.2834 34.8012 26.1489 36.6667 28.4501 36.6667Z"
                  fill="white"
                />
              </svg>

              <div className="about-us-blk-text">Product</div>
            </div>
            <p className="about-us-blk-para">
              An Item that you can Book, Buy or Rent. Appointment, Ticket, or
              Voucher. Equipment, Instrument or Activity Kit.
            </p>
            <Button
              className="bbb"
              style={{
                float: "left",
                width: "122px",
                borderRadius: "8px",
                marginLeft: "3%",
                background: "#FFFFFF",
                color: "#8064A2",
                border: "2px solid #8064A2",
              }}
            >
              Get it
            </Button>
          </div>
          <div
            className="about-us-event"
            onMouseOver={() => setSeasonHover(true)}
            onMouseLeave={() => setSeasonHover(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  width: "3rem",
                  background: "#0096C8",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_566)">
                  <rect x="8" y="13" width="24" height="19" fill="white" />
                  <path
                    d="M26.6667 17.5498C26.1833 17.0665 25.3833 17.0665 24.9 17.5498L17.65 24.7998L15 22.1498C14.5167 21.6665 13.7167 21.6665 13.2333 22.1498C12.75 22.6332 12.75 23.4332 13.2333 23.9165L16.4667 27.1498C17.1167 27.7998 18.1667 27.7998 18.8167 27.1498L26.65 19.3165C27.15 18.8332 27.15 18.0332 26.6667 17.5498ZM31.6667 4.99984H30V3.33317C30 2.4165 29.25 1.6665 28.3333 1.6665C27.4167 1.6665 26.6667 2.4165 26.6667 3.33317V4.99984H13.3333V3.33317C13.3333 2.4165 12.5833 1.6665 11.6667 1.6665C10.75 1.6665 10 2.4165 10 3.33317V4.99984H8.33333C6.48333 4.99984 5.01667 6.49984 5.01667 8.33317L5 31.6665C5 33.4998 6.48333 34.9998 8.33333 34.9998H31.6667C33.5 34.9998 35 33.4998 35 31.6665V8.33317C35 6.49984 33.5 4.99984 31.6667 4.99984ZM30 31.6665H10C9.08333 31.6665 8.33333 30.9165 8.33333 29.9998V13.3332H31.6667V29.9998C31.6667 30.9165 30.9167 31.6665 30 31.6665Z"
                    fill="white"
                  />
                  <path
                    d="M26.7958 17.3625C26.3125 16.8792 25.5125 16.8792 25.0292 17.3625L17.7792 24.6125L15.1292 21.9625C14.6458 21.4792 13.8458 21.4792 13.3625 21.9625C12.8792 22.4458 12.8792 23.2458 13.3625 23.7292L16.5958 26.9625C17.2458 27.6125 18.2958 27.6125 18.9458 26.9625L26.7792 19.1292C27.2792 18.6458 27.2792 17.8458 26.7958 17.3625Z"
                    fill="#0096C8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_566">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="about-us-blk-text">Program</div>
            </div>
            <p className="about-us-blk-para">
              An Event with Venue and Date. Meetup, Workshop or Webinar.
              Exhibition, Performance or Competition.
            </p>
            <Button
              className="bbb"
              style={{
                float: "left",
                width: "122px",
                borderRadius: "8px",
                marginLeft: "3%",
                background: "#FFFFFF",
                color: "#8064A2",
                border: "2px solid #8064A2",
              }}
            >
              Attend
            </Button>
          </div>
        </div>
      </div>
      <div className="add"></div>
    </>
  );
};

export default About;
