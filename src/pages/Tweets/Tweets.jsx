import { useState, useEffect } from 'react';

import UsersList from '../../components/UsersList/UsersList';
import { Btn, LinkTo, FilterWrapper, Select } from './Tweets.styled';

import getAllUsers from '../../services/usersData';
import useLocalStorage from '../../helpers/useLocalStorage';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [filterValue, setFilterValue] = useLocalStorage(
    'filterValue',
    'show all'
  );

  const onHandleChange = event => {
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    try {
      getAllUsers().then(response => {
        setUsers(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <FilterWrapper>
        <label>
          Filter
          <Select value={filterValue} onChange={onHandleChange}>
            <option value="show all">Show all</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </Select>
        </label>
        <p>{filterValue.toUpperCase()}</p>
      </FilterWrapper>
      <LinkTo to="/">
        <Btn>Back</Btn>
      </LinkTo>

      <UsersList users={users} changeFilter={filterValue} />
    </>
  );
};

export default Tweets;
