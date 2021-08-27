import React from 'react';
import TabsMUI from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';
import H4 from '../H4';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
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
    fontWeight:'bold'
  }
}));

function Tabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabsMUI
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        className={classes.tabsMenu}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="English" {...a11yProps(0)} className={classes.tabLabel}/>
        <Tab label="Deutsch" {...a11yProps(1)} className={classes.tabLabel}/>
        <Tab label="Francais" {...a11yProps(2)} className={classes.tabLabel}/>
        <Tab label="Italiano" {...a11yProps(3)} className={classes.tabLabel}/>
      </TabsMUI>
      <TabPanel value={value} index={0}>
        <H4>Changes:</H4>
        <H4>Wiser by Feller:</H4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aliquam dicta eius enim expedita facilis id ipsum iste iure nemo nostrum, numquam pariatur praesentium quam quo repellat repellendus sapiente tenetur unde ut vitae voluptas voluptates? Animi eos illum laboriosam magni maxime minus, molestiae quisquam? Et hic id molestiae nam?</p>
        <a href="#" download>Data privacy_document.PDF</a>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aliquam dicta eius enim expedita facilis id ipsum iste iure nemo nostrum, numquam pariatur praesentium quam quo repellat repellendus sapiente tenetur unde ut vitae voluptas voluptates? Animi eos illum laboriosam magni maxime minus, molestiae quisquam? Et hic id molestiae nam?</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aliquam dicta eius enim expedita facilis id ipsum iste iure nemo nostrum, numquam pariatur praesentium quam quo repellat repellendus sapiente tenetur unde ut vitae voluptas voluptates? Animi eos illum laboriosam magni maxime minus, molestiae quisquam? Et hic id molestiae nam?</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aliquam dicta eius enim expedita facilis id ipsum iste iure nemo nostrum, numquam pariatur praesentium quam quo repellat repellendus sapiente tenetur unde ut vitae voluptas voluptates? Animi eos illum laboriosam magni maxime minus, molestiae quisquam? Et hic id molestiae nam?</p>
      </TabPanel>
    </div>
  );
}

export default Tabs;
