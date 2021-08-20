import {useEffect} from 'react'
import PageTitle from '../Components/PageTitle';

function Dashboard(setTitle){
  useEffect(() => {
    setTitle('Dashboard');
  },[])
  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequuntur ea eum sapiente unde.</p>
    </>
  )
}

export default Dashboard;
