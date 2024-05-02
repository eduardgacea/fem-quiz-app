import MainContainer from "../../ui/MainContainer";
import FinishPageTitle from "./FinishPageTitle";
import Header from "../../ui/Header";
import Score from "./Score";

function FinishPage() {
    return (
        <MainContainer>
            <Header />
            <div>
                <FinishPageTitle />
                <Score />
            </div>
        </MainContainer>
    );
}

export default FinishPage;
