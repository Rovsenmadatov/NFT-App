import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import Modal from "../components/Modal"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import Input from "../components/Input"
import { modalFunc } from "../redux/modalSlice"
import { createDataFunc, uptadeDataFunc } from "../redux/dataSlice"
import { useLocation, useNavigate } from "react-router-dom"



const Product = () => {
 
  const {modal} = useSelector(state =>state.modal)
  const {data ,keyword} = useSelector(state =>state.data)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [productInfo, setProductinfo] = useState({ name:"" , price:"" , url:""})


  const onChangeFunc= (e , type) =>{
      if(type=="url"){
          setProductinfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
      }else{
          setProductinfo(prev => ({...prev, [e.target.name]: e.target.value}))
      }}

      console.log(productInfo)
      const loc= location?.search.split('=')[1]

      useEffect(()=>{
        if(loc){
          setProductinfo(data.find(dt=> dt.id == loc))
        }
      },[loc])

      console.log(productInfo)

  const buttonFunc=()=>{
  dispatch(createDataFunc({...productInfo, id: data.length + 1}))
  dispatch(modalFunc())

  }


  const buttonUptadeFunc = () => {
    dispatch(uptadeDataFunc({...productInfo, id:loc}))
    dispatch(modalFunc())
    navigate("/")
  }

 
  const contentModal=(
    <>
    <Input  type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e,"name")} />
    <Input  type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e,"price")} />
    <Input  type={"file"} placeholder={"Resim Sec"} name={"url"} id={"url"} onChange={e => onChangeFunc(e,"url")} />
    <Button btnText={loc ? "Ürün Güncelle " : "Ürün oluştur"}   onCLick={loc ? buttonUptadeFunc : buttonFunc } />
    
    
    </>
  )

 const filteredeItems = data.filter(dt =>dt.name.toLowerCase().includes(keyword))


  return (
    <div > 
      <div className="flex items-center flex-wrap">
        {
          filteredeItems?.map((dt,i) =>(
            <ProductCard  key={i} dt={dt} />

          ))
        }      
      </div>
    {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle " : "Ürün oluştur"}  />}
    </div>
  )
  
}

export default Product
