import { useContext, useEffect } from 'react';

import Context, { SET_TITLE_SUBTITLE } from '../App/Context';
import FormGroup from '../../Components/FormGroup';
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

  const handleSubmit = (e) => {
    console.log(">>>>>Submit>>>", e);
  }

  return (
    <Wrapper>
      <FormGroup handleSubmit={ handleSubmit }/>
    </Wrapper>
  )
}

export default AddNewDataPrivacy;
