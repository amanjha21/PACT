import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-card">
        <div className="landing-card__head">
          <div className="landing-txt">Kalyan</div>
          <div className="landing-desc">
            This application allows the user to see all the details of the
            nearby social cause funding events and can also donate any amount
            he/she desires to the same. The user will also get goodies and perks
            when they donate over a certain amount. Moreover a user can also
            create a fundraiser for any cause for others to donate after
            providing all the necessary details such as name, donation details,
            target amount and most importantly some verification document
            stating that their fundraiser is not a fraud for other users to see.
          </div>

          <div className="landing-card__ctr">
            <button
              className="landing-card__btn"
              onClick={() =>
                (window.location.href =
                  "https://pcon-kalyan.herokuapp.com/auth/google")
              }
            >
              Login
            </button>
          </div>

          <section className="card-area">
            <section className="card-section">
              <div className="card">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--create">
                    <h2 className="card-front__heading">
                      Create Your Fundraiser
                    </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--create">
                      Kalyan helps you quickly create a fundraiser and tell your
                      story.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="card-section">
              <div className="card">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--donate">
                    <h2 className="card-front__heading">
                      Donate to the fundraiser
                    </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--donate">
                      You can help with a donation of whatever amount you prefer
                      for the social cause.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="card-section">
              <div className="card">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--accept">
                    <h2 className="card-front__heading">
                      Easily accept donations
                    </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--accept">
                      The funds raised can be directly transfer to your bank
                      account without any hassle.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
