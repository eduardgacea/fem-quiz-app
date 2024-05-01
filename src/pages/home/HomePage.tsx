import MainContainer from "../../ui/MainContainer";
import ThemeToggle from "../../ui/ThemeToggle";
import HomePageTitle from "./HomePageTitle";
import SubjectList from "./SubjectList";

import styled from "styled-components";

const ThemeToggleWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.4375rem;
`;

const ContentWrapper = styled.div``;

const mainContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};

function HomePage() {
    return (
        <MainContainer style={mainContainerStyle}>
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
