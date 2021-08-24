import H3 from '../../Components/H3';
import Button from './Button';
import Wrapper from './Wrapper';

function TopMenu({label}) {
  return (
    <Wrapper>
        <H3>{label}</H3>
      <Button/>
    </Wrapper>
  );
}

export default TopMenu;
