import { Tabs, } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import MainPage from './MainPage';
import mainReducer from './reducers';
import SecondPage from './SecondPage';
function TabPanel(props) {
  if (props.index != "STARRED REPOSITORIES")
    return <MainPage />
  else return <SecondPage />
}
function App() {
  let store = createStore(mainReducer, applyMiddleware(thunk))
  const [value, setValue] = useState(0)
  const handleChange = ({ nativeEvent }) => {
    console.log(nativeEvent.target.innerText)
    setValue(nativeEvent.target.innerText)
  }
  return (
    <Provider store={store}>

      <div >
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} >
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
