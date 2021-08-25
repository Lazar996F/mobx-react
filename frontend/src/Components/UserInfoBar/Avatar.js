import AvatarMUI from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'black',
    width: '28px',
    height: '28px',
    lineHeight: '0',
    fontSize: '0.8em'
  },
}));

function Avatar({label}) {
  const classes = useStyles();

  return (
    <AvatarMUI className={classes.root}>{label}</AvatarMUI>
  )
}

export default Avatar;
