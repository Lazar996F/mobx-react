import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  label: {
    margin:0
  }
}));

export default function UploadButtons({onChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file" className={classes.label}>
        <Button variant="contained" color="primary" component="span">
          Click to upload or Drag&Drop a file
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChange} />
    </div>
  );
}
