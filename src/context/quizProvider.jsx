// /* eslint-disable no-unused-vars */

import { QuizContext } from "./quizContent";
import { useReducer } from "react";
import PropTypes from "prop-types";

import data from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initiaState = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
  score: 0,
  answerSelected: false
};

const quizReducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS": {
      const reorderedQuestion = state.data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestion,
      };
    }

    case "CHANGE_QUESTION": {
      let nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!data[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        answerSelected: false,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      };
    }

    case "NEW_GAME":
      return initiaState;

    case "CHECK_ANSWER":
      if(state.answerSelected) return state

      console.log(action.payload)
      const answer = action.payload.answer
      const option = action.payload.option
      let correctAnswer = 0

      if(answer === option) correctAnswer = 1

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      }

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initiaState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
