import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import H3 from '../H3';

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
    maxWidth: '250px'
  },
}));

function ActiveDateInput({ handleDateChange,value }) {
  const classes = useStyles();

  return (
    <Wrapper>
      <H3 light>Active from</H3>
      <TextField
        onChange={ handleDateChange }
        inputProps={{
          name: 'activeDate'
        }}
        id="date"
        label=" "
        type="datetime-local"
        value={value}
        className={ classes.textField }
        InputLabelProps={ {
          shrink: true,
        } }
      />
    </Wrapper>
  );
}

export default ActiveDateInput;
