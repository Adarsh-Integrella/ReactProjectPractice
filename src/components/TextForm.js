import React, { useState } from "react";

function TextForm(props) {
  const [data, setData] = useState("Enter text");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    let upperCaseData = data.toUpperCase();
    setData(upperCaseData);
    props.showAlert("Text are in uppercase now! ", "success");
  };
  const clearText = (e) => {
    setData("");
    props.showAlert("Text cleared", "success");
  };
  const handleLowerClick = (e) => {
    let lowerCaseData = data.toLowerCase();
    setData(lowerCaseData);
    props.showAlert("Text are in lowercase now! ", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    props.showAlert("Text copied!", "success");
  };
  const captalizeFirst = (word) => {
    let lower = word.toLowerCase();
    return lower;
  };
  return (
    <>
      <div className="Container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="textArea"
          rows="13"
          value={data}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>Change to uppercase</button>
        <button onClick={handleLowerClick}>Change to lowercase</button>
        <button onClick={handleCopy}>Copy text</button>
        <button onClick={clearText}>Clear text</button>
      </div>
      <div className="Container">
        <h2>Text summary</h2>
        <p>
          Total words : {data.split(" ").length} and total characters:{" "}
          {data.length}
        </p>
      </div>
    </>
  );
}

export default TextForm;
