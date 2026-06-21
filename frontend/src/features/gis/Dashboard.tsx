import React, { useEffect } from 'react'
import GISMap from './component/GISMap'
import RiskCard from './component/RiskCard'
import Legend from './component/Legend'
import type { RiskCardType } from './types/RiskType'
import apiClient from '@/app/apiClient'

const Dashboard = () => {

	const Risks: RiskCardType[] = [
		{
			risk: "critical",
			barangays: [
				{name: "Tumaga", link: ""},
				{name: "Mercedes", link: ""},
			]
		},
		{
			risk: "high",
			barangays: null
		},
		{
			risk: "medium",
			barangays: null
		},
		{
			risk: "low",
			barangays: null
		},
	]

	const riskList = Risks.map(({risk, barangays}, index) => 
		<RiskCard 
			key={index}
			risk={risk}
			barangays={barangays}
			/>
	);

	useEffect(() => {
		const getInfo = async () => {
			const data = await apiClient.get('/api/barangays/')

			console.log(data)
		}	

		getInfo();
	}, [])

  	return (
    	<>
			<Legend />
			<div className='absolute top-4 right-4 grid grid-cols-2 gap-2 z-2 w-1/4'>
				{riskList}
			</div>
      		<GISMap />
    	</>
  	)
} 

export default Dashboard