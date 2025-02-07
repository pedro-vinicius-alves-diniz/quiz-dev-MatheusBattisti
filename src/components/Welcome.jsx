/* eslint-disable no-unused-vars */
import Quiz from "../images/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quizContent";

import './Welcome.css'

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  
  
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Imagem de boas vindas ao Quiz" />
    </div>
  );
};
