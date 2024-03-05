import React, { useContext } from 'react'
import {ChartData} from 'chart.js';

const Chart = ( dataF: any ) => {
    const datasets: ChartData <'bar', {key: string, value: number} []> = {
        datasets: [{
          data: [dataF.map()],
          parsing: {
            xAxisKey: `{dataF.list.splice(0, 7)}`,
            yAxisKey: `{dataF.main.humidity}`
          }
        }],
      };
    
  return (
    <div className='Chart'>
      <div className="third_Container">
        <div className="header_Container">
        </div>
        <div className="content_Container">
          <div className="list_Container">
            {/* <h3 className="display_List_Container">Humidity - {data.humidity} </h3>
            <h3 className="display_List_Container">Visbility - {.visibility}</h3>
            <h3 className="display_List_Container">Wind Speed - {.speed}</h3>
            <h3 className="display_List_Container">Temp - {.temp}</h3> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Chart
