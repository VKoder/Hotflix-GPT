import { Provider } from 'react-redux';
import Body from './components/Body';
import './index.css';
import appStore from './store/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
      {/* <div className="overflow-hidden"> */}
      <Body/>
      {/* </div> */}
    </Provider>
    </>
  );
}

export default App;
