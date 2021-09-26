import './App.css';
import Header from './components/Header/Header';
import Team from './components/Team/Team';

function App() {
  return (
    <div>

      {/* Header component */}
      <Header></Header>

      {/* Header component where data loaded useing useSet and useEffect */}
      <Team></Team>

    </div>
  );
}

export default App;
