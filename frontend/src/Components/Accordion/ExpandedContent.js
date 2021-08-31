import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import H3 from '../H3';
import LanguageTabs from '../Tabs';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    flexDirection: 'column'
  },
}));

function ExpandedContent({ date, tabContent }) {
  const classes = useStyles();

  return (
    <AccordionDetails className={ classes.root }>
      <H3>Data privacy changes on the date { date }</H3>
      <LanguageTabs tabContent={tabContent}/>
    </AccordionDetails>
  );
}

export default ExpandedContent;
