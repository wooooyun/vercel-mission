import Router from "./pages/Router";

function App() {
  return (
    <div className="min-h-screen flex justify-center py-[10px]">
      <div className="w-[390px] h-[763px] relative bg-white border border-black overflow-hidden" >
        <Router />
      </div>
    </div>
  );
}


export default App;
