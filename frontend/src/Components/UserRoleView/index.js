import EndUser from './EndUser';
import ProfessionalUser from './ProfessionalUser';
import Tooltip from '../Tooltip';

function UserRoleView({ role }) {
  return (
    <>
      { role === 'End users' && <Tooltip title={ role }><EndUser/></Tooltip> }
      { role === 'Professional users' && <Tooltip title={ role }><ProfessionalUser/></Tooltip> }
      { role === 'Professional users,End users' &&
      <>
        <Tooltip title="Professional users">
          <ProfessionalUser role={ role }/>
        </Tooltip>
        <Tooltip title="End users">
          <EndUser />
        </Tooltip>
      </> }
    </>
  );
}

export default UserRoleView;
