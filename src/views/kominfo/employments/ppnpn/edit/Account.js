import React, { Fragment } from 'react';
import Select from 'react-select';
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table } from 'reactstrap';
import { Check, Lock } from 'react-feather';
import Radio from '../../../../../components/@vuexy/radio/RadioVuexy';
import Checkbox from '../../../../../components/@vuexy/checkbox/CheckboxesVuexy';
import userImg from '../../../../../assets/img/portrait/small/avatar-s-18.jpg';
import '../../../../../assets/scss/plugins/forms/react-select/_react-select.scss';
import { history } from '../../../../../history';
import { navigationConfigKominfo } from '../../../../../configs/navigationConfig';
class UserAccountTab extends React.Component {
	state = {
		satker: [
			{ value: 'user', label: 'User' },
			{ value: 'staff', label: 'Staff' },
			{ value: 'satker', label: 'Satker' },
		],
	};
	render() {
		return (
			<Row>
				<Col sm="12">
					<Media className="mb-2">
						<Media className="mr-2 my-25" left href="#">
							<Media
								className="users-avatar-shadow rounded"
								object
								src={userImg}
								alt="user profile image"
								height="84"
								width="84"
							/>
						</Media>
						<Media className="mt-2" body>
							<Media className="font-medium-1 text-bold-600" tag="p" heading>
								Crystal Hamilton
							</Media>
							<div className="d-flex flex-wrap">
								<Button.Ripple className="mr-1" color="primary" outline>
									Change
								</Button.Ripple>
								<Button.Ripple color="flat-danger">Remove Avatar</Button.Ripple>
							</div>
						</Media>
					</Media>
				</Col>
				<Col sm="12">
					<Form onSubmit={e => e.preventDefault()}>
						<Row>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="username">Username</Label>
									<Input type="text" defaultValue="crystal" id="username" placeholder="Username" />
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label className="d-block mb-50">Status</Label>
									<div className="d-inline-block mr-1">
										<Radio label="Active" color="primary" defaultChecked={true} name="status" />
									</div>
									<div className="d-inline-block mr-1">
										<Radio label="Close" color="primary" defaultChecked={false} name="status" />
									</div>
									<div className="d-inline-block">
										<Radio label="Pending" color="primary" defaultChecked={false} name="status" />
									</div>
								</FormGroup>
							</Col>

							<Col md="6" sm="12">
								<FormGroup>
									<Label for="name">Name</Label>
									<Input type="text" defaultValue="Crystal Hamilton" id="name" placeholder="Name" />
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="role">Satker</Label>
									<Select
										className="React"
										classNamePrefix="select"
										defaultValue={this.state.satker[0]}
										name="color"
										options={this.state.satker}
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="email">Email</Label>
									<Input
										type="text"
										defaultValue="crystalhamilton@gmail.com"
										id="email"
										placeholder="Email"
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="company">NIP</Label>
									<Input
										type="text"
										id="nip"
										name="nip"
										defaultValue="0923648279"
										placeholder="NIP"
									/>
								</FormGroup>
							</Col>
							<Col sm="12">
								<div className="permissions border px-2">
									<div className="title pt-2 pb-0">
										<Lock size={19} />
										<span className="text-bold-500 font-medium-2 ml-50">Permissions</span>
										<hr />
									</div>
									<Table borderless responsive>
										<thead>
											<tr>
												<th>Module Permission</th>
												<th>Read</th>
												<th>Write</th>
												<th>Create</th>
												<th>Delete</th>
											</tr>
										</thead>
										<tbody>
											{navigationConfigKominfo.map((nav, index) =>
												'title' in nav && nav.id !== 'dashboard' ? (
													<tr key={index.toString()}>
														<td>{nav.title}</td>
														<td>
															<Checkbox
																color="primary"
																icon={<Check className="vx-icon" size={16} />}
																label=""
																defaultChecked={true}
															/>
														</td>
														<td>
															<Checkbox
																color="primary"
																icon={<Check className="vx-icon" size={16} />}
																label=""
																defaultChecked={false}
															/>
														</td>
														<td>
															<Checkbox
																color="primary"
																icon={<Check className="vx-icon" size={16} />}
																label=""
																defaultChecked={false}
															/>
														</td>
														<td>
															{' '}
															<Checkbox
																color="primary"
																icon={<Check className="vx-icon" size={16} />}
																label=""
																defaultChecked={true}
															/>
														</td>
													</tr>
												) : (
													<Fragment />
												)
											)}
										</tbody>
									</Table>
								</div>
							</Col>
							<Col className="d-flex justify-content-end flex-wrap mt-2" sm="12">
								<Button.Ripple
									onClick={() => history.push('/kominfo/employments/ppnpn')}
									className="mr-1"
									color="primary">
									Save Changes
								</Button.Ripple>
								<Button.Ripple color="flat-warning">Reset</Button.Ripple>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		);
	}
}
export default UserAccountTab;
