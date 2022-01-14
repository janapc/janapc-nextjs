import { cleanup, render } from '@testing-library/react';

import Skill from '../../../src/pages/skill/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('Skill', () => {
  it('Should rendering the page', async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Skill />
      </AppWrapper>
    );

    expect(getByTestId('title-skill')).toBeInTheDocument();
    expect(getByTestId('title-skill')).toHaveTextContent('Habilidades');

    expect(getByTestId('list-skill')).toBeInTheDocument();
    expect(getByTestId('list-skill').childElementCount).toEqual(12);
  });
});
