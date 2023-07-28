import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import purple_blure from "./image/purple_ball.svg";
import red_ball from "./image/red_ball.svg";
import red_ball_mini from "./image/red_ball_mini.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
      <div className="red_round"></div>
      <div className="violet_round"></div>
      <img className="purple_ball" src={purple_blure} alt="image" />
      <img className="red_ball" src={red_ball} alt="image" />
      <img className="red_ball_mini" src={red_ball_mini} alt="image" />
    </div>
  );
}

export default App;
