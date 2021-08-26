import { useContext, useEffect } from 'react';
import AppContext, { SET_TITLE } from '../App/Context';
import Content from './Content';
import { DataPrivacyProvider } from './Context';

function DataPrivacy() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      'type': SET_TITLE,
      'payload': 'Data Privacy'
    });
  }, [dispatch]);

  return (
    <DataPrivacyProvider>
      <Content/>
    </DataPrivacyProvider>
  );
}

export default DataPrivacy;
