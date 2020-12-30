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
      pass: 'abasfasdfa',
      age: 13
    },
    {
      name: 'user 3',
      pass: 'abasfasdfb',
      age: 14
    },
    {
      name: 'user 4',
      pass: 'abasfasdfc',
      age: 15
    },
    {
      name: 'user 5',
      pass: 'abasfasdfd',
      age: 16
    },
    {
      name: 'user 6',
      pass: 'abasfasdfe',
      age: 17
    },
  ];

  return users;
}
