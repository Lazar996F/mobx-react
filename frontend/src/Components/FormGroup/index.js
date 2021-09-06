import MUIRichTextEditor from 'mui-rte';
import { useFormik } from 'formik';

import TitleInput from './TitleInput';
import UsersTypeSelect from './UsersTypeSelect';
import ActiveDateInput from './ActiveDateInput';
import Tabs from '../Tabs';
import UploadButton from '../Button/Upload';
import H3 from '../H3';
import P from '../P';
import Link from '../Link';
import SubmitButton from '../Button/SubmitPrimary';
import { getCurrentDateTime } from '../../Utils/helpers';

function FormGroup({ title, areProfessionalUsers, areEndUsers, variant }) {

  const onUploadFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    return reader.onload = e => e.target.result
  }

  const formik = useFormik({
    initialValues: {
      title: variant === 'update' ? title : '',
      areProfessionalUsers: variant === 'update' ? areProfessionalUsers : false,
      areEndUsers: variant === 'update' ? areEndUsers : false,
      activeDate: getCurrentDateTime()
    },
    onSubmit: values => {
      console.log(">>>Form data>>>>", values);
    }
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <TitleInput onChange={ formik.handleChange } value={ formik.values.title }/>
      <div className="flex-row">
        <UsersTypeSelect
          onProfessionalUsersChange={ formik.handleChange }
          onEndUsersChange={ formik.handleChange }
          professionalUsersValue={ formik.values.areProfessionalUsers }
          endUsersValue={ formik.values.areEndUsers }
        />
        <ActiveDateInput handleDateChange={ formik.handleChange } value={ formik.values.activeDate }/>
      </div>
      <Tabs
        stylestate="create-privacy"
        tabContent={ () =>
          <>
            <MUIRichTextEditor label="Enter changes..."/>
            <H3 light small>PDF file with Data Privacy copy</H3>
            { variant === 'update' ? <>replace file</> : <UploadButton onChange={ onUploadFileChange }/> }
            <H3 light small mb="0">Data Privacy URL</H3>
            <P variant="subtext" mt="0">https://www.lorem.ch/dataprivacy/</P>
            <P variant="blue">To change the URL go to general settings</P>
          </>
        }
      />
      <div className="flex-content-between">
        { variant === 'update' ?
          <div>
            <SubmitButton label="Save Data Privacy changes"/>
            <button>Delete</button>
          </div> :
          <SubmitButton label="Create Data Privacy"/> }
        <Link linkTo="/privacy" title="Go back to Data Privacy"/>
      </div>
    </form>
  );
}

export default FormGroup;


