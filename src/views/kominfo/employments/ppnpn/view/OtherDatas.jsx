import classNames from 'classnames';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';
import {
	Row,
	Col,
	FormGroup,
	Form,
	Input,
	Label,
	Card,
	Collapse,
	CardHeader,
	CardTitle,
	CardBody,
} from 'reactstrap';
import styled from 'styled-components';
import { history } from '../../../../../history';
import { strToName, slugify } from '../../../../../utility/helper';

export const CardAction = styled(Card)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

const fields = [
	'Tinggi Badan',
	'Berat Badan',
	'Jenis Rambut',
	'Warna Rambut',
	'Bentuk Muka',
	'Warna Kulit',
	'Ciri Khas',
	'Cacat Tubuh',
	'Hobi',
	'Kode Filing Kabinet',
	'Kode Laci',
];

const moreActions = [
	'Arsip Pegawai',
	'Keluarga',
	'Pendidikan',
	'Oganisasi',
	'SIK',
	'Penugasan/SKP',
	'SPMJ/SPMT/SPP',
	'Sertifikasi',
	'Dokumen Lainnya',
];

const OtherDatas = () => {
	const initiallState = {
		collapse: true,
		status: 'Opened',
	};
	const [state, setState] = useState(initiallState);

	const toggle = () => {
		setState(state => ({ collapse: !state.collapse }));
	};

	const onExited = () => {
		setState({ ...state, status: 'Closed' });
	};

	const onEntered = () => {
		setState({ ...state, status: 'Opened' });
	};

	return (
		<Form>
			<Row>
				{fields.map((field, index) => (
					<Col key={index} md="6" sm="12">
						<FormGroup>
							<Label for={strToName(field)}>{field}</Label>
							<Input
								type="text"
								id={strToName(field)}
								name={strToName(field)}
								placeholder={field}
							/>
						</FormGroup>
					</Col>
				))}
			</Row>
			<Row>
				<Col md="12" sm="12">
					<Card
						outline
						color="secondary"
						className={classNames('card-action', {
							'card-collapsed': state.status === 'Closed',
							'card-shown': state.status === 'Opened',
						})}>
						<CardHeader>
							<CardTitle>Lainnya</CardTitle>
							<ChevronDown className="collapse-icon" size={15} onClick={toggle} />
						</CardHeader>
						<Collapse isOpen={state.collapse} onExited={onExited} onEntered={onEntered}>
							<CardBody>
								<Row>
									{moreActions.map((moreAction, index) => (
										<Col key={index} md="4" sm="6">
											<CardAction
												outline
												color="primary"
												onClick={() =>
													history.push(
														`/kominfo/employments/ppnpn/${index}/more-actions/${slugify(
															moreAction
														)}`
													)
												}>
												<CardHeader>
													<CardTitle className="h5">{moreAction}</CardTitle>
													<ChevronRight size={26} />
												</CardHeader>
											</CardAction>
										</Col>
									))}
								</Row>
							</CardBody>
						</Collapse>
					</Card>
				</Col>
			</Row>
		</Form>
	);
};

export default OtherDatas;
