import React, { useEffect, useState } from "react";
import { fetchUserdata } from "../../Api/userData";

const Users = () => {
  const [userData, setUserDate] = useState(null);
  useEffect(() => {
    UserData();
  }, []);
  const UserData = async () => {
    let response = await fetchUserdata();
    setUserDate(response.data.message);
  };
  return (
    <>
      <span>This is the user Component</span>
      <span>{userData}</span>
    </>
  );
};

export default Users;
