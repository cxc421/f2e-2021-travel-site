import { Header } from "./components/header/header.component";
function App() {
  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          height: "1000px",
          overflow: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ color: "black", margin: 0 }}>Test</h1>
      </main>
    </>
  );
}

export default App;
