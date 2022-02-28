import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 style={{ fontFamily: "cursive" }}>BABA DA DHABA</h1>
      <h2 style={{ fontFamily: "cursive" }}>
        ENJOY THE DELICIOUS FOOD FROM OUR DHABA
      </h2>
      <button
        style={{
          border: "2px solid rgb(26, 201, 157)",
          backgroundColor: "rgb(26, 201, 157)",
          borderRadius: "5px",
        }}
        onClick={() => {
          navigate("/Menu");
        }}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default Home;
