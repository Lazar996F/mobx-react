import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {MdExpandMore} from 'react-icons/md'
import AccordionContent from './AccordionContent';
import {AccordionBox, RowWrapper, CircleDot, LineCircleWrapper, VerticalLine} from '../../Styled/DataPrivacy';
import { makeStyles } from '@material-ui/core/styles';

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
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<MdExpandMore/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          {props.children}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionContent/>
        </AccordionDetails>
      </Accordion>
    </AccordionBox>
    </RowWrapper>
  );
}

export default AccordionRow;
