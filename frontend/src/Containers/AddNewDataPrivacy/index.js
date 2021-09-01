import { useContext, useEffect } from 'react';
import Context, { SET_TITLE_SUBTITLE } from '../App/Context';
import FormGroup from '../../Components/FormGroup';
import Button from '../../Components/Button/Primary';

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
  }, [ dispatch ]);

  return (
    <>
      <FormGroup/>
    </>
  )
}

export default AddNewDataPrivacy;
