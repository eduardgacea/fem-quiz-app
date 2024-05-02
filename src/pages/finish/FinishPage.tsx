import MainContainer from "../../ui/MainContainer";
import Header from "../../ui/Header";
import FinishPageTitle from "./FinishPageTitle";
import ScoreCard from "./ScoreCard";

function FinishPage() {
    return (
        <MainContainer>
            <Header />
            <div>
                <FinishPageTitle />
                <ScoreCard />
            </div>
        </MainContainer>
    );
}

export default FinishPage;
