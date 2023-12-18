//import { Component } from "react";
import { useState } from "react";

const EventPractice = () => {
  //const [username, setUsername] = useState("");
  //const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //const handleChangeUsername = (e) => setUsername(e.target.value);
  //const handleChangeMessage = (e) => setMessage(e.target.value);
  const handleClick = () => {
    alert(form.username + ": " + form.message);
    setForm({
      username: "",
      message: "",
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해 보세요~"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요~"
        value={form.message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
// class EventPractice extends Component {
//   state = {
//     message: "",
//     username: "",
//   };
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({ message: "", username: "" });
//   };
//   handleKeyDown = (e) => {
//     if (e.key === "Enter") this.handleClick();
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="아무거나 입력해 보세요~"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요~"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyDown={this.handleKeyDown}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
