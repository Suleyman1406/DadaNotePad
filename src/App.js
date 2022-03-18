import Header from "./Components/Header/Header";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
const Container = styled.div`
  text-align: center;
  min-height: 80vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
