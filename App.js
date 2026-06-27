import { useState } from "react";
import "./App.css";

function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);

  const checkNumber = () => {
    const num = Number(guess);

    if (!num) {
      setMessage("⛔ Enter a number!");
    } else if (num === secretNumber) {
      setMessage("🎉 Correct Number!");
      if (score > highScore) {
        setHighScore(score);
      }
    } else if (num > secretNumber) {
      setMessage("📈 Too High!");
      setScore(score - 1);
    } else {
      setMessage("📉 Too Low!");
      setScore(score - 1);
    }
  };

  const again = () => {
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
    setGuess("");
    setScore(20);
    setMessage("Start guessing...");
  };

  return (
    <div className="container">
      <button className="again" onClick={again}>
        Again!
      </button>

      <p className="range">(Between 1 and 20)</p>

      <h1>Guess My Number!</h1>

      <div className="number">?</div>

      <div className="main">
        <div className="left">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />

          <button onClick={checkNumber}>Check!</button>
        </div>

        <div className="right">
          <p>{message}</p>
          <p>💯 Score: {score}</p>
          <p>🥇 Highscore: {highScore}</p>
        </div>
      </div>
    </div>
  );
}

export default App;