import "./App.css";
import Header from "./assets/component/Header/header";
import Main from "./assets/component/Header/Main/main";
import TodoContextProvider from "./Provider/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <Header></Header>
      <Main></Main>
    </TodoContextProvider>
  );
}

export default App;
