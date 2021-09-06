import styled from 'styled-components';

export const Button = styled.button`
  background-color: inherit;
  border: 1px solid #8080802e;
  color: #80808059;
  cursor: pointer;
  font-size: 0.8em;
  text-decoration: none;
`;

function Secondary({ label, onClick }) {
  return (
    <Button onClick={ onClick }>{ label }</Button>
  );
}

export default Secondary;
