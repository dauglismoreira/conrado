import './index.css'

interface ButtonPrimary {
  text: string,
  onClick: () => void,
  classStyle: string
}

export default function ButtonPrimary({text, onClick, classStyle}: ButtonPrimary){
  return <button className="btn-primary" style={{borderColor: classStyle, color: classStyle}} onClick={onClick}>{text}</button>
}