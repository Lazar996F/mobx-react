import styled from 'styled-components';

 const AccordionWrapper = styled.div`
  position: relative;
  flex: 1;
  line-height: 34px;

  :before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: 20px;
    left: -18px;
    border-width: 9px;
    border-color: transparent white transparent transparent;
    border-style: solid;
  }
`;

 export default AccordionWrapper;
