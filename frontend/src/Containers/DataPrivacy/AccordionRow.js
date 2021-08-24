import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import AccordionContent from './AccordionContent';

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
  margin-top: 10px;
  height: 100%;
  align-items: stretch;
`;

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: 'none'
  },
}));

function AccordionRow(props) {
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
            { props.children }
          </AccordionSummary>
          <AccordionContent/>
        </Accordion>
      </AccordionBox>
    </RowWrapper>
  );
}

export default AccordionRow;
