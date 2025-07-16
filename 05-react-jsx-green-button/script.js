const App = () => {
  const [buttonText, setButtonText] = React.useState("Click me"); //array destructuring

  const onButtonClick = () => {
    setButtonText("Hello from React");
  };
  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  ); // fuctional component that return jsx code
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />); // user componemt
