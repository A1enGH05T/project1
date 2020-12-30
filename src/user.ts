import { User } from './interface';

export function getUsers(): User[] {
  const users: User[] = [
    {
      name: 'user 1',
      pass: 'pass 1',
      age: 12
    },
    {
      name: 'user 2',
      pass: 'abasfasdf',
      age: 13
    },
    {
      name: 'user 3',
      pass: 'abasfasdf',
      age: 14
    },
    {
      name: 'user 4',
      pass: 'abasfasdf',
      age: 15
    }
  ];

  return users;
}
