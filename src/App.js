//import logo from './logo.svg';
//import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

//const App = () => {
//  return (
//    <div>
//      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//    </div>
//  );
//};

export default App;
