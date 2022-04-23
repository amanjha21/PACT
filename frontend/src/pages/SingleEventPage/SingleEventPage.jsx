import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./SingleEventPage.css";

const SingleEventPage = () => {
  return (
    <>
      <TopBar />
      <div className="singleEventContainer">
        <div className="title">Magnus Carlsen</div>
        <div className="single-event-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
            className="event-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
            className="event-image"
          />
        </div>

        <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          corporis facilis suscipit harum quaerat autem minima, temporibus iusto
          vero voluptas. Cumque, dignissimos veniam. Illum cum, deserunt
          voluptatum recusandae excepturi nihil?
        </div>
        <div class="progress">
          <div class="progress--endgoal">100,000INR</div>
          <div class="progress--bar">
            <div class="complete"></div>
          </div>
          <div className="progress--txt">
            <div class="progress--goal">
              <span class="progress-number">58%</span>
              <span class="progress-label">Funded</span>
            </div>
            <div class="progress--goal">
              <span class="progress-number">58,420INR</span>
              <span class="progress-label">Raised</span>
            </div>
          </div>
        </div>
        <div className="progress-contact-details">
          <div className="contactDetails">
            For more information contact us at:
          </div>
          <div className="phoneNumber">9926377907</div>
          <div className="email">lakshya0809bang@gmail.com</div>
        </div>
        <button className="progress-btn progress-btn-pay">Pay Now</button>
        <button className="progress-btn progress-btn-delete">
          Delete Event
        </button>
      </div>
    </>
  );
};

export default SingleEventPage;
