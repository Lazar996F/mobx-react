import TooltipMUI from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: 'black',
    height: '18px',
    fontSize: '12px',
    textAlign: 'center',
    border: '0',
    font: 'normal normal normal 12px/20px Circular Std'
  },
}));

function Tooltip(props) {
  const classes = useStylesBootstrap();

  return (
    <TooltipMUI classes={ classes } title={ props.title } placement="right-start" arrow>
      { props.children }
    </TooltipMUI>
  );
}

export default Tooltip;
