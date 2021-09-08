import styled from 'styled-components'
import { Button } from 'reactstrap'


export default styled(Button)`
  font-size: 16px;
  line-height: 24px;
  border-radius: 0;
  margin-top: 30px;
  border: 1px solid #000;
  width: 100%;
  background-color: black;
  :disabled {
    background-color: #ffffff;
  }

  :hover {
    color: white;
    background-color: #808080;
    opacity: 1;
    border-color: transparent;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 8px 50px 8px 50px;
  }
`
