import {Box,Header,HeaderText,MenuButton} from '../Styled/DataPrivacy'
import PageTitle from "../Components/PageTitle";
import {HiViewGrid} from 'react-icons/hi'
function DataPrivacy() {
    return (
        <Box>
            <Header>
                <HeaderText>Lorem Managment Portal - Super Admin</HeaderText>
                <MenuButton>
                    <HiViewGrid/>
                </MenuButton>
            </Header>
            <PageTitle title="Data Privacy" subtitle="Active and archive Data Privacy records"/>
        </Box>
    )
}

export default DataPrivacy;
