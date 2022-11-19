const Button = ({buttonName, buttonFunc}) => {
  return <button onClick={()=>{
    buttonFunc();
  }}>{buttonName}</button>
}

export default Button