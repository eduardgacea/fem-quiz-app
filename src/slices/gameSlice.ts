import { Status, GameState } from "../types/gameTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GameState = {
    status: Status.Idle,
    currentQuiz: undefined,
    currentQuestion: undefined,
    score: undefined,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
});

export default gameSlice.reducer;
