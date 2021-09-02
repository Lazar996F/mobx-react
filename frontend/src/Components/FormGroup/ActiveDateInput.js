import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import H3 from '../H3';
import { getCurrentDateTime } from '../../Utils/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  textField: {
    width: '300px'
  },
}));

function ActiveDateInput({ handleDateChange }) {
  const classes = useStyles();
  const defaultTime = getCurrentDateTime();

  return (
    <Wrapper>
      <H3 light>Active from</H3>
      <TextField
        onChange={ handleDateChange }
        id="date"
        label=" "
        type="datetime-local"
        defaultValue={ defaultTime }
        className={ classes.textField }
        InputLabelProps={ {
          shrink: true,
        } }
      />
    </Wrapper>
  );
}

export default ActiveDateInput;
