import React from 'react'
import GISMap from './component/GISMap'
import RiskCard from './component/RiskCard'
import type { RiskCardType } from './types/RiskType'

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

  	return (
    	<>
			<div className='absolute top-4 right-4 grid grid-cols-2 gap-2 z-2 w-1/4'>
				{riskList}
			</div>
      		<GISMap />
    	</>
  	)
} 

export default Dashboard