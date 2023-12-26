import BarChart from '../components/analytics/BarChart'

export default function Page() {
  

  return (
    <>
    <div>
      <div className="flex gap-5" name="Game">
        <select name="select">
          <option value="value1">1</option>
          <option value="value2" selected>2</option>
          <option value="value3">3</option>
        </select>
      </div>
    </div>
      {/* <BarChart data={[{type: 'bar', x: [1, 2, 3], y: [2, 5, 3]}]} layout={{width: 1000, height: 500, title: ''}}></BarChart> */}
    </>
  )

}