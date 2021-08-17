import {Box,Header,HeaderText,MenuButton,ButtonWrapper,Button} from '../Styled/DataPrivacy'
import PageTitle from "../Components/PageTitle";
import {HiViewGrid} from 'react-icons/hi'
import Table from '../Components/DataPrivacyTable'

function DataPrivacy() {
    return (
        <Box>
            <Header>
                <HeaderText>Lorem Managment Portal - Super Admin</HeaderText>
                <MenuButton>
                    <HiViewGrid size="1.4em"/>
                </MenuButton>
            </Header>
            <PageTitle title="Data Privacy" subtitle="Active and archive Data Privacy records"/>
            <ButtonWrapper>
                <Button>Add new Data Privacy</Button>
            </ButtonWrapper>
            <Table/>
        </Box>
    )
}

export default DataPrivacy;
