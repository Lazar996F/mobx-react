import styled from 'styled-components';

export const ChangeButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ChangeButton = styled.button`
  background-color: inherit;
  border: 1px solid #8080802e;
  color: #80808059;
  cursor: pointer;
`;

function ButtonChange() {
  return (
    <ChangeButtonWrapper>
      <ChangeButton>Change</ChangeButton>
    </ChangeButtonWrapper>
  );
}

export default ButtonChange;
