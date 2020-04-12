import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	padding: 1em 5em;
`;

export const LogoContainer = styled(Link)`
	display: block;
  width: 70px;
  height: 71px;
  background: url(./assets/logo-header.png) no-repeat;
`;

export const NavigationBar = styled.ul`
	padding: 0;
  margin: 0;
  margin-top: 30px;

  li {
  	display: inline-block;
  	margin-right: 1em;

  	.navlink {
  		padding: .8em 1.6em .7em;
		  text-decoration: none;
		  color: #000000;
		  background-color: #d9dbdc;

		  &.active {
		  	background-color: #e9eaeb;
		  }

		  &.navlink:hover {
		  	background-color: #e9eaeb;
		  }
  	}
  }
`;

export const WelcomeMessageContainer = styled.span`
	position: absolute;
  top: 5.2em;
  right: 9.7em;

  .link {
  	position: relative;
  }
`;

export const Logout = styled(Link)`
	right: 10.8em;
  top: 8em;
`;