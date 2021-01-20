import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    size: {
      large: string;
      medium: string;
      small: string
    };
  }
}