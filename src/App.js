import { Header } from "./components/Header/Header.component";
import { Banner } from "./components/Banner/Banner.component";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <main
        style={{
          width: "100%",
          height: "1000px",
          overflow: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* <button style={{ margin: 5, fontSize: 16 }}>Test</button> */}
      </main>
    </>
  );
}

export default App;
