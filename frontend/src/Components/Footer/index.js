import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Text = styled.span`
  font-size: 10px;
  color: #A6A6A6;
  position: absolute;
  bottom: 5px;
  right: 23px;
`;

function Footer() {
  return (
      <Text>&#169; 2019 Feller Privacy Terms of Service Content<br/>disclaimer Cookies</Text>
  );
}

export default Footer;
