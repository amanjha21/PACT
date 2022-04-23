import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./SingleEventPage.css";
import { fetchEventById, deleteEvent } from "../../api/eventData";

const SingleEventPage = () => {
  const [eventData, setEventData] = useState(null);
  const id = window.location.pathname.split("/").pop();

  const loadData = async () => {
    const { data } = await fetchEventById(id);
    setEventData(data);
    console.log(eventData);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  if (!eventData) {
    return <div>No such fundraiser found.</div>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteEvent(id);
  };

  return (
    <>
      <TopBar />
      <div className="singleEventContainer">
        <div className="title">{eventData.title}</div>
        <div className="single-event-image">
          <img src={eventData.image} className="event-image" />
          <img src={eventData.document} className="event-image" />
        </div>

        <div className="description">{eventData.description}</div>
        <div className="progress">
          <div className="progress--endgoal">INR {eventData.target}</div>
          <div className="progress--bar">
            <div
              className="complete"
              style={{
                width: `calc(${eventData.currentFund / eventData.target}%)`,
              }}
            ></div>
          </div>
          <div className="progress--txt">
            <div className="progress--goal">
              <span className="progress-number">
                {(eventData.currentFund / eventData.target) * 100}%{" "}
              </span>
              <span className="progress-label">Funded</span>
            </div>
            <div className="progress--goal">
              <span className="progress-number">
                INR {eventData.currentFund}
              </span>
              <span className="progress-label">Raised</span>
            </div>
          </div>
        </div>
        <div className="progress-contact-details">
          <div className="contactDetails">
            For more information contact us at:
          </div>
          <div className="phoneNumber">{eventData.contactPhone}</div>
          <div className="email">{eventData.contactEmail}</div>
        </div>
        <button className="progress-btn progress-btn-pay">Pay Now</button>
        {eventData.userEmail === eventData.contactEmail && (
          <button
            className="progress-btn progress-btn-delete"
            onClick={handleDelete}
          >
            Delete Event
          </button>
        )}
      </div>
    </>
  );
};

export default SingleEventPage;
