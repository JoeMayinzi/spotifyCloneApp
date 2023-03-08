import { createGlobalStyle } from "styled-components";
import StyledAside from "./components/aside/Aside";
import Aside from "./components/aside/Aside";
import StyledPageContent from "./components/pagecontent/PageContent";
import PageContent from "./components/pagecontent/PageContent";
import regular from "./fonts/Poppins-Regular.ttf";
import bold from "./fonts/Poppins-Bold.ttf";
import medium from "./fonts/Poppins-Medium.ttf";
import { Logo } from "./components/aside/Logo";
import { List } from "./components/aside/List";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Poppins";
  src: url(${regular}) format("ttf");
  font-weight: 400;
  }

  @font-face {
  font-family: "Poppins";
  src: url(${medium}) format("ttf");
  font-weight: 500;
  }

  @font-face {
  font-family: "Poppins";
  src: url(${bold}) format("ttf");
  font-weight: 700;
  }

  body {
    background: #202020;
    margin: 0;
    padding: 0;
    font-family: "Poppins";
  }

  main {
    display: flex;
  }

  h1, h2, h3 {
    font-weight: 700 ;
  }

  ul {
    padding-left: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Aside>
          <StyledAside>
            <Logo src="/images/Spotify_Logo_RGB_White.png" />
            <ul>
              <List>
                <i className="fa-solid fa-house"></i>
                Accueil
              </List>
              <List>
                <i class="fa-solid fa-magnifying-glass"></i>
                Rechercher
              </List>
              <List>
                <i class="fa-solid fa-book"></i>
                Accueil
              </List>
            </ul>
          </StyledAside>
        </Aside>
        <PageContent>
          <StyledPageContent></StyledPageContent>
        </PageContent>
      </main>
    </>
  );
}

export default App;
