import Wrapper from './Wrapper';

function Account() {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/icons/account.svg'} alt="account_icon.svg"/>
    </Wrapper>
  );
}

export default Account;
