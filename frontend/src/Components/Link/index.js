import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: #1081FC;
  font-weight: 700;
`;

const Button = styled.button`
  color: #1081FC;
  font-weight: 700;
  border:0;
  background-color: inherit;
`;

function Link({ title, linkTo, onClick }) {
  return (
   <>
     {linkTo ? <A href={ linkTo }>{ title }</A> : <Button onClick={onClick}>{title}</Button> }
   </>
  );
}

export default Link;
