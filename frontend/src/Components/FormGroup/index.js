import TitleInput from './TitleInput';
import UsersTypeSelect from './UsersTypeSelect';
import ActiveDateInput from './ActiveDateInput';
import styled from 'styled-components';
import Tabs from '../Tabs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #ffffff;
  padding: 32px;
`;

function FormGroup() {
  return (
    <Wrapper>
      <TitleInput/>
        <div className="flex-row">
          <UsersTypeSelect/>
          <ActiveDateInput/>
        </div>
      <Tabs tabContent={() => <>Hello</>}/>
    </Wrapper>
  );
}

export default FormGroup;