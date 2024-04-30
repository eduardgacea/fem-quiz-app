import { choseQuiz } from "../../slices/gameSlice";
import { quizzes } from "../../data/data.json";
import { useDispatch } from "react-redux";

import Option from "../../ui/Option";

import styled from "styled-components";

const List = styled.ul`
    margin: 2.5rem 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

function SubjectList() {
    const dispatch = useDispatch();

    const handleChoseQuiz = (id: number) => dispatch(choseQuiz(id));

    return (
        <List>
            {quizzes.map(quiz => (
                <Option
                    key={quiz.id}
                    type="subject"
                    icon={`icon-${quiz.title.toLowerCase()}.svg`}
                    onClick={() => handleChoseQuiz(quiz.id)}
                >
                    {quiz.title}
                </Option>
            ))}
        </List>
    );
}

export default SubjectList;
