import { cleanup, render } from '@testing-library/react';
import Projects from '../../../src/pages/projects/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('Projects', () => {
  it('Should rendering the page', () => {
    const { getByTestId, getByText } = render(
      <AppWrapper>
        <Projects />
      </AppWrapper>
    );

    expect(getByTestId('title-projects')).toBeInTheDocument();
    expect(getByTestId('title-projects')).toHaveTextContent('Projetos');

    expect(getByTestId('container-projects')).toBeInTheDocument();
    expect(getByTestId('container-projects').childElementCount).toEqual(3);

    expect(getByText('Move.it')).toBeTruthy();
    expect(getByTestId('moveit-project')).toHaveAttribute(
      'href',
      'https://github.com/janapc/move.it'
    );
    expect(getByTestId('moveit-list').childElementCount).toEqual(4);

    expect(getByText('Proffy')).toBeTruthy();
    expect(getByTestId('proffy-project')).toHaveAttribute(
      'href',
      'https://github.com/janapc/proffy'
    );
    expect(getByTestId('proffy-list').childElementCount).toEqual(4);

    expect(getByText('SofaApp')).toBeTruthy();
    expect(getByTestId('sofaapp-project')).toHaveAttribute(
      'href',
      'https://github.com/janapc/sofaapp'
    );
    expect(getByTestId('sofaapp-list').childElementCount).toEqual(4);
  });
});
