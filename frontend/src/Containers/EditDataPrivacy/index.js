import FormGroup from '../../Components/FormGroup';
import { checkAndReturnUserRole, getCurrentDateTime } from '../../Utils/helpers';
import Wrapper from '../../Components/Layout/DataPrivacyFormWrapper';
import PageHeader from '../../Components/PageHeader';
import Store from '../../Store';

function EditDataPrivacy() {
  const changedDate = getCurrentDateTime();
  const documentTitle = `Data Privacy changes on the date ${ changedDate }`;

  const usersRole = checkAndReturnUserRole(Store.policyForUpdate.role);
console.log(">>>>EDIT >>>",Store.policyForUpdate.date)
  return (
    <>
      <PageHeader title="Edit Data Privacy" subtitle="Edit version of the Data Privacy"/>
      <Wrapper>
      <FormGroup
        variant="update"
        chagedDate={ changedDate }
        title={ documentTitle }
        areProfessionalUsers={ usersRole.areProfessionalUsers}
        areEndUsers={ usersRole.areEndUsers }
        pdf={Store.policyForUpdate.pdf}
        activeDate={Store.policyForUpdate.date}
      />
    </Wrapper>
      </>
  );
}

export default EditDataPrivacy;
