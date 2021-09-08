import { useContext, useRef, useState } from 'react';

import H3 from '../../Components/H3';
import Button from './MainButton';
import Wrapper from './Wrapper';
import MenuContent from './MenuContent';
import Context from '../../Containers/App/Context';
import { useOutsideClick } from '../../Utils/hooks';

function TopMenu({ label }) {
  const [ open, setOpen ] = useState(false);
  const { state } = useContext(Context);
  const onClick = () => {
    setOpen(!open);
  }
  const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef,setOpen);

  return (
    <Wrapper>
      <H3 className="mb-0">{ label }</H3>
      <div ref={wrapperRef}>
      <Button onClick={ onClick }/>
      { open && <MenuContent menuButtonsLabels={ state?.menuButtonsLabels }/> }
      </div>
    </Wrapper>
  );
}

export default TopMenu;


