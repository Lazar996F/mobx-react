import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
  position: absolute;
  bottom: 5px;
  right: 23px;
  flex-direction: column;
  font-size: 10px;
  color: #A6A6A6;
`;

function Footer() {
  return (
    <Wrapper>
      <span>&#169; 2019 Feller Privacy Terms of Service Content</span>
      <span className="mr-auto">disclaimer Cookies</span>
    </Wrapper>
);
}

export default Footer;
