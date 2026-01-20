import React from "react";
import { use } from "react";
import AuthContext from "../contests/AuthContests/AuthContexts";

const useAuth = () => {
  const AuthInfo = use(AuthContext);
  return AuthInfo;
};

export default useAuth;
