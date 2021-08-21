import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {MdExpandMore} from 'react-icons/md'
import AccordionContent from './AccordionContent';
import {AccordionBox} from '../../Styled/DataPrivacy';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
   borderRadius: '0!important'
  },
}));


function AccordionRow(props) {
const classes = useStyles();
  return (
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
  );
}

export default AccordionRow;
