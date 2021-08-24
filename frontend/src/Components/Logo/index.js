import styled from 'styled-components';

const Logo = styled.div`
  background-image: url(${ process.env.PUBLIC_URL + '/images/MainLogo.PNG' });
  background-repeat: no-repeat;
  padding: 35px 70px;
`;

export default Logo;
