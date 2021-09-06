import FormGroup from '../../Components/FormGroup';
import Wrapper from '../../Components/Layout/DataPrivacyFormWrapper';
import PageHeader from '../../Components/PageHeader';

function AddNewDataPrivacy() {
  return (
    <>
      <PageHeader title="Add new Data Privacy" subtitle="New version of the Data Privacy for all users"/>
      <Wrapper>
        <FormGroup/>
      </Wrapper>
    </>
  )
}

export default AddNewDataPrivacy;
