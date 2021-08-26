import EndUser from './EndUser';
import ProfessionalUser from './ProfessionalUser';

function UserRoleIcon({role}) {
  return (
    <>
      {role==='End user' ? <EndUser/> : <ProfessionalUser/>}
    </>
  );
}

export default UserRoleIcon;
