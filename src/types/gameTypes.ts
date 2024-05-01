export type QuizId = number;
export type QuestionId = number;

export enum Status {
    Idle = "idle",
    Active = "active",
    Submitting = "submitting",
    Finished = "finished",
}

export type Quiz = {
    id: number | undefined;
    title: string | undefined;
    icon: string | undefined;
    questions: {
        id: number;
        question: string;
        options: string[];
        answer: string;
    }[];
};

export type GameState = {
    status: Status;
    quiz: Quiz;
    currentQuestionIndex: number | undefined;
    selectedOption: string | undefined;
    score: number | undefined;
};
