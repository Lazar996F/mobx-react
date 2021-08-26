import styled from 'styled-components';

 const NavigationWrapper = styled.div`
  padding-top: 74px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    padding-top: 20px;
    color: #959595;
    font-size: 0.78em;
  }
  a:focus{
    color: black;
    font-weight: bold;
  }
`;
export default NavigationWrapper;
