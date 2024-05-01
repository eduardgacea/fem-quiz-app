import styled from "styled-components";

type MainContainerProps = {
    children: React.ReactNode;
};

const StyledMainContainer = styled.div`
    padding: 2rem 1.5rem 1rem 1.5rem;
    height: 100dvh;
`;

function MainContainer({ children }: MainContainerProps) {
    return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
