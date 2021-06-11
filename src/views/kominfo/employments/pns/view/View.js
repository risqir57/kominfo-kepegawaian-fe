import React, { Fragment } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	Media,
	Row,
	Col,
	Button,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
	FormGroup,
	Form,
	Input,
	Label,
} from 'reactstrap';
import { Edit, Trash, Info, User } from 'react-feather';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';
import { history } from '../../../../../history';
import Radio from '../../../../../components/@vuexy/radio/RadioVuexy';
import userImg from '../../../../../assets/img/portrait/small/avatar-s-18.jpg';
import '../../../../../assets/scss/pages/users.scss';
import 'flatpickr/dist/themes/light.css';
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss';
import Personal from './Personal';
import Employment from './Employment';
class UserView extends React.Component {
	state = {
		activeTab: '1',
	};

	toggle = tab => {
		this.setState({
			activeTab: tab,
		});
	};

	render() {
		return (
			<Fragment>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<CardTitle>Account</CardTitle>
							</CardHeader>
							<CardBody>
								<Row className="mx-0" col="12">
									<Col className="pl-0" sm="12">
										<Media className="d-sm-flex d-block">
											<Media className="mt-md-1 mt-0" left>
												<Media
													className="rounded mr-2"
													object
													src={userImg}
													alt="Generic placeholder image"
													height="112"
													width="112"
												/>
											</Media>
											<Media body>
												<Row>
													<Col sm="9" md="6" lg="5">
														<div className="users-page-view-table">
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">Nama</div>
																<div>Crystal Hamilton</div>
															</div>
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">NIP</div>
																<div>0482947839</div>
															</div>
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">Email</div>
																<div className="text-truncate">
																	<span>crystalhamilton@gmail.com</span>
																</div>
															</div>
														</div>
													</Col>
													<Col md="12" lg="5">
														<div className="users-page-view-table">
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">Status</div>
																<div
																	style={{
																		display: 'flex',
																		flexDirection: 'row',
																		justifyContent: 'center',
																		alignItems: 'center',
																		alignContent: 'center',
																	}}>
																	<div
																		className="bg-success"
																		style={{
																			height: '10px',
																			width: '10px',
																			borderRadius: '50%',
																			display: 'inline-block',
																			margin: '0 5px',
																		}}
																	/>
																	active
																</div>
															</div>
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">No. HP</div>
																<div>+62 8233172688</div>
															</div>
															<div className="d-flex user-info">
																<div className="user-info-title font-weight-bold">Satker</div>
																<div>
																	<span>Admin</span>
																</div>
															</div>
														</div>
													</Col>
												</Row>
											</Media>
										</Media>
									</Col>
									<Col className="mt-1 pl-0" sm="12">
										<Button.Ripple className="mr-1" color="primary" outline>
											<Link to="/kominfo/employments/pns/1/edit">
												<Edit size={15} />
												<span className="align-middle ml-50">Edit</span>
											</Link>
										</Button.Ripple>
										<Button.Ripple color="danger" outline>
											<Trash size={15} />
											<span className="align-middle ml-50">Delete</span>
										</Button.Ripple>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12">
						<Card>
							<CardBody className="pt-2">
								<Nav tabs>
									<NavItem>
										<NavLink
											className={classnames({
												active: this.state.activeTab === '1',
											})}
											onClick={() => {
												this.toggle('1');
											}}>
											<User size={16} />
											<span className="align-middle ml-50">Data Personal</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={classnames({
												active: this.state.activeTab === '2',
											})}
											onClick={() => {
												this.toggle('2');
											}}>
											<Info size={16} />
											<span className="align-middle ml-50">Data Kepegawaian</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={classnames({
												active: this.state.activeTab === '3',
											})}
											onClick={() => {
												this.toggle('3');
											}}>
											<Info size={16} />
											<span className="align-middle ml-50">Data Lain-lain</span>
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent activeTab={this.state.activeTab}>
									<TabPane tabId="1">
										<Personal />
									</TabPane>
									<TabPane tabId="2">
										<Employment />
									</TabPane>
									<TabPane tabId="3">
										<p>
											Reference site about Lorem Ipsum, giving information on its origins, as well
											as a random Lipsum generator.
										</p>
									</TabPane>
								</TabContent>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Fragment>
		);
	}
}
export default UserView;
