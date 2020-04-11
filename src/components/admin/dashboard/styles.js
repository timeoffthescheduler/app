import styled from 'styled-components';

export const Card = styled.div`
	width: 385px;
  display: inline-block;
  margin-right: 1em;
  text-align: center;
  font-size: 2vw;
  padding: 2em 0em 3em 0em;
  background-color: #f6f6f6;

  p {
  	margin: 0;
  	padding: 0;
  }

  h1 {
  	margin: 0;
  	font-weight: normal;
  }
`;

export const Activities = styled.div`
	width: 385px;
  height: 400px;
  overflow-y: scroll;
  display: inline-block;
  padding: 1em 0em 1em 2em;
  vertical-align: top;
  background: #f6f6f6;

  ul {
  	padding: 0 0 0 1.5em;
  }

  ul li {
  	margin-bottom: .5em;
  }
`;

export const Dashboard = styled.div`
  padding: 5em;
`;