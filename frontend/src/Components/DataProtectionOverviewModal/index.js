import React from 'react';
import StyledModal, {StyledModalBody, StyledModalHeader} from './style';

function DataProtectionOverviewModal({isOpen, toggle, action, toggleConfirm}) {
  return (
    <StyledModal size="lg" centered isOpen={isOpen} toggle={toggle}>
      <StyledModalHeader toggle={toggle} />
      <StyledModalBody>
        <h1>Body modal</h1>
      </StyledModalBody>
    </StyledModal>
  );
}

export default DataProtectionOverviewModal;
