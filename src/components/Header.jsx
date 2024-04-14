import { MdAssignmentAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";






const Header = () => {

    const dispatch=useDispatch()
    
  return (
    <div className="flex items-center justify-between p-5 bg-blue-600 text-white ">
      <div className="text-2xl">NFT Uygulaması</div>

      <div className="flex items-center gap-5  ">
        <div >

            <select onChange={e=> dispatch(sortingDataFunc(e.target.value))} className="rounded-lg  px-1 xl:text-2xl md:text-xl   text-black">
                <option  value="asc">Artan</option>
                <option value="desc">Azalan</option>
            </select>
        </div>
        <div>
            <input onChange={e=> dispatch(searchDataFunc(e.target.value))} className="rounded-xl text-black px-5" type="text" placeholder="Arama yapınız..." />
        </div>
        <div onClick={()=>dispatch(modalFunc())} className="mx-4 bg-blue-900  h-10 w-10 rounded-full flex items-center justify-center cursor-pointer ">
        <MdAssignmentAdd size={24}/>
        </div>
      </div>
    </div>
  )
}

export default Header
