import styled from 'styled-components';
import AccordionRow from './AccordionRow';
import ActiveDateInfo from './ActiveDateInfo';
import ButtonChange from './ButtonChange';
import {H3} from '../../Components/H3';

export const RoleText = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  max-height: 19px;
  padding-right: 13px;
`;

function DataPrivacyRow() {
  return (
    <AccordionRow>
        <ActiveDateInfo/>
        <RoleText>
          <H3>Professional users, End user</H3>
        </RoleText>
        <ButtonWrapper>
          <ButtonChange/>
        </ButtonWrapper>
    </AccordionRow>
  );
}

export default DataPrivacyRow;
