// import React from 'react'

import HomeBanner from "./_components/HomeBanner";
import HomeMeetExecution from "./_components/HomeMeetExecution";
import HomePageEmailUs from "./_components/HomePageEmailUs";
import HomeTalentSolution from "./_components/HomeTalentSolution";
import HomeTeamPerson from "./_components/HomeTeamPerson";
import HomeTomorrowTech from "./_components/HomeTomorrowTech";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeTalentSolution />
      <HomeMeetExecution />
      <HomeTomorrowTech />
      <HomeTeamPerson />
      <HomePageEmailUs />
    </div>
  );
};

export default Home;
