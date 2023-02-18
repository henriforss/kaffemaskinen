import { useState } from "react";
import "./FindCoffee.css";
import { findData } from "../lib/requests";

const FindCoffee = ({ setFoundCoffees }) => {
  const [coffee, setCoffee] = useState("");

  const handleClick = async () => {
    const response = await findData(coffee);
    setFoundCoffees(response);
    setCoffee("");
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="find-wrapper">
      <h2>
        <label htmlFor="find-coffee">Find coffee:</label>
      </h2>

      <input
        type="text"
        id="find-coffee"
        value={coffee}
        onInput={(e) => setCoffee(e.target.value)}
        placeholder="Search by name"
        onKeyDown={(e) => handleEnter(e)}
      />

      <button onClick={(e) => handleClick(e)}>Find</button>
    </div>
  );
};

export default FindCoffee;
