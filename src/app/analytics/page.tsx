'use client';
import { observer } from 'mobx-react';
import BarChart from '../components/analytics/BarChart'
import usersStore from "../stores/UsersStore";

function AnalyticsPage() {
  
  const getPage = () => {
    if (usersStore.currentUser?.role !== 'marketer') {
      return (
        <h1 className="text-red-500 text-2xl text-center">
          YOU DO NOT HAVE ACCESS TO THIS PAGE
        </h1>
      )
    }

    return (
      <>
      <div>
        <div className="flex gap-5">
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

  
  return getPage()
}

export default observer(AnalyticsPage) 