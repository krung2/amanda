import React, { useEffect } from 'react';
import ConnectHeaderComponent from "../components/connect/header/ConnectHeader.component";
import ConnectUserListComponent from "../components/connect/userList/userList.component";
import ConnectHooks from "../hooks/connect.hooks";

const ConnectPage = () => {

  const { connectList } = ConnectHooks();

  useEffect(() => {
    connectList();
  }, [])

  return (
    <>
      <ConnectHeaderComponent />
      <ConnectUserListComponent />
    </>
  )
}

export default ConnectPage;