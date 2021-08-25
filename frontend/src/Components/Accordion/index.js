import AccordionWrapper from './AccordionWrapper';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ArrowDownIcon from '../ArrowDown';
import AccordionMUI from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  box: {
    boxShadow: 'none'
  },
}));

function Accordion(props) {
  const ExpandedContent = props.expandedContent();
  const classes = useStyles();
  return (
    <AccordionWrapper>
      <AccordionMUI className={ classes.box }>
        <AccordionSummary
          expandIcon={ <ArrowDownIcon/> }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          {props.children}
        </AccordionSummary>
        {ExpandedContent}
      </AccordionMUI>
    </AccordionWrapper>
  );
}

export default Accordion;
