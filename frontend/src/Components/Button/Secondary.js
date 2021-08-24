import styled from 'styled-components';

export const ChangeButton = styled.button`
  background-color: inherit;
  border: 1px solid #8080802e;
  color: #80808059;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 0.8em;
`;

function ButtonChange() {
  return (
    <ChangeButton>
      <Label>Change</Label>
    </ChangeButton>
  );
}

export default ButtonChange;
