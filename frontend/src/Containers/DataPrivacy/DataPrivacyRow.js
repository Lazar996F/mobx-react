import styled from 'styled-components';
import AccordionRow from './AccordionRow';
import ActiveDateInfo from './ActiveDateInfo';
import ButtonChange from './ButtonChange';
import {H3} from '../../Components/H3';

export const RowBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;
export const RoleText = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

function DataPrivacyRow() {
  return (
    <AccordionRow>
      <RowBox>
        <ActiveDateInfo/>
        <RoleText>
          <H3>Professional users, End user</H3>
        </RoleText>
        <ButtonChange/>
      </RowBox>
    </AccordionRow>
  );
}

export default DataPrivacyRow;
