import Router from "./router";
import { Template } from "./components";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <Template>
        <Router />
      </Template>
      <GlobalStyle />
    </>
  );
}

export default App;
