import React from 'react';
import TabsMUI from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';

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
    backgroundColor: '#fff'
  },
  tabLabel: {
    textTransform: 'none',
    color: '#BFBFBF',
    fontWeight: 'bold'
  }
}));

function Tabs({ tabContent, stylestate }) {
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
      <TabPanel value={ value } index={ 0 } stylestate={ stylestate }>
        { TabContent }
      </TabPanel>
      <TabPanel value={ value } index={ 1 } stylestate={ stylestate }>
        { TabContent }
      </TabPanel>
      <TabPanel value={ value } index={ 2 } stylestate={ stylestate }>
        { TabContent }
      </TabPanel>
      <TabPanel value={ value } index={ 3 } stylestate={ stylestate }>
        { TabContent }
      </TabPanel>
    </div>
  );
}

export default Tabs;
