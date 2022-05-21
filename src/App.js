import logo from './logo.svg';
import './App.css';

import NavMenue from './components/NavMenu';
// const Loader = x => Loadable({
//   loading: () => 'Cargando...',
//   loader: () => 
// });

// const TestComponent = Loader(() => import('./components/TestComponent'))
// const Invoices = Loader(() => import('./components/Invoices'))
function App() {
  return (
    <div className="App">
      <NavMenue/>
      <h1>Home</h1>
    </div>
  );
}

export default App;
