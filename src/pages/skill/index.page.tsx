import type { NextPage } from 'next';
import Head from 'next/head';
import {
  SiCypress,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJest,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNextdotjs,
} from 'react-icons/si';

import { Main } from './styles';

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main data-testid="page-skill">
        <h2 data-testid="title-skill">Habilidades</h2>
        <div data-testid="list-skill">
          <SiCypress size={60} color="#47474A" title="Cypress" />
          <SiJavascript size={70} color="#EFD81C" title="Javascript" />
          <SiCss3 size={60} color="#0068BA" title="CSS" />
          <SiTypescript size={50} color="#2F74C0" title="Typescript" />
          <SiJest size={70} color="#944058" title="Jest" />
          <SiPostgresql size={40} color="#31648C" title="Postgressql" />
          <SiHtml5 size={70} color="#DD4B24" title="HTML" />
          <SiDocker size={40} color="#2491E7" title="Docker" />
          <SiNodedotjs size={80} color="#7CB702" title="Nodejs" />
          <SiMongodb size={40} color="#1B8534" title="MongoDB" />
          <SiNextdotjs size={40} color="#404040" title="Nextjs" />
          <SiReact size={80} color="#48CEF6" title="Reactjs" />
        </div>
      </Main>
    </>
  );
};

export default Skill;
