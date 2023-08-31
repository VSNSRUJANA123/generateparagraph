import { useState } from "react";
import generateData from "./generateData";
import "./generate.css";

const Generate = () => {
  let [number, setNumber] = useState(0);
  let [para, setPara] = useState(generateData);
  let [input, setInput] = useState(0);
  const generateBtn = () => {
    if (input > 10) {
      let random = Math.ceil(Math.random() * generateData.length);
      setNumber(random);
      return;
    }
    setNumber(input);
  };
  return (
    <section className="section">
      <h1>TIRED OF BORING LOERM IPSUM?</h1>
      <p className="side-head">
        Paragraph:
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="number"
          placeholder="0"
        />
        <button onClick={generateBtn}>Generate</button>
      </p>
      <div className="generateDiv">
        {number < 0 && <p>{para.slice(0, 1)}</p>}
        {number > 0 && number < 11 && (
          <div>
            {para.slice(0, number).map((element) => {
              return <p className="generatePara">{element}</p>;
            })}
          </div>
        )}
        {number > 10 && (
          <div>
            {para.slice(0, number).map((element) => {
              return <p className="generatePara">{element}</p>;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default Generate;
