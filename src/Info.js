import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
  }, [name]);
  const changNameHandler = (event) => {
    setName(event.target.value);
  };
  const changNicknameHandler = (event) => {
    setNickname(event.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={changNameHandler} />
        <input value={nickname} onChange={changNicknameHandler} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
