import ThemeToggle from "../../ui/ThemeToggle";
import HomePageTitle from "./HomePageTitle";
import SubjectList from "./SubjectList";

import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem 0 1.5rem;
    justify-content: space-between;
    height: 100dvh;

    & > :last-child {
        display: flex;
        justify-content: flex-end;
    }
`;

const ContentWrapper = styled.div``;

function HomePage() {
    return (
        <MainContainer>
            <ContentWrapper>
                <HomePageTitle />
                <SubjectList />
            </ContentWrapper>
            <ThemeToggle />
        </MainContainer>
    );
}

export default HomePage;
