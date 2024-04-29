import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

function ThemeListener() {
    const theme = useSelector((state: RootState) => state.theme.value);

    useEffect(() => {
        const body = document.querySelector("body")!;
        if (theme === "light") {
            body.classList.add("body-light");
            body.classList.remove("body-dark");
        } else {
            body.classList.remove("body-light");
            body.classList.add("body-dark");
        }
    }, [theme]);

    return null;
}

export default ThemeListener;
