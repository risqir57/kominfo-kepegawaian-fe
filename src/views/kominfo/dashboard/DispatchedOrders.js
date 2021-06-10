import React from 'react';
import { Card, CardHeader, CardTitle, Table, UncontrolledTooltip } from 'reactstrap';
import avatar1 from '../../../assets/img/portrait/small/avatar-s-5.jpg';

class DispatchedOrders extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader>
					<CardTitle>User Activity</CardTitle>
				</CardHeader>
				<Table responsive className="dashboard-table table-hover-animation mb-0 mt-1">
					<thead>
						<tr>
							<th>ID</th>
							<th>STATUS</th>
							<th>USER</th>
							<th>SATKER</th>
							<th>LOCATION</th>
							<th>LAST LOGIN</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>#879985</td>
							<td>
								<div
									className="bg-success"
									style={{
										height: '10px',
										width: '10px',
										borderRadius: '50%',
										display: 'inline-block',
										marginRight: '5px',
									}}
								/>
								<span>Online</span>
							</td>
							<td className="p-1">
								<ul className="list-unstyled users-list m-0 d-flex">
									<li className="avatar pull-up">
										<img src={avatar1} alt="avatar" height="30" width="30" id="avatar1" />
										<UncontrolledTooltip placement="bottom" target="avatar1">
											Vinnie Mostowy
										</UncontrolledTooltip>
									</li>
								</ul>
							</td>
							<td>Satker A</td>
							<td>Jakarta</td>
							<td>26-07-2018 14:58</td>
						</tr>
						<tr>
							<td>#156897</td>
							<td>
								<div
									className="bg-success"
									style={{
										height: '10px',
										width: '10px',
										borderRadius: '50%',
										display: 'inline-block',
										marginRight: '5px',
									}}
								/>
								<span>Online</span>
							</td>
							<td className="p-1">
								<ul className="list-unstyled users-list m-0 d-flex">
									<li className="avatar pull-up">
										<img src={avatar1} alt="avatar" height="30" width="30" id="avatar1" />
										<UncontrolledTooltip placement="bottom" target="avatar1">
											Vinnie Mostowy
										</UncontrolledTooltip>
									</li>
								</ul>
							</td>
							<td>Satker B</td>
							<td>Jakarta</td>
							<td>26-07-2018 14:58</td>
						</tr>
						<tr>
							<td>#568975</td>
							<td>
								<div
									className="bg-danger"
									style={{
										height: '10px',
										width: '10px',
										borderRadius: '50%',
										display: 'inline-block',
										marginRight: '5px',
									}}
								/>
								<span>Offline</span>
							</td>
							<td className="p-1">
								<ul className="list-unstyled users-list m-0 d-flex">
									<li className="avatar pull-up">
										<img src={avatar1} alt="avatar" height="30" width="30" id="avatar1" />
										<UncontrolledTooltip placement="bottom" target="avatar1">
											Vinnie Mostowy
										</UncontrolledTooltip>
									</li>
								</ul>
							</td>
							<td>Satker C</td>
							<td>Bekasi</td>
							<td>26-07-2018 14:58</td>
						</tr>
						<tr>
							<td>#245689</td>
							<td>
								<div
									className="bg-danger"
									style={{
										height: '10px',
										width: '10px',
										borderRadius: '50%',
										display: 'inline-block',
										marginRight: '5px',
									}}
								/>
								<span>Offline</span>
							</td>
							<td className="p-1">
								<ul className="list-unstyled users-list m-0 d-flex">
									<li className="avatar pull-up">
										<img src={avatar1} alt="avatar" height="30" width="30" id="avatar1" />
										<UncontrolledTooltip placement="bottom" target="avatar1">
											Vinnie Mostowy
										</UncontrolledTooltip>
									</li>
								</ul>
							</td>
							<td>Satker D</td>
							<td>Bogor</td>
							<td>26-07-2018 14:58</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}
export default DispatchedOrders;
