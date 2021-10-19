import { Route, Switch } from "react-router";
import ConnectPage from "../pages/connect.page";
import UserListPage from "../pages/userList.page";

const App = () => {

  return (
    <Switch>
      <Route path='/connect' component={ConnectPage} />
      <Route path='/' component={UserListPage} />
    </Switch>
  )
}

export default App;