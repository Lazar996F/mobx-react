import MUIRichTextEditor from 'mui-rte';
import styled from 'styled-components';

import TitleInput from './TitleInput';
import UsersTypeSelect from './UsersTypeSelect';
import ActiveDateInput from './ActiveDateInput';
import Tabs from '../Tabs';
import UploadButton from '../Button/Upload';
import H3 from '../H3';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #ffffff;
  padding: 32px;
`;

function FormGroup() {
  const onUploadFileChange = (e) => {
    console.log(">>>Uploaded file >>>", e.target.files);
  }
  return (
    <Wrapper>
      <TitleInput/>
      <div className="flex-row">
        <UsersTypeSelect/>
        <ActiveDateInput/>
      </div>
      <Tabs tabContent={ () => <MUIRichTextEditor label="Enter changes..."/>}/>
      <H3 light small>PDF file with Data Privacy copy</H3>
      <UploadButton onChange={onUploadFileChange}/>
    </Wrapper>
  );
}

export default FormGroup;
