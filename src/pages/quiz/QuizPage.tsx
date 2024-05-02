import { DESKTOP_BREAKPOINT } from "../../config/config";

import MainContainer from "../../ui/MainContainer";
import QuestionCount from "./QuestionCount";
import QuizQuestion from "./QuizQuestion";
import ProgressBar from "./ProgressBar";
import OptionsList from "./OptionsList";
import Header from "../../ui/Header";

import styled from "styled-components";

const DesktopLayout = styled.div`
    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        display: flex;
        gap: 8rem;

        & > :first-child {
            max-width: 465px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`;

function QuizPage() {
    return (
        <MainContainer>
            <Header />
            <DesktopLayout>
                <div>
                    <div>
                        <QuestionCount />
                        <QuizQuestion />
                    </div>
                    <ProgressBar />
                </div>
                <OptionsList />
            </DesktopLayout>
        </MainContainer>
    );
}

export default QuizPage;
