import Card from "./components/Card/Card";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <div className="bg-(--cream) min-h-screen flex items-center justify-center flex-col">
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
