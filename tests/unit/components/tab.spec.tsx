import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Tab from '../../../src/components/Tab';
import { AppWrapper } from '../../../src/contexts/AppContext';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/mockRouter';

const setStateMock = jest.fn();
const spyUseState = jest.spyOn(React, 'useState');
spyUseState.mockImplementation(() => [false, setStateMock] as any);

afterEach(cleanup);

describe('Tab', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should rendering the menu to desktop with theme dark', () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <Tab />
        </RouterContext.Provider>
      </AppWrapper>
    );

    expect(getByTestId('menu')).toBeInTheDocument();
    expect(getByTestId('desktop-menu')).toBeInTheDocument();
    expect(getByTestId('desktop-menu')).toHaveStyle('background:#242223');
    expect(queryByTestId('mobile-menu')).not.toBeInTheDocument();
    expect(queryByTestId('btn-menu')).toHaveStyle('display: none');
    expect(getByTestId('title-menu')).toHaveTextContent('JP');
    expect(getByTestId('list-menu').childElementCount).toEqual(6);
    expect(getByTestId('btn-change-theme').childElementCount).toEqual(1);
    expect(getByTestId('theme-light')).toBeInTheDocument();
    expect(getByTestId('link-')).toHaveStyle(
      'background-color:rgba(253,58,105,0.22)'
    );
  });

  it('Should rendering the menu to desktop with theme light', async () => {
    spyUseState
      .mockImplementationOnce(() => [true, setStateMock] as any)
      .mockImplementationOnce(() => [false, setStateMock] as any);

    const { getByTestId } = render(
      <AppWrapper>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <Tab />
        </RouterContext.Provider>
      </AppWrapper>
    );

    expect(getByTestId('menu')).toBeInTheDocument();
    expect(getByTestId('desktop-menu')).toBeInTheDocument();
    expect(getByTestId('desktop-menu')).toHaveStyle('background:#F4F4F4');
    expect(getByTestId('btn-change-theme').childElementCount).toEqual(1);
    expect(getByTestId('theme-dark')).toBeInTheDocument();
  });

  it('Should rendering the menu to mobile with theme dark', () => {
    spyUseState
      .mockImplementationOnce(() => [false, setStateMock] as any)
      .mockImplementationOnce(() => [true, setStateMock] as any);

    const { getByTestId } = render(
      <AppWrapper>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <Tab />
        </RouterContext.Provider>
      </AppWrapper>
    );

    expect(getByTestId('menu')).toBeInTheDocument();
    expect(getByTestId('mobile-menu')).toBeInTheDocument();
    expect(getByTestId('mobile-menu')).toHaveStyle('background:#242223');
    expect(getByTestId('list-mobile-menu').childElementCount).toEqual(6);
    expect(getByTestId('link-')).toHaveStyle(
      'background: rgba(253,58,105,0.22)'
    );
  });

  it('Should rendering the menu to mobile with theme light', () => {
    spyUseState
      .mockImplementationOnce(() => [true, setStateMock] as any)
      .mockImplementationOnce(() => [true, setStateMock] as any);

    const { getByTestId } = render(
      <AppWrapper>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <Tab />
        </RouterContext.Provider>
      </AppWrapper>
    );

    expect(getByTestId('menu')).toBeInTheDocument();
    expect(getByTestId('mobile-menu')).toBeInTheDocument();
    expect(getByTestId('mobile-menu')).toHaveStyle('background:#F4F4F4');
    expect(getByTestId('list-mobile-menu').childElementCount).toEqual(6);
    expect(getByTestId('link-')).toHaveStyle(
      'background: rgba(253,58,105,0.22)'
    );
  });
});
