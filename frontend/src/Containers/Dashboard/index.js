import { useContext, useEffect } from 'react';

import Context, { SET_TITLE } from '../App/Context';

function Dashboard() {
  const { _, dispatch } = useContext(Context);

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
