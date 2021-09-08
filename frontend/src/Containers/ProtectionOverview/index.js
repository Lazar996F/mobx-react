import React from 'react';
import DataProtectionOverviewModal from '../../Components/DataProtectionOverviewModal';
import PageHeader from '../../Components/PageHeader';

function ProtectionOverview() {
  const [isOpen, setOpen] = React.useState(false);

  const openDataProtectionOverviewModal = () => {
    setOpen(true);
  }

  const toggle = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <PageHeader title="Modal Testing" subtitle="Testing modals for ciam"/>
      <button onClick={openDataProtectionOverviewModal}>Open Modal</button>
      <DataProtectionOverviewModal
        isOpen={isOpen}
        toggle={toggle}
      />
    </>
  );
}

export default ProtectionOverview;
