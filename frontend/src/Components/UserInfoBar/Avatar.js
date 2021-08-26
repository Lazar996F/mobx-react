import AvatarMUI from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'black',
    width: '32px',
    height: '32px',
    lineHeight: '0',
    fontSize: '14px',
    letterSpacing: '0',
    textAlign: 'center'
  },
}));

function Avatar({label}) {
  const classes = useStyles();

  return (
    <AvatarMUI className={classes.root}>{label}</AvatarMUI>
  )
}

export default Avatar;
