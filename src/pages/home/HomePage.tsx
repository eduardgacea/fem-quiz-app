import MainContainer from "../../ui/MainContainer";
import ThemeToggle from "../../ui/ThemeToggle";
import HomePageTitle from "./HomePageTitle";
import SubjectList from "./SubjectList";

import styled from "styled-components";

const ThemeToggleWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ContentWrapper = styled.div``;

function HomePage() {
    return (
        <MainContainer style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <ContentWrapper>
                <HomePageTitle />
                <SubjectList />
            </ContentWrapper>
            <ThemeToggleWrapper>
                <ThemeToggle />
            </ThemeToggleWrapper>
        </MainContainer>
    );
}

export default HomePage;
