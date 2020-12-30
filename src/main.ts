import { User } from './interface';
import { getUsers } from './user';

function main(): void  {
  const users: User[] = getUsers();
  
  if (users.length === 0) {
    console.error('Error: no person could be found.');

    return;
  }
  
  for (const u of users) {
    console.log(u.name);
  }
}

main();
