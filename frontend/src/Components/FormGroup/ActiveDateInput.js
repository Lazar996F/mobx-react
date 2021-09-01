import { useState } from 'react';
import styled from 'styled-components';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import H3 from '../H3';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function ActiveDateInput() {
  const [ selectedDate, setSelectedDate ] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <H3 light>Active from</H3>
      <MuiPickersUtilsProvider utils={ DateFnsUtils }>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label=" "
          format="MM/dd/yyyy"
          value={ selectedDate }
          onChange={ handleDateChange }
          KeyboardButtonProps={ {
            'aria-label': 'change date',
          } }
        />
      </MuiPickersUtilsProvider>
    </Wrapper>
  );
}

export default ActiveDateInput;
