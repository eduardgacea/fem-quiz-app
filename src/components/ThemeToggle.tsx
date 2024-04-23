import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";

import type { RootState } from "../redux/store";

function ThemeToggle() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(toggleTheme())}>{theme}</button>;
}

export default ThemeToggle;
