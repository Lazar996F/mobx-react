import Wrapper from './Wrapper';

function Portal() {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/icons/portal.svg'} alt="portal_icon.svg"/>
    </Wrapper>
  );
}

export default Portal;
