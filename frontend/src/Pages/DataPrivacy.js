import {useEffect} from 'react'
import { ButtonWrapper, Button } from '../Styled/DataPrivacy'
import DataPrivacyContent from "../Components/DataPrivacyContent";

function DataPrivacy(setTitle) {
  useEffect(() => {
    setTitle('Data Privacy');
  },[])
  return (
    <>
      <ButtonWrapper>
        <Button>Add new Data Privacy</Button>
      </ButtonWrapper>
      <DataPrivacyContent/>
    </>
  )
}

export default DataPrivacy;
