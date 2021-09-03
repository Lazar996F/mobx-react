import EndUser from './EndUser';
import ProfessionalUser from './ProfessionalUser';
import Tooltip from '../Tooltip';

function UserRoleView({ role }) {
  return (
    <>
      { role === 'End Users' && <Tooltip title={ role }><EndUser/></Tooltip> }
      { role === 'Professional Users' && <Tooltip title={ role }><ProfessionalUser/></Tooltip> }
      { role === 'Professional Users,End Users' &&
      <>
        <Tooltip title="Professional Users">
          <ProfessionalUser role={ role }/>
        </Tooltip>
        <Tooltip title="End Users">
          <EndUser />
        </Tooltip>
      </> }
    </>
  );
}

export default UserRoleView;
