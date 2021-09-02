import MUIRichTextEditor from 'mui-rte';

import TitleInput from './TitleInput';
import UsersTypeSelect from './UsersTypeSelect';
import ActiveDateInput from './ActiveDateInput';
import Tabs from '../Tabs';
import UploadButton from '../Button/Upload';
import H3 from '../H3';
import P from '../P';
import { useState } from 'react';

function FormGroup() {
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  const onUploadFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.log(">>Pdf data >>",e.target.result);
    }
  }

  const onTitleInputChange = (e) => {
    console.log(">>Input change>>",e.target.value)
  }

  //** On Users Type Change **
  const onProfessionalUsersChange = (e) => {
    if(e.target.checked) console.log(">>>>>Professional change>>>",e.target.value)
  }

  const onEndUsersChange = (e) => {
    if(e.target.checked) console.log(">>>End users change>>>>",e.target.value)
  }

  // ** On Date input change
  const handleDateChange = (date) => {
    console.log(">>>>DATE>>>",date)
    setSelectedDate(date);
  };

  return (
    <>
      <TitleInput onChange={onTitleInputChange} />
      <div className="flex-row">
        <UsersTypeSelect
          onProfessionalUsersChange={onProfessionalUsersChange}
          onEndUsersChange={onEndUsersChange}
        />
        <ActiveDateInput handleDateChange={handleDateChange} selectedDate={selectedDate}/>
      </div>
      <Tabs
        styleState="create-privacy"
        tabContent={ () =>
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
