import React, { Component } from 'react';

import ConfirmButton from '../Button/Confirm';
import BoxWithCollapse from './BoxWithCollapse';
import StyledModal, { StyledFooter, StyledBody } from './style';

class DataProtectionOverviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      functionalActivated: false
    };
  }

  render() {
    const { isOpen, onConfirmPreferences, preferencesConfirmed } = this.props;
    const onFunctionalActiveChange = (activated) => {
      this.setState({ functionalActivated: activated });

    }

    return (
      <>
        <StyledModal size='lg' centered isOpen={ isOpen } fade={ false } backdrop="static">
          <StyledBody>
            <h3 className="text-center mb-4">Data protection overview</h3>
            <p className="text-center mb-5 text-bold-600">
              This website uses cookies to improve your experience while you navigate through the website. Of these, the
              cookies that are categorized as necessary are stored on your browser as they are essential for the
              functioning of the basic functions of the website. You also have the option to reject these cookies.
              However, refusing some of these cookies may affect your browsing experience.
            </p>
            <BoxWithCollapse title="Necessary" active="always">
              <p className="text-bold-600">
                Necessary cookies are absolutely essential for the website to function properly. These cookies guarantee
                basic functionality and security features of the website.
              </p>
            </BoxWithCollapse>
            <BoxWithCollapse title="Functional" active="manual" preferencesConfirmed={ preferencesConfirmed }
                             onFunctionalActiveChange={ onFunctionalActiveChange }/>
          </StyledBody>
          <StyledFooter>
            <ConfirmButton onClick={ () => onConfirmPreferences(this.state.functionalActivated) }>Submit
              Preferences</ConfirmButton>
          </StyledFooter>
        </StyledModal>
      </>
    );
  }
}

export default DataProtectionOverviewModal;
