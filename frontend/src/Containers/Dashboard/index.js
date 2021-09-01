import { useContext, useEffect } from 'react';

import Context, { SET_TITLE_SUBTITLE } from '../App/Context';

function Dashboard() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: SET_TITLE_SUBTITLE,
      payload: {
        title: 'Dashboard',
        subtitle: 'Active and archive Data Privacy records'
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    </>
  )
}

export default Dashboard;
