import search from "./assets/search.png";
import cook from "./assets/cooking.png";

function App() {
  return(
    <div className="flex flex-col justify-center items-center px-16">
      <h1 className="text-[3rem] text-white">MovieBox</h1>
      <div className="flex items-center justify-center bg-black w-[71%] mt-5 py-3 px-4 rounded-[30px] search ">
        <input type="search" className="bg-[#1f2123] flex-1 pr-3 text-[#a1a1a1] font-medium font-Raleway search_input" />
        <img src={search} alt="" className="w-[30px] h-[30px] cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        <img src={cook} alt="" className="w-[250px]" />
        <h4 className="mt-5 text-white font-bold text-[30px]">opps!</h4>
        <p className="text-white text-[18px]">sorry chief faruq is currently cooking this web app</p>
      </div>
    </div>
  )
}

export default App
