import 'styled-components';

import { light } from './src/styles/theme';

export type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
