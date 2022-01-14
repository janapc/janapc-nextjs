import { cleanup, render } from '@testing-library/react';

import Home from '../../../src/pages/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('Home', () => {
  it('Should rendering the page', () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Home />
      </AppWrapper>
    );

    expect(getByTestId('image-home')).toBeInTheDocument();
    expect(getByTestId('image-home')).toHaveAccessibleName(
      'Janaina Pedrina'
    );

    expect(getByTestId('apresention-home')).toBeInTheDocument();
    expect(getByTestId('apresention-home')).toHaveTextContent(
      'Olá, sou'
    );

    expect(getByTestId('name-home')).toBeInTheDocument();
    expect(getByTestId('name-home')).toHaveTextContent(
      'Janaina Pedrina'
    );

    expect(getByTestId('job-home')).toBeInTheDocument();
    expect(getByTestId('job-home')).toHaveTextContent(
      'Desenvolvedora júnior na D1 Smarkio'
    );

    expect(getByTestId('details-home')).toBeInTheDocument();
    expect(getByTestId('details-home')).toHaveTextContent(
      'Sou uma desenvolvedora backend que adora desafios e que se aventura um pouco no frontend.'
    );
  });
});
