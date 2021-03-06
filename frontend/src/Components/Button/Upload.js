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
    margin: 0,
    width: '100%',
    marginBottom: '10px'
  },
  button: {
    color: '#1081FC!important'
  }
}));

export default function UploadButtons({ onChange, variant }) {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <input
        accept="application/pdf/*"
        className={ classes.input }
        id="contained-button-file"
        multiple
        type="file"
        onChange={ onChange }
      />
      { variant !== 'replace' ? <label htmlFor="contained-button-file" className={ classes.label }>
          <Button variant="contained" color="primary" component="span">
            Click to upload or Drag&Drop a file
          </Button>
        </label> :
        <label htmlFor="contained-button-file" className={ classes.label }>
          <Button variant="contained" color="primary" component="span" className={classes.button}>
            Replace file
          </Button>
        </label> }
    </div>
  );
}
