import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleOnClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;

    return (
      <div>
        <label htmlFor='user-search'>User Search</label>
        <input
          type='text'
          id='user-search'
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleOnClick}>Find User</button>

        <div>{user && `${user.name}, ${user.age}`}</div>
      </div>
    );
  }
}

export default UserSearch;
