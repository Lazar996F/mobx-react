import {useState} from 'react';
import H3 from '../../Components/H3';
import Button from './Buttons/Main';
import Wrapper from './Wrapper';
import MenuContent from './MenuContent';

function TopMenu({label}) {
  const [open,setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  }

  return (
    <>
    <Wrapper>
        <H3>{label}</H3>
      <Button onClick={onClick}/>
      {open && <MenuContent/>}
    </Wrapper>
    </>
  );
}

export default TopMenu;
