import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import ExpandedContent from './ExpandedContent';
import CircleWithVerticalLine from '../../Components/CircleWithVerticalLine';
import TimelineChip from '../../Components/Chip/TimelineChip';
import Button from '../../Components/Button/Secondary';
import H3 from '../../Components/H3';

export const RoleText = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const ButtonColumn = styled.div`
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

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: 'none'
  },
}));

function DataPrivacyRow() {
  const classes = useStyles();
  return (
    <RowWrapper>
      <CircleWithVerticalLine/>
      <AccordionBox>
        <Accordion className={ classes.box }>
          <AccordionSummary
            expandIcon={ <MdExpandMore/> }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <H3>Active from 15.11.2021</H3>
              <TimelineChip/>
              <RoleText>
                <H3>Professional users, End user</H3>
              </RoleText>
              <ButtonColumn>
                <Button/>
              </ButtonColumn>
          </AccordionSummary>
          <ExpandedContent/>
        </Accordion>
      </AccordionBox>
    </RowWrapper>
  );
}

export default DataPrivacyRow;
