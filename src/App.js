import NewBookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default App;
