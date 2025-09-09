import './cardHeader.css'
export default function CardHeader({title}) {
  return (
    <div className='card'>
        <p className='card-information'> {title}</p>
    </div>
  )
}
