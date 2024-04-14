const Button = ({onCLick, btnText}) => {
  return (
    <button className="w-full rounded-md border-none h-10 bg-blue-600 mt-3 text-white flex items-center justify-center " onClick={onCLick}> {btnText}</button>
  )
}

export default Button
