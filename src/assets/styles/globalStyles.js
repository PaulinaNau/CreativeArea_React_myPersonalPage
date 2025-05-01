import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    font-family: 'Poppins', sans-serif;
}

a, button {
    font-family: 'Poppins', sans-serif;
}

// no blue background when autocomplete contantct form --- Chrome

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #FAF9F5 inset !important;
}
`;


