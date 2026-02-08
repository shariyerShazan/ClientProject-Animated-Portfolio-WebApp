// import React from 'react'
import AboutTechTalent from './_components/AboutTechTalent'
import { ConstellationBackground } from '@/components/ui/ConstellationBackground'
import AboutCrypto from './_components/AboutCrypto'
import AboutHumanAi from './_components/AboutHumanAi'
import { useEffect } from 'react'


const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={70}
          nodeColor="rgba(111, 222, 247, 0.5)"
          lineColor="rgba(47, 139, 221, 0.1)"
          connectionDistance={150}
        />
      </div>
      <AboutTechTalent />
      <AboutHumanAi />
      <AboutCrypto />
    </div>
  );
}

export default About
