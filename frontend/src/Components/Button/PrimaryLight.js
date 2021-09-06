import styled from 'styled-components';

export const Button = styled.button`
  background-color: #BFBFBF;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  width: 80px;
  padding: 13px 0;
  text-decoration: none;
  border: 0;
  text-align: center;
`;

function PrimaryLight({ label }) {
  return <Button>{ label }</Button>
}

export default PrimaryLight;
