import styled from 'styled-components';
import AccordionRow from './AccordionRow';
import ActiveDateInfo from './ActiveDateInfo';
import ButtonChange from './ButtonChange';


export const RowContent = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;
export const RoleText = styled.div`
  flex: 2;
  font-size: 0.76em;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

function DataPrivacyRow() {
  return (
    <AccordionRow>
      <RowContent>
        <ActiveDateInfo/>
        <RoleText>Professional users, End user</RoleText>
        <ButtonChange/>
      </RowContent>
    </AccordionRow>
  );
}

export default DataPrivacyRow;
