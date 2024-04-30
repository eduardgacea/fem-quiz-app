import MainContainer from "../../ui/MainContainer";
import QuizQuestion from "./QuizQuestion";
import ProgressBar from "./ProgressBar";
import AnswersList from "./AnswersList";
import Header from "../../ui/Header";

function QuizPage() {
    return (
        <MainContainer>
            <Header />
            <QuizQuestion />
            <ProgressBar />
            <AnswersList />
        </MainContainer>
    );
}

export default QuizPage;
