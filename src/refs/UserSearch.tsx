import { useState, useRef } from 'react';

type User = {
  name: string;
  age: number;
};

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [foundUser, setFoundUser] = useState<User | undefined>();
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setFoundUser(foundUser);
  };

  return (
    <div>
      <label htmlFor='user-search'>User Search</label>
      <input ref={inputRef}
        type='text'
        id='user-search'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Find User</button>

      <div>{foundUser && `${foundUser.name}, ${foundUser.age}`}</div>
    </div>
  );
};

export default UserSearch;
