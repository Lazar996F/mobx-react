import Wrapper from './Wrapper';

function Disposuite() {
  return (
    <Wrapper>
      <img src={ process.env.PUBLIC_URL + '/icons/disposuite.svg' } alt="disposuite_icon.svg"/>
    </Wrapper>
  );
}

export default Disposuite;
