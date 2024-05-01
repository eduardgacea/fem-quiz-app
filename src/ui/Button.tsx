import styled from "styled-components";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledButton = styled.button`
    font-family: var(--ff-primary);
    background-color: var(--clr-accent);
    width: 100%;
    outline: none;
    border: none;
    padding: 1.1875rem 0.75rem;
    color: var(--clr-white);
    border-radius: 0.75rem;
    cursor: pointer;
    font: var(--f-button);
`;

function Button({ children, onClick }: ButtonProps) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
