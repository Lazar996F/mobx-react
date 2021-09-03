import styled from 'styled-components';

export const A = styled.a`
  background-color: inherit;
  border: 1px solid #8080802e;
  color: #80808059;
  cursor: pointer;
  font-size: 0.8em;
  line-height: 18px;
  padding: 0 3px 0px 3px;
`;

function Secondary({ label,linkTo, onClick }) {
  return (
    <A href={linkTo} onClick={onClick}>{label}</A>
  );
}

export default Secondary;
