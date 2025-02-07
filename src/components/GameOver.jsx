import { useContext } from "react";
import { QuizContext } from "../context/quizContent";

import "./GameOver.css";
import WellDone from "../images/welldone.svg";

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game Over</h2>
      <p>Você acertou {quizState.score} de {quizState.data.length}{" "} perguntas</p>
      <img src={WellDone} alt="Imagem de fim de jogo" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
}

export default GameOver;
