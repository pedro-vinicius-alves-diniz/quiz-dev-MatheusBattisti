/* eslint-disable no-unused-vars */

import { Welcome } from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quizContent";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // EMBARALHAR AS PERGUNTAS
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
