import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctAnswer = "love";

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === correctAnswer) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Oops! That's not quite right. Try again.");
    }
  };

  return (
    <div className="App">
      <div className="card">
        {!unlocked ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1>🎉 Solve the Riddle to Unlock Your Birthday Surprise!</h1>
            <p>
              I come in many forms, yet hold no shape,<br />
              I’m something you can give or take.<br />
              I’m often shared with words and tone,<br />
              And when I’m true, you’re not alone.<br /><br />
              <em>What am I?</em>
            </p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p className="error">{error}</p>}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>🎁 Unlocked!</h2>
            <p>Correct! The answer is <strong>LOVE</strong>.</p>
            <p>
              Your gift: <a href="https://www.amazon.com/gift-card" target="_blank" rel="noopener noreferrer">$25 Amazon Gift Card</a>
            </p>
            <p className="enjoy">Enjoy your special day 💖</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
