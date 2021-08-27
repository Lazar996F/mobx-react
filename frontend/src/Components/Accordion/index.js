import AccordionWrapper from './AccordionWrapper';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ArrowDownIcon from '../ArrowDown';
import AccordionMUI from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  accord: {
    boxShadow: 'none'
  },
  summary: {
    minHeight: '0!important',
    height: '62px'
  }
}));

function Accordion(props) {
  const ExpandedContent = props.expandedContent();
  const classes = useStyles();
  return (
    <AccordionWrapper>
      <AccordionMUI className={ classes.accord}>
        <AccordionSummary
          expandIcon={ <ArrowDownIcon/> }
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.summary}
        >
          {props.children}
        </AccordionSummary>
        {ExpandedContent}
      </AccordionMUI>
    </AccordionWrapper>
  );
}

export default Accordion;
