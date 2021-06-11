import React from 'react';
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { User, Info, Share } from 'react-feather';
import AccountTab from './Account';
import InfoTab from './Information';
import SocialTab from './Social';
import '../../../../../assets/scss/pages/users.scss';
class UserEdit extends React.Component {
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
			<Row>
				<Col sm="12">
					<Card>
						<CardBody className="pt-2">
							<TabContent activeTab={this.state.activeTab}>
								<TabPane tabId="1">
									<AccountTab />
								</TabPane>
							</TabContent>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}
export default UserEdit;
