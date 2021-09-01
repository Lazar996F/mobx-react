export const linkItems = [
  {
    title: "Dashboard",
    to: '/dashboard'
  },
  {
    title: "Companies",
    to: '/companies'
  },
  {
    title: "Branches",
    to: '/branches'
  },
  {
    title: "Users",
    to: '/users'
  },
  {
    title: "Terms of Service",
    to: '/service'
  },
  {
    title: "Data Privacy",
    to: '/privacy'
  },
  {
    title: "General settings",
    to: '/settings'
  }
]

export const getInitials = (name) => {
  let initials = name.split(' ');

  if(initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
}
