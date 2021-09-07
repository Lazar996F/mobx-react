import styled from 'styled-components'

import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export const StyledModalBody = styled(ModalBody)`
  padding: 32px;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 18px;
    line-height: 28px;
  }

  h1 {
    font-size: 32px;
    line-height: 44px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 70px;
  }

  @media (min-width: 768px) {
    p {
      max-width: 70%;
      margin: auto;
    }
  }

  .button-row {
    flex-direction: row-reverse;
  }
`
export const StyledModalHeader = styled(ModalHeader)`
  border: none;

  svg {
    cursor: pointer;
  }
`

export default styled(Modal)``
