'use client';
import { observer } from 'mobx-react';
import BarChart from '../components/analytics/Plot'
import usersStore from "../stores/UsersStore";
import AnalyticsOption from '../components/analytics/AnalyticsOption';

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
        <AnalyticsOption></AnalyticsOption>
      </div>
      </>
    )
  }

  
  return getPage()
}

export default observer(AnalyticsPage) 