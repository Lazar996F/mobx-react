import {useState} from 'react';
import H3 from '../../Components/H3';
import Button from './MainButton';
import Wrapper from './Wrapper';
import MenuContent from './MenuContent';

function TopMenu({label,menuButtonsLabels}) {
  const [open,setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  }

  return (
    <>
    <Wrapper>
        <H3>{label}</H3>
      <Button onClick={onClick}/>
      {open && <MenuContent menuButtonsLabels={menuButtonsLabels}/>}
    </Wrapper>
    </>
  );
}

export default TopMenu;
