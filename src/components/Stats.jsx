import {StatisticsData} from '../components/index'


const Stats = () => {
  return (
    <div className='stats-container'>
        {StatisticsData.map((Data)=>(
            <div key={Data.id}>
                <h4>{Data.value}</h4>
                <p>{Data.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Stats