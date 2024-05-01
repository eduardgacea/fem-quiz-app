import MainContainer from "../../ui/MainContainer";
import QuestionCount from "./QuestionCount";
import QuizQuestion from "./QuizQuestion";
import ProgressBar from "./ProgressBar";
import OptionsList from "./OptionsList";
import Header from "../../ui/Header";

function QuizPage() {
    return (
        <MainContainer>
            <Header />
            <div>
                <QuestionCount />
                <QuizQuestion />
            </div>
            <ProgressBar />
            <OptionsList />
        </MainContainer>
    );
}

export default QuizPage;
