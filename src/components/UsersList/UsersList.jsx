import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import Container from "../Container/Container";

import { Btn, Wrapper } from "./UserList.styled";

function UsersList({ users, changeFilter }) {
  const [nextPage, setNextPage] = useState(3);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const onLoadMore = () => {
    setNextPage(nextPage + 3);
  };

  useEffect(() => {
    const filterByOptions = users.filter((user) => {
      switch (changeFilter) {
        case "show all":
          return true;
        case "follow":
          return (
            JSON.parse(localStorage.getItem(`${user.user}bgBtn`)) !== "#5CD3A8"
          );
        case "followings":
          return (
            JSON.parse(localStorage.getItem(`${user.user}bgBtn`)) === "#5CD3A8"
          );

        default:
          return null;
      }
    });

    setFilteredUsers(filterByOptions);
  }, [users, changeFilter, setFilteredUsers]);

  return (
    <Wrapper>
      <Container>
        {filteredUsers.slice(0, nextPage).map(({ id, ...props }) => {
          return <UserCard key={id} user={props}></UserCard>;
        })}
      </Container>
      {nextPage < users.length && filteredUsers.length !== 0 && (
        <Btn type="button" onClick={onLoadMore}>
          Load More
        </Btn>
      )}
      {filteredUsers.length === 0 && (
        <p style={{ color: "white", fontSize: "20px" }}>No users</p>
      )}
    </Wrapper>
  );
}

export default UsersList;
