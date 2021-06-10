import React from 'react';
import { Row, Col } from 'reactstrap';
import Select from 'react-select';
import SubscribersGained from '../../ui-elements/cards/statistics/SubscriberGained';
import RevenueGenerated from '../../ui-elements/cards/statistics/RevenueGenerated';
import QuaterlySales from '../../ui-elements/cards/statistics/QuaterlySales';
import OrdersReceived from '../../ui-elements/cards/statistics/OrdersReceived';
import CustomersChart from '../../ui-elements/cards/analytics/Customers';
import DispatchedOrders from './DispatchedOrders';
import '../../../assets/scss/pages/dashboard-analytics.scss';
import '../../../assets/scss/plugins/forms/react-select/_react-select.scss';

let $primary = '#7367F0',
	$danger = '#EA5455',
	$warning = '#FF9F43',
	$info = '#00cfe8',
	$primary_light = '#9c8cfc',
	$warning_light = '#FFC085',
	$danger_light = '#f29292',
	$info_light = '#1edec5',
	$stroke_color = '#e8e8e8',
	$label_color = '#e7eef7',
	$white = '#fff';

const graphs = ['Statistik Pegawai', 'RB & SPIP', 'Organisasi & Total Laksana', 'Formasi & Mutasi'];

const colourOptions = [
	{ value: 'all', label: 'Seluruh Satker' },
	{ value: 'blue', label: 'Satker A' },
	{ value: 'purple', label: 'Satker B' },
	{ value: 'red', label: 'Satker C' },
	{ value: 'orange', label: 'Satker D' },
];

class KominfoDashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Row className="my-1">
					<Col md="6" sm="12">
						<h4 className="text-bold-600">Dashboard</h4>
					</Col>
					<Col md="6" sm="12">
						<Select
							className="React"
							classNamePrefix="select"
							defaultValue={colourOptions[0]}
							name="color"
							options={colourOptions}
						/>
					</Col>
				</Row>
				<Row className="match-height">
					<Col lg="3" md="6" sm="6">
						<SubscribersGained />
					</Col>
					<Col lg="3" md="6" sm="6">
						<RevenueGenerated />
					</Col>
					<Col lg="3" md="6" sm="6">
						<QuaterlySales />
					</Col>
					<Col lg="3" md="6" sm="6">
						<OrdersReceived />
					</Col>
				</Row>
				<Row>
					{graphs.map((graph, index) => (
						<Col key={index.toString()} lg="6" md="6" className="text-center align-middle">
							<CustomersChart
								title={graph}
								type={index % 2 ? 'donut' : 'pie'}
								primary={$primary}
								warning={$warning}
								danger={$danger}
								primaryLight={$primary_light}
								warningLight={$warning_light}
								dangerLight={$danger_light}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<Col sm="12">
						<DispatchedOrders />
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default KominfoDashboard;
