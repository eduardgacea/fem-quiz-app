import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import styled from "styled-components";

const ErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;

    & img {
        width: 32px;
        height: 32px;
    }
`;

const ErrorMessage = styled.span`
    color: var(--clr-wrong);
    font: var(--f-error);
`;

function Error() {
    const errorMessage = useSelector((state: RootState) => state.game.errorMessage);

    return (
        <ErrorWrapper>
            <div>
                <img src="icon-error.svg" />
            </div>
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorWrapper>
    );
}

export default Error;
