import { useState } from "react"
import {BsThreeDots} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { deleteDataFunc, uptadeDataFunc } from "../redux/dataSlice"
import { modalFunc } from "../redux/modalSlice"
import { useNavigate } from "react-router-dom"





const ProductCard = ({dt}) => {
  const [openEdit,setOpenEdit] = useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

const uptadeFunc= () =>{
  dispatch(modalFunc())
  setOpenEdit(false)
  navigate(`/?uptade=${dt?.id}`)
}

  return (
    <div className="w-[200px] h-[200px] relative rounded-md m-2">
     <img  src={dt?.url}  className=" absolute w-full h-full  rounded-md"   alt="Dosya Eki" />
     <div className="absolute left-0 bottom-0 bg-blue-600 text-white w-full">
      <div className="text-lg font-semibold">{dt?.name}</div>
      <div>{dt?.price}$</div>
     </div>
     <div onClick={()=>setOpenEdit(!openEdit)} className="absolute  top-0 right-2">
     <BsThreeDots color="white" size={24} />
     </div>
      { openEdit && (
          <div className="top-5 right-2 p-2 text-sm absolute bg-black border border-white text-white">
            <div onClick={()=>dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">Sil</div>
            <div onClick={uptadeFunc} className="cursor-pointer">Güncelle</div>
          </div>

      )
      }


    </div>
  )

}

export default ProductCard
