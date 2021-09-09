import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled.button`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  width: 224px;
  padding: 13px 0;
  text-decoration: none;
  border: 0;
  text-align: center;
`;

function Primary({ label, linkTo }) {
  return (
    <>
      {linkTo ? <Link to={linkTo}>
        <Button>{label}</Button>
      </Link> : <Button >{ label }</Button>}
    </>
  )
}

export default Primary;
