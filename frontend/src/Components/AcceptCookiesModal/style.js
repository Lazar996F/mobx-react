import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

  export default styled(Modal)`
  max-width: 600px;
  .modal-content {
    border: 0;
    border-radius: 0;
  }
`;

export const StyledBody = styled(ModalBody)`
  padding: 3em;
`;

export const StyledFooter = styled(ModalFooter)`
  border-top: 0;
justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
