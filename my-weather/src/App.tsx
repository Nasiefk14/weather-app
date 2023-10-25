import Search from "./components/search/search";

function App() {

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
        <Search onSearchChange={function (value: string | undefined): void {
          throw new Error("Function not implemented.");
        } } />
        TEST
      </h1>
    </div>
  );
}

export default App;