import { useContext, useEffect } from 'react';

import Context, { SET_TITLE_SUBTITLE } from '../App/Context';
import FormGroup from '../../Components/FormGroup';
import Button from '../../Components/Button/Primary';
import Link from '../../Components/Link';
import Wrapper from '../../Components/Layout/NewDataPrivacyPageWrapper';

function AddNewDataPrivacy() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: SET_TITLE_SUBTITLE,
      payload: {
        title: 'Add new Data Privacy',
        subtitle: 'New version of the Data Privacy for all users'
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <FormGroup/>
      <div className="flex-content-between">
        <Button label="Create Data Privacy"/>
        <Link linkTo="/privacy" title="Go back to Data Privacy"/>
      </div>
    </Wrapper>
  )
}

export default AddNewDataPrivacy;
