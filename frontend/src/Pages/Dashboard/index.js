import { useContext, useEffect } from 'react';

import AppContext, { SET_TITLE } from '../../AppContext';

function Dashboard() {
  const { _, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: SET_TITLE,
      payload: 'Dashboard'
    });
  }, []);

  return (
    <>
    </>
  )
}

export default Dashboard;
