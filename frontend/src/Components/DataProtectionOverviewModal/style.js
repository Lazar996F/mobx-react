import styled from 'styled-components'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';


export const StyledFooter = styled(ModalFooter)`
  justify-content: flex-start;
  border-top: 0;
  padding-left:3em;
  padding-bottom: 3em;
`;

export const StyledBody = styled(ModalBody)`
  padding: 3em;
`;

export default styled(Modal)`
  max-width: 600px;
  .modal-content {
    border: 0;
    border-radius: 0;
  }
`;
