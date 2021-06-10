import React from 'react';
import StatisticsCard from '../../../../components/@vuexy/statisticsCard/StatisticsCard';
import { Archive } from 'react-feather';
import { revenueGeneratedSeries, revenueGenerated } from './StatisticsData';

class RevenueGenerated extends React.Component {
	render() {
		return (
			<StatisticsCard
				icon={<Archive className="success" size={22} />}
				iconBg="success"
				stat="97.5k"
				statTitle="Activity Chart"
				options={revenueGenerated}
				series={revenueGeneratedSeries}
				type="area"
			/>
		);
	}
}
export default RevenueGenerated;
