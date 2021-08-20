import {ActiveDateView,DateView} from '../../Styled/DataPrivacy'
import Chip from '@material-ui/core/Chip';

function ActiveDateInfo() {
  return (
    <ActiveDateView>
      <DateView>Active from 15.11.2021</DateView>
      <Chip
        size="small"
        label="CURRENT"
        color="secondary"
      />
    </ActiveDateView>
  );
}

export default ActiveDateInfo;
