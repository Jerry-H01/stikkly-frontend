import React from "react";
import UserStoriesHero from "./hero";
import Trusted from "../../../components/landing components/trusted";
import UserStories from "./user-stories";
import Bounty from "./bounty";


const UserStoriesPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <UserStoriesHero />
            <Trusted />
            <UserStories />
            <Bounty />
        </div>
    );
};


export default UserStoriesPage;
