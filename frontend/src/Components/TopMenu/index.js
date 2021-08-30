import { useContext, useState } from 'react';
import H3 from '../../Components/H3';
import Button from './MainButton';
import Wrapper from './Wrapper';
import MenuContent from './MenuContent';
import Context from '../../Containers/App/Context';

function TopMenu({label}) {
  const [open,setOpen] = useState(false);
  const { state } = useContext(Context);

  const onClick = () => {
    setOpen(!open);
  }

  return (
    <>
    <Wrapper>
        <H3>{label}</H3>
      <Button onClick={onClick}/>
      {open && <MenuContent menuButtonsLabels={state?.menuButtonsLabels}/>}
    </Wrapper>
    </>
  );
}

export default TopMenu;
