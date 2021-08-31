import React from 'react';
import TabsMUI from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';
import H3 from '../H3';
import DownloadPdf from '../DownloadPdf';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${ index }`,
    'aria-controls': `simple-tabpanel-${ index }`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  tabsMenu: {
    backgroundColor: '#fff',
    maxWidth: '50%'
  },
  tabLabel: {
    textTransform: 'none',
    color: '#BFBFBF',
    fontWeight: 'bold'
  }
}));

function Tabs({ tabContent }) {
  const classes = useStyles();
  const [ value, setValue ] = React.useState(0);

  const TabContent = tabContent();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={ classes.root }>
      <TabsMUI
        value={ value }
        onChange={ handleChange }
        variant="fullWidth"
        className={ classes.tabsMenu }
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="English" { ...a11yProps(0) } className={ classes.tabLabel }/>
        <Tab label="Deutsch" { ...a11yProps(1) } className={ classes.tabLabel }/>
        <Tab label="Francais" { ...a11yProps(2) } className={ classes.tabLabel }/>
        <Tab label="Italiano" { ...a11yProps(3) } className={ classes.tabLabel }/>
      </TabsMUI>
      <TabPanel value={ value } index={ 0 }>
        <H3>Changes:</H3>
        <H3>Wiser by Feller:</H3>
        { TabContent }
        <DownloadPdf/>
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        <H3>Changes:</H3>
        <H3>Wiser by Feller:</H3>
        { TabContent }
        <DownloadPdf/>
      </TabPanel>
      <TabPanel value={ value } index={ 2 }>
        <H3>Changes:</H3>
        <H3>Wiser by Feller:</H3>
        { TabContent }
        <DownloadPdf/>
      </TabPanel>
      <TabPanel value={ value } index={ 3 }>
        <H3>Changes:</H3>
        <H3>Wiser by Feller:</H3>
        { TabContent }
        <DownloadPdf/>
      </TabPanel>
    </div>
  );
}

export default Tabs;
