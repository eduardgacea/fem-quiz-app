import ResizeListener from "./components/ResizeListener";
import GlobalStyles from "./styles/GlobalStyles";
import ThemeToggle from "./ui/ThemeToggle";
import Backdrop from "./ui/Backdrop";
import Option from "./ui/Option";

import "bootstrap/dist/css/bootstrap.min.css";

import { quizzes } from "./data/data.json";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                height: "100dvh",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 24px",
            }}
        >
            <GlobalStyles />
            <ResizeListener />
            <Backdrop />
            <ThemeToggle />
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
                {quizzes.map(quiz => (
                    <Option key={quiz.id} type="subject" icon={`icon-${quiz.title.toLowerCase()}.svg`}>
                        {quiz.title}
                    </Option>
                ))}
            </div>
        </div>
    );
}

export default App;
