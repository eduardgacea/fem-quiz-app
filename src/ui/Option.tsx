import styled from "styled-components";

type OptionProps = {
    children: string;
    type: "subject" | "answer";
    icon?: string;
};

type IconContainerProps = {
    $backgroundColor: string;
};

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--clr-white);
    gap: 1rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
`;

const IconContainer = styled.div<IconContainerProps>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$backgroundColor};
    border-radius: 0.375rem;

    & > img {
        width: var(--i-size);
    }
`;

const TextContainer = styled.div`
    font: var(--f-body-m);
`;

function Option({ children, type, icon }: OptionProps) {
    const backgroundColor = `var(--clr-${children.toLowerCase()})`;

    return (
        <MainContainer>
            <IconContainer $backgroundColor={backgroundColor}>
                {type === "subject" ? <img src={icon} alt="quiz name" /> : icon}
            </IconContainer>
            <TextContainer>{children}</TextContainer>
        </MainContainer>
    );
}

export default Option;
