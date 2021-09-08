import React, { useState, useEffect } from 'react';
import DataProtectionOverviewModal from '../../Components/DataProtectionOverviewModal';
import AcceptCookiesModal from '../../Components/AcceptCookiesModal';


function CookiesAcceptation() {
  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted') === 'true') setOpenCookies(false)
    else setOpenCookies(true);
  }, []);

  const [ isOpenCookies, setOpenCookies ] = useState(false);
  const [ isOpenProtection, setOpenProtection ] = useState(false);

  const toggleCookiesModal = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setOpenCookies(!isOpenCookies);
  }

  const onMoreChoicesClick = () => {
    setOpenCookies(false);
    setOpenProtection(true);
  }

  const toggleProtectionModal = () => {
    setOpenProtection(!isOpenProtection);
    setOpenCookies(true);
  }

  return (
    <>
      <DataProtectionOverviewModal
        isOpen={ isOpenProtection }
        toggle={ toggleProtectionModal }
      />
      <AcceptCookiesModal
        isOpen={ isOpenCookies }
        toggle={ toggleCookiesModal }
        onMoreChoicesClick={ onMoreChoicesClick }
      />
    </>
  );
}

export default CookiesAcceptation;
