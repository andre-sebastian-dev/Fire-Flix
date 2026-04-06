import RoutesApp from "./routes";
 import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="app">
    <ToastContainer autoClose={1500}/>
    <RoutesApp/>
    </div>
  );
}

export default App;
