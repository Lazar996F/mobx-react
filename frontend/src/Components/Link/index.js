import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: #1081FC;
  font-weight: 700;
`;

function Link({ title, linkTo }) {
  return (
    <A href={ linkTo }>{ title }</A>
  );
}

export default Link;
