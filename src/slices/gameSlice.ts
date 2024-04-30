import { Status, GameState } from "../types/gameTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GameState = {
    status: Status.Idle,
    currentQuizId: undefined,
    currentQuestionId: undefined,
    score: undefined,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        choseQuiz: (state, action) => {
            state.status = Status.Active;
            state.currentQuizId = action.payload;
        },
    },
});

export const { choseQuiz } = gameSlice.actions;

export default gameSlice.reducer;
