import React, { useState, useEffect } from 'react';

import DataProtectionOverviewModal from '../../Components/DataProtectionOverviewModal';
import AcceptCookiesModal from '../../Components/AcceptCookiesModal';

function CookiesAcceptation() {
  const [ isOpenCookies, setOpenCookies ] = useState(false);
  const [ isOpenProtection, setOpenProtection ] = useState(false);
  const [preferencesConfirmed, setPreferencesConfirmed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted') === 'true') setOpenCookies(false)
    else setOpenCookies(true);
  }, []);

  const onCookiesAccepted = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setOpenCookies(!isOpenCookies);
  }

  const onMoreChoicesClick = () => {
    setOpenCookies(false);
    setOpenProtection(true);
  }

  const onConfirmPreferences = (functionalActivated) => {
    setOpenProtection(!isOpenProtection);
    setOpenCookies(true);
    setPreferencesConfirmed(functionalActivated);
  }

  return (
    <>
      <DataProtectionOverviewModal
        isOpen={ isOpenProtection }
        onConfirmPreferences={ onConfirmPreferences }
        preferencesConfirmed={preferencesConfirmed}
      />
      <AcceptCookiesModal
        isOpen={ isOpenCookies }
        onCookiesAccepted={ onCookiesAccepted }
        onMoreChoicesClick={ onMoreChoicesClick }
      />
    </>
  );
}

export default CookiesAcceptation;
