import styled from 'styled-components';
import { COLOR_SECONDARY_LIGHT } from '../../Utils/styles';

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  background-color: #FFFFFF;
  color: #000000;
  border: 0;
  border-bottom: 1px solid ${ COLOR_SECONDARY_LIGHT };

  :focus {
    outline: none;
  }

  ::placeholder{
    color: black;
  }
`;

function TitleInput({onChange,value}) {
  return (
    <>
      <Input placeholder="Title (optional)" onChange={onChange} name="title" value={value}/>
    </>
  );
}

export default TitleInput;
