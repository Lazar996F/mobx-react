import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  width: 224px;
  padding: 13px 0px;
  text-decoration: none;
  border: 0;
  text-align: center;
`;

function SubmitPrimary({ label }) {
  return <Button type="submit">{ label }</Button>

}

export default SubmitPrimary;
