import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { RootState } from "../redux/store";
import { Form } from "react-bootstrap";
import styled from "styled-components";

// prettier-ignore
const StyledSwitch = styled(Form)`
    & .form-check-input:checked,
    & .form-check-input {
        background-color: var(--clr-accent);
        border-color: var(--clr-accent);
    }

    & .form-switch .form-check-input {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }
`;

function ThemeToggle() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleTheme());

    return (
        <StyledSwitch>
            <Form.Switch type="switch" onClick={handleToggle} />
        </StyledSwitch>
    );
}

export default ThemeToggle;
