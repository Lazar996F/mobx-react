import { useContext, useEffect } from 'react';
import AppContext, { SET_TITLE_SUBTITLE } from '../App/Context';
import Content from './Content';
import { DataPrivacyProvider } from './Context';

function DataPrivacy() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      'type': SET_TITLE_SUBTITLE,
      payload: {
        title: 'Data Privacy',
        subtitle: 'Active and archive Data Privacy records'
      }
    });
  }, [dispatch]);

  return (
    <DataPrivacyProvider>
      <Content/>
    </DataPrivacyProvider>
  );
}

export default DataPrivacy;
