import { Status, GameState } from "../types/gameTypes";
import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../data/data.json";

const initialState: GameState = {
    status: Status.Idle,
    quiz: {
        id: undefined,
        title: undefined,
        icon: undefined,
        questions: [],
    },
    currentQuestionIndex: undefined,
    score: undefined,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        choseQuiz: (state, action) => {
            state.status = Status.Active;
            state.quiz = quizzes.find(quiz => quiz.id === action.payload)!;
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
    },
});

export const { choseQuiz } = gameSlice.actions;

export default gameSlice.reducer;
