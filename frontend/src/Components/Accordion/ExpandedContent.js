import AccordionDetails from '@material-ui/core/AccordionDetails';
import H3 from '../H3';
import LanguageTabs from '../Tabs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    flexDirection: 'column'
  },
}));


function ExpandedContent({date,textContent}) {
  const classes = useStyles();
  return (
    <AccordionDetails className={classes.root}>
        <H3>Data privacy changes on the date { date }</H3>
        <LanguageTabs textContent={textContent}/>
    </AccordionDetails>
  );
}

export default ExpandedContent;
