import './card.css'
export default function CardHeader({title}) {
  return (
    <div className='card-header'>
        <p className='text-information'> {title}</p>
    </div>
  )
}
