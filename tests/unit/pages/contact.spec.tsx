import { cleanup, render } from '@testing-library/react';
import Contact from '../../../src/pages/contact/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('Contact', () => {
  it('Should rendering the page', () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Contact />
      </AppWrapper>
    );

    expect(getByTestId('title-contact')).toBeInTheDocument();
    expect(getByTestId('title-contact')).toHaveTextContent('Contato');
    expect(getByTestId('image-contact')).toBeInTheDocument();
    expect(getByTestId('image-contact')).toHaveAccessibleName(
      'Emoji de Janaina Pedrina'
    );

    expect(getByTestId('image-contact')).toBeInTheDocument();
    expect(getByTestId('container-contact')).toBeInTheDocument();
    expect(getByTestId('container-contact').childElementCount).toEqual(4);

    expect(getByTestId('github-contact')).toHaveProperty(
      'href',
      'https://github.com/janapc'
    );
    expect(getByTestId('twitter-contact')).toHaveProperty(
      'href',
      'https://twitter.com/Janapc_'
    );
    expect(getByTestId('linkedin-contact')).toHaveProperty(
      'href',
      'https://www.linkedin.com/in/janaina-pedrina/'
    );
    expect(getByTestId('mail-contact')).toHaveProperty(
      'href',
      'mailto:jana-costa@outlook.com'
    );
  });
});
