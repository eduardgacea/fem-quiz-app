import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type HeaderProps = {
    $theme: Theme;
};

const Header = styled.header<HeaderProps>`
    h1,
    span {
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }

    h1 {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font: var(--f-mobile-heading-l-light);

        & > :last-child {
            font: var(--f-mobile-heading-l-medium);
        }
    }

    h3 {
        font: var(--f-mobile-heading-m-regular-italic);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-600)" : "var(--clr-lt-300)")};
    }
`;

function HomePageTitle() {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <Header $theme={theme}>
            <h1>
                <span>Welcome to the</span>
                <span>Frontend Quiz!</span>
            </h1>
            <h3>Pick a subject to get started.</h3>
        </Header>
    );
}

export default HomePageTitle;
