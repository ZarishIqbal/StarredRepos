import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import LanguageCard from './Components/LanguageCard';
import MainPage from './MainPage';
import mainReducer from './reducers';

function App() {
  let store = createStore(mainReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>

      <div >
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
