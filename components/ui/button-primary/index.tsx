import './index.css'

interface ButtonPrimary {
  text: string,
  onClick: () => void,
  classStyle: string,
  bgCol?: string,
}

export default function ButtonPrimary({text, onClick, classStyle, bgCol}: ButtonPrimary){
  return <button className="btn-primary" style={{borderColor: classStyle, color: classStyle, backgroundColor: bgCol}} onClick={onClick}>{text}</button>
}