import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./CreateEventPage.css";

const CreateEventPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [target, setTarget] = useState("");
  const [currentFund, setCurrentFund] = useState("");
  const [document, setDocument] = useState("");

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", desc);
    data.append("contactEmail", contactEmail);
    data.append("contactPhone", contactPhone);
    data.append("pinCode", pinCode);
    data.append("latitude", lat);
    data.append("longitude", lng);
    data.append("target", target);
    data.append("currentFund", currentFund);
    const newImageList = [image, document];
    console.log(newImageList);
  };

  const imageInputChangeHandler = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    e.target.value = null;
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const documentInputChangeHandler = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    e.target.value = null;
    reader.onloadend = () => {
      setDocument(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <TopBar />
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          className="formElement"
        />
        <textarea
          type="text"
          placeholder="Enter description"
          onChange={(e) => setDesc(e.target.value)}
          className="formElement"
        />
        <input
          type="file"
          placeholder="Image related to event"
          onChange={imageInputChangeHandler}
          className="formElement"
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setContactEmail(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your mobile number"
          onChange={(e) => setContactPhone(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter the pincode"
          onChange={(e) => setPinCode(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your target fund"
          onChange={(e) => setTarget(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your current fund"
          onChange={(e) => setCurrentFund(e.target.value)}
          className="formElement"
        />
        <input
          type="file"
          placeholder="Please upload a document for proof"
          onChange={documentInputChangeHandler}
          className="formElement"
        />
        <button type="submit" onClick={handleSubmit} className="form-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateEventPage;
