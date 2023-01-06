import { memo, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginUserProveider } from "../../providers/LoginUserProvider";

import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <LoginUserProveider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProveider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
