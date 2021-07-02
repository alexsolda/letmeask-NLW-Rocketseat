import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${props => props.theme.primary};
    color: #29292e;
    transition: all .6s;
}

body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
}
`
export default GlobalStyle;
