const App = () => {
  const [buttonText, setButtonText] = React.useState("Click me"); //array destructuring
  const [classesList, setClassesList] = React.useState("");
  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClassesList("green-btn");
  };
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  ); // fuctional component that return jsx code
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />); // user componemt
