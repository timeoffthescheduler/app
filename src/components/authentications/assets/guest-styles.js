import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import img from './assets/guest-logo.png';

export const AuthContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100px;
  border-radius: 3px;
`;

export const LogoContainer = styled(Link)`
  position: inherit;
  left: 4.5em;
  bottom: 140px;
  width: 155px;
  height: 154px;
  background: url(./images/guest-logo.png) no-repeat;
`;

export const AuthForm = styled.form`
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
`;