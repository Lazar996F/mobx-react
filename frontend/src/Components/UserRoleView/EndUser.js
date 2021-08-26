import styled from 'styled-components';

const EndUser = styled.div`
  background-image: url(${ process.env.PUBLIC_URL + '/icons/user_standard_icon.svg' });
  background-repeat: no-repeat;
  width: 16px;
  height: 18px;
  margin: 0 10px;
`;

export default EndUser;
