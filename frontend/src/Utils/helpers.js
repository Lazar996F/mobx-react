import moment from 'moment';

export const getInitials = (name) => {
  let initials = name.split(' ');

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
}

// returns current and formatted date with time
export const getCurrentDateTime = () => {
  const now = new Date();
  return moment(now).format('YYYY-MM-DD[T]HH:mm:ss');
}

// fetch policies from an api
export async function fetchPolicies() {
  const req = await fetch('https://mocki.io/v1/a2b3edc6-689b-4e76-b713-26b07912068d')
  return await req.json()
}


export async function fetchData(getData) {
  return await getData();
}

export const checkAndReturnUserRole = (role) => {
  switch (role) {
    case 'Professional Users':
      return {
        areProfessionalUsers: true,
        areEndUsers: false
      }
    case 'End Users':
      return {
        areProfessionalUsers: false,
        areEndUsers: true
      }
    case 'Professional Users,End Users':
      return {
        areProfessionalUsers: true,
        areEndUsers: true
      }
    default:
      return {
        areProfessionalUsers: false,
        areEndUsers: false
      }
  }
}


