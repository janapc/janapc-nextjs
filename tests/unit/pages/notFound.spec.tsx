import { cleanup, render } from '@testing-library/react';
import NotFount from '../../../src/pages/404.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('404', () => {
  it('Should rendering the page', () => {
    const { getByTestId } = render(
      <AppWrapper>
        <NotFount />
      </AppWrapper>
    );

    expect(getByTestId('page-notfound')).toBeInTheDocument();
    expect(getByTestId('image-cry')).toBeInTheDocument();
    expect(getByTestId('image-cry')).toHaveAccessibleName('Emoji Janaina');
    expect(getByTestId('description-notfound')).toHaveTextContent(
      'Oh sorry this page is not found'
    );
  });
});
