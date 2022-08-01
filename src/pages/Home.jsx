import { Section } from 'components/Section';
import { LandingSection } from 'components/LandingSection';
import React from 'react';
import { ExpEduItem } from 'components/ExpEduItem';
import { ProjectCard } from 'components/ProjectCard';
import { SkillBar } from 'components/SkillBar';
import { CnCItem } from 'components/CnCItem';
import { SiJavascript, SiUnity } from 'react-icons/si';
import { TbAugmentedReality } from 'react-icons/tb';
import { FiAtSign } from 'react-icons/fi';
import { FaCode, FaRobot } from 'react-icons/fa';

const Home = () => (
  <>
    <LandingSection
      name='Stiven Guerra'
      title='Hey, I’m just a Software Developer'
      mail='natogourmet@gmail.com'
      imageUrl='https://i.imgur.com/CqVd5xX.jpeg'
    />
    <Section title='About Me'>
      <p>
        I am a Systems Engineering student from the University of Antioquia. A
        quick and self-directed learner, a great team player who always wants to
        help people and also a good team leader who’s able to understand the
        task’s requirements and how to obtain them through organized and focused
        effort. I posses a huge willingness to learn whatever is necessary to
        get a job done with an eager to get new opportunities to prove my
        capabilities as a software developer, acquire new experience and
        contribute to the general development of a company and my own.
      </p>
    </Section>
    <Section title='Experience'>
      <div className='exp-container flex gap-10 justify-center md:justify-start flex-wrap md:overflow-scroll md:flex-nowrap'>
        <ExpEduItem
          companyName='Astound Commerce'
          jobPos='Software Engineer'
          time='May 2021 - Current'
          desc='I’ve acquired knowledge about industrial process and professional applications of software development.'
        />
        <ExpEduItem
          companyName='Prosecto'
          jobPos='FrontEnd Dev'
          time='Feb 2021 - Aug 2021'
          desc='I learned about software infrasestructure and data bases management, acquired knowledge on project definition and management.'
        />
        <ExpEduItem
          companyName='Udea@'
          jobPos='Game Dev'
          time='Mar 2020 - Aug 202'
          desc='Developed teamwork skills, time management, agile methodologies and team leadership.'
        />
        <ExpEduItem
          companyName='Ingeni@'
          jobPos='Thematic Expert'
          time='Dec 2019 - Jun 2021'
          desc='Acquired teaching and communication skills, documentation management and soft skills.'
        />
      </div>
    </Section>
    <Section title='Education'>
      <div className='exp-container flex gap-10 justify-center md:justify-start flex-wrap md:overflow-scroll md:flex-nowrap'>
        <ExpEduItem
          companyName='Software Engineering'
          jobPos='UdeA'
          time='2019 - Present'
          desc='Acquired passion and eager to work. Developed soft skills and social skills.'
        />
        <ExpEduItem
          companyName='Systems Technician'
          jobPos='SENA'
          time='Feb 2015 - Dec 2016'
          desc='Got to know about web development and developed first webpages with HTML, CSS and JS.'
        />
        <ExpEduItem
          companyName='Robotics Seminar'
          jobPos='Pygmalion'
          time='2015'
          desc='Learned about logic programming and basic mechanics. Got into an international robotics tournament in USA.'
        />
        <ExpEduItem
          companyName='High School'
          jobPos='Marie Poussepin'
          time='2016'
          desc='Got to be competitive and knowledge hungry, acquired passion for art, technology and science.'
        />
      </div>
    </Section>
    <Section title='Projects'>
      <div className='exp-container flex gap-10 justify-center md:justify-start flex-wrap md:overflow-x-scroll md:flex-nowrap'>
        <ProjectCard
          icon={<TbAugmentedReality />}
          projectName='Immersive Stories'
          projectContent='VR \& AR Application'
          desc='Project developed as and University Project in which we developed a virtual and augmented reality application to narrate and show a story.'
        />
        <ProjectCard
          icon={<SiUnity />}
          projectName='Unity Portfolio'
          projectContent='Unity Projects'
          desc='Lots of projects developed in Unity which I’ve made throughout 3 years working with this platform. '
        />
        <ProjectCard
          icon={<SiJavascript />}
          projectName='JS30'
          projectContent='JavaScript 30 Challenge'
          desc='A challenge created by WesBos in which I practiced a JS concept or feature by creating a page every day for 30 days.'
        />
        <ProjectCard
          icon={<FiAtSign />}
          projectName='Ingeni@'
          projectContent='Thematic Expert'
          desc='Description about what i’ve done in this company and how i growed inside of it.'
        />
      </div>
    </Section>
    <Section title='Skills'>
      <div className='exp-container flex gap-10 flex-wrap justify-between'>
        <SkillBar skillName='JavaScript' percentage={80} />
        <SkillBar skillName='Logic' percentage={90} />
        <SkillBar skillName='Angular' percentage={60} />
        <SkillBar skillName='Team player and leader' percentage={80} />
        <SkillBar skillName='English' percentage={90} />
        <SkillBar skillName='Spanish' percentage={100} />
      </div>
    </Section>
    <Section title='Courses and Certifications'>
      <div className='exp-container flex gap-10 justify-center md:justify-start flex-wrap md:overflow-x-scroll md:flex-nowrap'>
        <CnCItem cName='Web Bootcamp' icon={<FaCode />} />
        <CnCItem cName='JS30' icon={<SiJavascript />} />
        <CnCItem cName='Unity Seminar' icon={<SiUnity />} />
        <CnCItem cName='Robotics' icon={<FaRobot />} />
      </div>
    </Section>
  </>
);

export default Home;
