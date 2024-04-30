import { createGlobalStyle } from "styled-components";
import { quizzes } from "../data/data.json";

const colors = ["#fff1e9", "#e0fdef", "#ebf0ff", "#f6e7ff"];
if (colors.length !== quizzes.length) throw new Error("number of quizzes does not match number of colors");
const colorMap = quizzes.map((quiz, index) => `--clr-${quiz.title.toLowerCase()}: ${colors[index]};`).join("\n");

const GlobalStyles = createGlobalStyle`
    :root {
    /* colors */
    /* shared */
    --clr-white: #ffffff;
    --clr-accent: #a729f5;
    --clr-correct: #26d782;
    --clr-wrong: #ee5454;
    /* light theme */
    --clr-lt-700: #ffffff;
    --clr-lt-600: #f4f6fa;
    --clr-lt-300: #abc1e1;
    /* dark theme */
    --clr-dt-700: #626c7f;
    --clr-dt-600: #3b4d66;
    --clr-dt-300: #313e51;
    /* shadows */
    --lt-shadow: 0 16px 40px 0 rgba(143, 160, 193, 14%);
    --dt-shadow: 0 16px 40px 0 rgba(49, 62, 81, 14%);
    /* icons */
    --i-size: 1.78125rem;
    ${colorMap}

    /* typography */
    /* families */
    --ff-primary: "Rubik", sans-serif;
    /* styles */
    --f-display: normal normal 500 9rem/100% var(--ff-primary);
    --f-heading-l-medium: normal normal 500 4rem/100% var(--ff-primary);
    --f-heading-l-regular: normal normal 400 4rem/100% var(--ff-primary);
    --f-heading-m: normal normal 500 2.25rem/100% var(--ff-primary);
    --f-heading-s: normal normal 500 1.75rem/100% var(--ff-primary);
    --f-body-m: normal normal 500 1.125rem/150% var(--ff-primary);
    --f-body-s: italic normal 400 0.75rem/150% var(--ff-primary);

    --f-mobile-heading-l-light: normal normal 300 2.5rem/100% var(--ff-primary);
    --f-mobile-heading-l-medium: normal normal 500 2.5rem/100% var(--ff-primary);
    --f-mobile-heading-m-regular-italic: italic normal 400 0.875rem/150% var(--ff-primary);
    
    --f-mobile-question: normal normal 500 1.25rem/120% var(--ff-primary);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--clr-lt-300);
    }

    .body-light {
        background: var(--clr-lt-600);
    }

    .body-dark {
        background: var(--clr-dt-300);
    }

`;

export default GlobalStyles;
