import {useEffect} from 'react'
import {ButtonWrapper, Button} from '../Styled/DataPrivacy'
import DataPrivacyContent from "../Components/DataPrivacy/DataPrivacyContent";

const dummyData = [
  {
    role: 'Professional users, End users',
    pdf: 'Data privacy_document.PDF',
    content: 'Lorem ipsum bla bla',
    date: '15.11.2021'
  },
  {
    role: 'Professional users, End users',
    pdf: 'Data privacy_document.PDF',
    content: 'Lorem ipsum bla bla',
    date: '09.07.2021'
  },
  {
    role: 'Professional users',
    pdf: 'Data privacy_document.PDF',
    content: 'Lorem ipsum bla bla',
    date: '05.04.2021'
  },
  {
    role: 'End users',
    pdf: 'Data privacy_document.PDF',
    content: 'Lorem ipsum bla bla',
    date: '10.12.2020'
  },
  {
    role: 'Professional users, End users',
    pdf: 'Data privacy_document.PDF',
    content: 'Lorem ipsum bla bla',
    date: '16.06.2020'
  }
]
function DataPrivacy(setTitle) {

  useEffect(() => {
    setTitle('Data Privacy');
  }, []);

  return (
    <>
      <ButtonWrapper>
        <Button>Add new Data Privacy</Button>
      </ButtonWrapper>
      <DataPrivacyContent timelineData={dummyData} />
    </>
  )
}

export default DataPrivacy;
