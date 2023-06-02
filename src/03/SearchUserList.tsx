import React, { useState, useMemo, useEffect } from "react";



function userItem({user}){
  return  <li key={user.id}>{user.first_name}</li>
}

const  UserItem =  React.memo(userItem)

export default function SearchUserList() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doFetch();
  }, []);

  const usersToShow = useMemo(() => {
    if (!users) return null;
    console.log(users)
    return users.data.filter((user) => user.first_name.includes(searchKey));
  }, [users, searchKey]);

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul key={searchKey}>
        {
        
        usersToShow &&
          usersToShow.length > 0 &&
          usersToShow
        .map((user) => {
            return <UserItem user={user} key={user.id} />;
          })
          
          
        // users?.data && users.data.map((user) => {
        //     return <li key={user.id}>{user.first_name}</li>;
        //   })
        }
      </ul>
    </div>
  );
}
