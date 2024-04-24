type QuizId = number;
type QuestionId = number;

export enum Status {
    Idle = "idle",
    Active = "active",
    Submitting = "submitting",
    Finished = "finished",
}

export type GameState = {
    status: Status;
    currentQuiz: QuizId | undefined;
    currentQuestion: QuestionId | undefined;
    score: number | undefined;
};
