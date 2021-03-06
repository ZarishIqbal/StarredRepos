import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { useState } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import MainPage from "./MainPage";
import mainReducer from "./reducers";
import SecondPage from "./SecondPage";

//Panels to navigate between pages
function TabPanel(props) {
  if (props.index == 0) return <MainPage />;
  else return <SecondPage />;
}
//main App
function App() {
  let store = createStore(mainReducer, applyMiddleware(thunk));
  const [value, setValue] = useState(0);
  const handleChange = ({ nativeEvent }) => {
    let val = nativeEvent.target.innerText == "STARRED REPOSITORIES" ? 1 : 0;
    setValue(val);
  };
  return (
    <Provider store={store}>
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Github Language Stats" />
            <Tab label="Starred Repositories" />
          </Tabs>
        </AppBar>
        <TabPanel index={value} />
      </div>
    </Provider>
  );
}

export default App;
