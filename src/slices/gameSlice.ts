import { Status, GameState } from "../types/gameTypes";
import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../data/data.json";

const initialState: GameState = {
    status: Status.Idle,
    currentQuiz: undefined,
    currentQuestion: undefined,
    score: undefined,
    quizzes: quizzes.map(quiz => quiz.title.toLowerCase()),
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
});

export default gameSlice.reducer;
