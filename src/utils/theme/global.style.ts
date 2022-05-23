import { createGlobalStyle } from "styled-components";
import theme from ".";

const GlobalStyle = createGlobalStyle`

	*{
		padding:0;
		margin:0;
		box-sizing:border-box;
	}

	html{
		font-size: 62.5%;
	}

	body{
		padding:0;
		margin:0;
		font-family:${theme.font.main};
		background:${theme.palette.dark};
	}

`;

export default GlobalStyle;
