import PeopleToFollow from "./PeopleToFollow.tsx";
import TrendsList from "./TrendsList.tsx";
import TopicsList from "./TopicsList.tsx";


function Hero() {
    return (
        <div>
            <PeopleToFollow/>
            <TrendsList/>
            <TopicsList/>
        </div>
    );
}

export default Hero;