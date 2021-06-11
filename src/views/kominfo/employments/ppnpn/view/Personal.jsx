import React, { useState } from 'react';
import { Row, Col, Button, FormGroup, Form, Input, Label } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';
import { history } from '../../../../../history';
import Radio from '../../../../../components/@vuexy/radio/RadioVuexy';
import '../../../../../assets/scss/pages/users.scss';
import 'flatpickr/dist/themes/light.css';
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss';

const initiallPersonal = {
	blood: [
		{ value: 'pilih', label: 'Silahkan Pilih' },
		{ value: 'A', label: 'A' },
		{ value: 'O', label: 'O' },
	],
	agama: [
		{ value: 'pilih', label: 'Silahkan Pilih' },
		{ value: 'islam', label: 'Islam' },
		{ value: 'katolik', label: 'Katolik' },
		{ value: 'hindu', label: 'Hindu' },
		{ value: 'budha', label: 'Budha' },
	],
	merrid: [
		{ value: 'pilih', label: 'Silahkan Pilih' },
		{ value: 'islam', label: 'Pilihan A' },
		{ value: 'katolik', label: 'Pilihan B' },
		{ value: 'hindu', label: 'Pilihan C' },
		{ value: 'budha', label: 'Pilihan D' },
	],
	birthDate: new Date(),
};

const Personal = props => {
	const [state, setState] = useState(initiallPersonal);
	return (
		<Form>
			<Row>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="birthDate">Tempat Lahir</Label>
						<Input type="text" defaultValue="crystal" id="birthDate" placeholder="Tempat Lahir" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="birthDate">Tanggal Lahir</Label>
						<Flatpickr
							className="form-control"
							value={state.birthDate}
							onChange={date => {
								setState({ ...state, birthDate: date });
							}}
						/>
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label className="d-block mb-50">Jenis Kelamin</Label>
						<div className="d-inline-block mr-1">
							<Radio label="Laki-Laki" color="primary" defaultChecked={true} name="gender" />
						</div>
						<div className="d-inline-block mr-1">
							<Radio label="Wanita" color="primary" defaultChecked={false} name="gender" />
						</div>
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="role">Golongan Darah</Label>
						<Select
							className="React"
							classNamePrefix="select"
							defaultValue={state.blood[0]}
							name="color"
							options={state.blood}
						/>
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="agam">Agama</Label>
						<Select
							className="React"
							classNamePrefix="select"
							defaultValue={state.agama[0]}
							name="color"
							options={state.agama}
						/>
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="merrid">Status Marital</Label>
						<Select
							className="React"
							classNamePrefix="select"
							defaultValue={state.merrid[0]}
							name="color"
							options={state.merrid}
						/>
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="telphone">Telepon</Label>
						<Input type="tel" id="telphone" placeholder="+120939093" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="education">Pendidikan</Label>
						<Input type="text" id="education" placeholder="ex: SMA, S1, S2, S3" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="jurusan">Jurusan Pendidikan</Label>
						<Input type="text" id="jurusan" placeholder="ex: Akutansi" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="school">Sekolah/Universitas</Label>
						<Input type="text" id="school" placeholder="ex: Binus" />
					</FormGroup>
				</Col>
				<Col md="12" sm="12">
					<FormGroup>
						<Label for="address">Alamat</Label>
						<Input type="textarea" name="text" id="address" rows="4" placeholder="Alamat lengkap" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="kelurahan">Kelurahan</Label>
						<Input type="text" id="kelurahan" placeholder="ex: Cilandak" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="kecamatan">Kecamatan</Label>
						<Input type="text" id="kecamatan" placeholder="ex: Kby. Baru" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="city">Kota</Label>
						<Input type="text" id="city" placeholder="ex: Jakarta Selatan" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="provience">Provinsi</Label>
						<Input type="text" id="provience" placeholder="ex: DKI Jakarta" />
					</FormGroup>
				</Col>
				<Col md="6" sm="12">
					<FormGroup>
						<Label for="zipcode">Kode Pos</Label>
						<Input type="number" id="zipcode" placeholder="ex: DKI Jakarta" />
					</FormGroup>
				</Col>
				<Col className="d-flex justify-content-end flex-wrap mt-2" sm="12">
					<Button.Ripple
						onClick={() => history.push('/kominfo/employments/pns')}
						className="mr-1"
						color="primary">
						Save Changes
					</Button.Ripple>
					<Button.Ripple color="flat-warning">Reset</Button.Ripple>
				</Col>
			</Row>
		</Form>
	);
};

export default Personal;
