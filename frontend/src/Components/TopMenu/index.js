import H3 from '../../Components/H3';
import Button from './Button';
import Wrapper from './Wrapper';

function TopMenu({label}) {
  const onClick = () => {
    console.log(">>>Klikno!!");
  }
  return (
    <Wrapper>
        <H3>{label}</H3>
      <Button onClick={onClick}/>
    </Wrapper>
  );
}

export default TopMenu;
