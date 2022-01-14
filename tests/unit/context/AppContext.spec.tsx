import { act, renderHook, cleanup } from '@testing-library/react-hooks';

import { AppWrapper, useAppContext } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('AppContext', () => {
  it('Should return hasLight false', () => {
    const wrapper = ({ children }: any) => <AppWrapper>{children}</AppWrapper>;

    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current).toMatchObject({
      toggleTheme: result.current.toggleTheme,
      hasLight: false,
    });
  });

  it('Should change value of theme', () => {
    const wrapper = ({ children }: any) => <AppWrapper>{children}</AppWrapper>;

    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current).toMatchObject({
      toggleTheme: result.current.toggleTheme,
      hasLight: false,
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current).toMatchObject({
      toggleTheme: result.current.toggleTheme,
      hasLight: true,
    });
  });
});
