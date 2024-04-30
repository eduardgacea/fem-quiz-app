export type QuizId = number;
export type QuestionId = number;

export enum Status {
    Idle = "idle",
    Active = "active",
    Submitting = "submitting",
    Finished = "finished",
}

export type GameState = {
    status: Status;
    currentQuizId: QuizId | undefined;
    currentQuestionId: QuestionId | undefined;
    score: number | undefined;
};
