import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        id: string;
        primary: string;
        secondary: string;
        colorPrimary: string;
        colorSecondary: string;
    }
}