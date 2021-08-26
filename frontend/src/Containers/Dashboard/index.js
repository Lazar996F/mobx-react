import { useContext, useEffect } from 'react';

import Context, { SET_TITLE } from '../App/Context';

function Dashboard() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: SET_TITLE,
      payload: 'Dashboard'
    });
  }, [dispatch]);

  return (
    <>
    </>
  )
}

export default Dashboard;
