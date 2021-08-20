import {useEffect} from 'react'

function Dashboard(setTitle){
  useEffect(() => {
    setTitle('Dashboard');
  },[])
  return (
    <>
    </>
  )
}

export default Dashboard;
