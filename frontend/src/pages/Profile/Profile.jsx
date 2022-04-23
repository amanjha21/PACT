import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./Profile.css";
import { getUserByEmail } from "../../api/userData";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const email = localStorage.getItem("email");

  const loadData = async () => {
    const data = await getUserByEmail(email);
    setUserData(data);
  };

  useEffect(() => {
    loadData();
  }, [email]);

  if (!userData) {
    return <div>No such user found</div>;
  }

  return (
    <>
      <TopBar />
      <div className="profile-card">
        <div className="profile-card__img">
          <img
            className="profile__img"
            src={userData.image}
            alt="profile card"
          />
        </div>
        <div className="profile-card__cnt">
          <div className="profile-card__name">{userData.name}</div>
          <div className="profile-card__email">{userData.email}</div>
          <div className="profile-card__points">
            <strong>Points:{userData.points}</strong>
          </div>
        </div>
        <div className="profile-card__ctr">
          <button className="profile-card__btn">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
