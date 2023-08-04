import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";



const StyledGlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => (props.isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)")};
  }

   
`;

export function GlobalStyle() {
  const theme = useSelector((state) => state.theme);

  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
