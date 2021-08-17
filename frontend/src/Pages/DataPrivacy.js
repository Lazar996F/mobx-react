import { ButtonWrapper, Button } from '../Styled/DataPrivacy'
import PageTitle from '../Components/PageTitle';
import Table from '../Components/DataPrivacyTable'

function DataPrivacy() {
  return (
    <>
      <PageTitle title="Data Privacy" subtitle="Active and archive Data Privacy records"/>
      <ButtonWrapper>
        <Button>Add new Data Privacy</Button>
      </ButtonWrapper>
      <Table />
    </>
  )
}

export default DataPrivacy;
