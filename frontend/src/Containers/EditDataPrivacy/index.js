import FormGroup from '../../Components/FormGroup';
import { useContext, useEffect } from 'react';
import Context, { SET_TITLE_SUBTITLE } from '../App/Context';
import Wrapper from '../../Components/Layout/DataPrivacyFormWrapper';
import { getCurrentDateTime } from '../../Utils/helpers';

function EditDataPrivacy({areProfessionalUsers,areEndUsers,pdfDocument}) {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: SET_TITLE_SUBTITLE,
      payload: {
        title: 'Edit Data Privacy',
        subtitle: 'Edit version of the Data Privacy'
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changedDate = getCurrentDateTime();
  const title = `Data Privacy changes on the date ${changedDate}`;
  return (
    <Wrapper>
      <FormGroup variant="update" chagedDate={changedDate} title={title} areProfessionalUsers={true} areEndUsers={true}/>
    </Wrapper>
  );
}

export default EditDataPrivacy;
