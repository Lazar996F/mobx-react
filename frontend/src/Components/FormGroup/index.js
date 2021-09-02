import MUIRichTextEditor from 'mui-rte';
import styled from 'styled-components';

import TitleInput from './TitleInput';
import UsersTypeSelect from './UsersTypeSelect';
import ActiveDateInput from './ActiveDateInput';
import Tabs from '../Tabs';
import UploadButton from '../Button/Upload';
import H3 from '../H3';
import P from '../P';


function FormGroup() {
  const onUploadFileChange = (e) => {
    console.log(">>>Uploaded file >>>", e.target.files);
  }
  return (
    <>
      <TitleInput/>
      <div className="flex-row">
        <UsersTypeSelect/>
        <ActiveDateInput/>
      </div>
      <Tabs tabContent={ () =>
        <>
          <MUIRichTextEditor label="Enter changes..."/>
          <H3 light small>PDF file with Data Privacy copy</H3>
          <UploadButton onChange={ onUploadFileChange }/>
          <H3 light small mb="0">Data Privacy URL</H3>
          <P variant="subtext" mt="0">https://www.lorem.ch/dataprivacy/</P>
          <P variant="blue">To change the URL go to general settings</P>
        </>
      }/>
    </>
  );
}

export default FormGroup;
