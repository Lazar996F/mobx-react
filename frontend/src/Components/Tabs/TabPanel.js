import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {BACKGROUND_COLOR_SECONDARY} from '../../Utils/styles';

const Box = styled.div`
  background-color: ${BACKGROUND_COLOR_SECONDARY};
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default TabPanel;
