import React, { Component } from 'react';

import ConfirmButton from '../Button/Confirm';
import StyledModal, { StyledFooter, StyledBody } from './style';
import Link from '../Link';

class AcceptCookiesModal extends Component {
  render() {
    const { isOpen, onCookiesAccepted, onMoreChoicesClick } = this.props;
    return (
      <>
        <StyledModal size='lg' centered isOpen={ isOpen } fade={ false } backdrop="static">
          <StyledBody>
            <h3 className="text-center mb-4">This website uses cookies</h3>
            <p className="text-center mb-5 text-bold-600">
              We use cookies to enable you to optimally use our website. Cookies that are necessary for
              the operation of the site are set.
              You can also allow cookies for statistical purposes. You can adjust the data protection
              settings or agree to all cookies directly.
              Privacy statement
            </p>
          </StyledBody>
          <StyledFooter>
            <ConfirmButton onClick={ onCookiesAccepted }>Accept All</ConfirmButton>
            <Link title="More Choices" onClick={ onMoreChoicesClick }/>
          </StyledFooter>
        </StyledModal>
      </>
    );
  }
}

export default AcceptCookiesModal;
