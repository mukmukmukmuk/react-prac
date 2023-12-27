import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  const changeHandler = useCallback(
    (event) => setNumber(event.target.value),
    []
  );
  const insertHandler = useCallback(
    (event) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [list, number]
  );
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={changeHandler} ref={inputEl} />
      <button onClick={insertHandler}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
