import Pages from './pages/Pages';
import Category from "./components/Category"
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      <img src="https://i.imgur.com/Egc4p1w.png" alt="" />
        <Logo to={"/"}></Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  aligh-items: center;
  svg{
    font-size: 10rem;
  }
`


export default App;
