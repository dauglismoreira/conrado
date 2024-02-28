import './index.css'

interface ButtonPrimary {
  text: string,
  onClick: () => void,
  classStyle?: string,
  bgCol?: string,
  className?:string
}

export default function ButtonPrimary({text, onClick, className, classStyle, bgCol}: ButtonPrimary){
  return <button className={`btn-primary ${className}`}
    style={classStyle ? {borderColor: classStyle, color: classStyle, backgroundColor: bgCol} : {}}
  onClick={onClick}>{text}</button>
}