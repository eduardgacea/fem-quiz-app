import styled from "styled-components";

type MainContainerProps = {
    children: React.ReactNode;
};

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem 1rem 1.5rem;
    justify-content: space-between;
    height: 100dvh;
`;

function MainContainer({ children }: MainContainerProps) {
    return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
