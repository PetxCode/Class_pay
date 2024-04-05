import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      {user !== null ? <div>{children}</div> : <Navigate to="/login" />}
    </div>
  );
};

export default Private;
