import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const changeHandler = (event) => setInputText(event.target.value);
  const clickHandler = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => removeHandler(name.id)}>
      {name.text}
    </li>
  ));
  const removeHandler = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  return (
    <>
      <input value={inputText} onChange={changeHandler} />
      <button onClick={clickHandler}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
