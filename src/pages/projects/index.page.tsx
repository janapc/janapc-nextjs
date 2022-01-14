import type { NextPage } from 'next';
import {
  SiCypress,
  SiNodedotjs,
  SiReact,
  SiJest,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiStyledcomponents,
} from 'react-icons/si';

import {
  Main,
  ProjectsContainer,
  ProjectItem,
  ProjectDescription,
} from './styles';

const Projects: NextPage = () => {
  return (
    <Main data-testid="page-projects">
      <h2 data-testid="title-projects">Projetos</h2>
      <ProjectsContainer data-testid="container-projects">
        <ProjectItem srcImage="/images/moveit.gif">
          <ProjectDescription
            href="https://github.com/janapc/move.it"
            data-testid="moveit-project"
            target={'_blank'}
          >
            <h4>Move.it</h4>
            <div data-testid="moveit-list">
              <SiReact size={36} color="#C1C1C1" title="Reactjs" />
              <SiNextdotjs size={36} color="#C1C1C1" title="Nextjs" />
              <SiCypress size={36} color="#C1C1C1" title="Cypress" />
              <SiJest size={36} color="#C1C1C1" title="Jest" />
            </div>
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem srcImage="/images/proffy.gif">
          <ProjectDescription
            href="https://github.com/janapc/proffy"
            data-testid="proffy-project"
            target={'_blank'}
          >
            <h4>Proffy</h4>
            <div data-testid="proffy-list">
              <SiReact size={36} color="#C1C1C1" title="Reactjs" />
              <SiTypescript size={36} color="#C1C1C1" title="Typescript" />
              <SiPostgresql size={36} color="#C1C1C1" title="Postgresql" />
              <SiNodedotjs size={36} color="#C1C1C1" title="Nodejs" />
            </div>
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem srcImage="/images/sofaapp.gif">
          <ProjectDescription
            href="https://github.com/janapc/sofaapp"
            data-testid="sofaapp-project"
            target={'_blank'}
          >
            <h4>SofaApp</h4>
            <div data-testid="sofaapp-list">
              <SiReact size={36} color="#C1C1C1" title="Reactjs" />
              <SiTypescript size={36} color="#C1C1C1" title="Typescript" />
              <SiPostgresql size={36} color="#C1C1C1" title="Postgresql" />
              <SiStyledcomponents
                size={36}
                color="#C1C1C1"
                title="Styledcomponents"
              />
            </div>
          </ProjectDescription>
        </ProjectItem>
      </ProjectsContainer>
    </Main>
  );
};

export default Projects;
