import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const App = ({ title }) => {
  const newTitle = title + 'Session';
  console.log(window);

  const handleClick = () => {
    console.log(newTitle);
  };

  return (
    <div className="App">
      <h1>{newTitle}</h1>
      <Header />
      <Button
        text="Don't Click Here"
        type="button"
        color="grey"
        handleOnClick={handleClick}
      />
    </div>
  );
};

export default App;
