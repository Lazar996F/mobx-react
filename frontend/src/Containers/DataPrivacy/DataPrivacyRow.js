import styled from 'styled-components';
import ActiveDateInfo from './ActiveDateInfo';
import Button from '../../Components/Button/Secondary';
import { H3 } from '../../Components/H3/H3';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import AccordionContent from './AccordionContent';
import { makeStyles } from '@material-ui/core/styles';

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


export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 0;
`;

export const AccordionBox = styled.div`
  position: relative;
  flex: 1;
  line-height: 34px;

  :before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: 20px;
    left: -18px;
    border-width: 9px;
    border-color: transparent white transparent transparent;
    border-style: solid;
  }
`;

export const CircleDot = styled.span`
  display: flex;
  height: 13px;
  width: 13px;
  background-color: #ffff;
  border-radius: 50%;
  border: 1px solid;
`;

export const LineCircleWrapper = styled.div`
  padding-right: 13px;
  padding-top: 22px;
`;

export const VerticalLine = styled.div`
  border-left: 2px solid #80808054;
  margin-left: 6px;
  margin-top: 8px;
  height: 100%;
  align-items: stretch;
`;

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: 'none'
  },
}));

function DataPrivacyRow() {
  const classes = useStyles();
  return (
    <RowWrapper>
      <LineCircleWrapper>
        <CircleDot/>
        <VerticalLine/>
      </LineCircleWrapper>
      <AccordionBox>
        <Accordion className={ classes.box }>
          <AccordionSummary
            expandIcon={ <MdExpandMore/> }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <ActiveDateInfo/>
            <RoleText>
              <H3>Professional users, End user</H3>
            </RoleText>
            <ButtonWrapper>
              <Button/>
            </ButtonWrapper>
          </AccordionSummary>
          <AccordionContent/>
        </Accordion>
      </AccordionBox>
    </RowWrapper>
  );
}

export default DataPrivacyRow;
