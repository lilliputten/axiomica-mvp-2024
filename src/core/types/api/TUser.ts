export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
};

type TUsersResponse = {
  users: TUser[];
};

export const fetchUsers = (url: string) => {
  return fetch(url).then<TUsersResponse>((r) => r.json());
};
