import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {MdExpandMore} from 'react-icons/md'
import AccordionContent from "./AccordionContent";

function AccordionRow(props) {

  return (
      <Accordion>
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
  );
}

export default AccordionRow;
