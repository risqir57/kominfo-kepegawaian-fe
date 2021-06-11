import React from 'react';
import Select from 'react-select';
import { Media, Row, Col, Button, Form, Input, Label, FormGroup } from 'reactstrap';
import Radio from '../../../../../components/@vuexy/radio/RadioVuexy';
import userImg from '../../../../../assets/img/portrait/small/avatar-s-18.jpg';
import '../../../../../assets/scss/plugins/forms/react-select/_react-select.scss';
import { history } from '../../../../../history';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss';
class UserAccountTab extends React.Component {
	state = {
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
	render() {
		return (
			<Row>
				<Col md="6" sm="12">
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
				<Col md="6" sm="12">
					<Form onSubmit={e => e.preventDefault()}>
						<Row>
							<Col md="12" sm="12">
								<FormGroup>
									<Label for="nip">NIP</Label>
									<Input type="text" defaultValue="crystal" id="nip" placeholder="NIP" />
								</FormGroup>
							</Col>
							<Col md="12" sm="12">
								<FormGroup>
									<Label for="satker">Satuan Kerja</Label>
									<Input
										type="text"
										defaultValue="crystal"
										id="satker"
										placeholder="Satuan Kerja"
									/>
								</FormGroup>
							</Col>
						</Row>
					</Form>
				</Col>
				<Col sm="12">
					<Form onSubmit={e => e.preventDefault()}>
						<Row>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="name">Nama Lengkap</Label>
									<Input type="text" defaultValue="crystal" id="name" placeholder="Nama Lengkap" />
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="birthDate">Tempat Lahir</Label>
									<Input
										type="text"
										defaultValue="crystal"
										id="birthDate"
										placeholder="Tempat Lahir"
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="officeEmail">Email Resmi</Label>
									<Input
										type="email"
										defaultValue="crystalhamilton@kominfo.co.id"
										id="officeEmail"
										placeholder="Email"
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="birthDate">Tanggal Lahir</Label>
									<Flatpickr
										className="form-control"
										value={this.state.birthDate}
										onChange={date => {
											this.setState({ birthDate: date });
										}}
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="email">Email Pribadi</Label>
									<Input
										type="email"
										defaultValue="crystalhamilton@gmail.com"
										id="email"
										placeholder="Email"
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
									<Label for="telphone">Telepon</Label>
									<Input type="tel" id="telphone" placeholder="+120939093" />
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="role">Golongan Darah</Label>
									<Select
										className="React"
										classNamePrefix="select"
										defaultValue={this.state.blood[0]}
										name="color"
										options={this.state.blood}
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="phone">Nomor HP</Label>
									<Input type="tel" id="phone" placeholder="+629873984792" />
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="agam">Agama</Label>
									<Select
										className="React"
										classNamePrefix="select"
										defaultValue={this.state.agama[0]}
										name="color"
										options={this.state.agama}
									/>
								</FormGroup>
							</Col>
							<Col md="6" sm="12">
								<FormGroup>
									<Label for="merrid">Status Marital</Label>
									<Select
										className="React"
										classNamePrefix="select"
										defaultValue={this.state.merrid[0]}
										name="color"
										options={this.state.merrid}
									/>
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
									<Label for="education">Pendidikan</Label>
									<Input type="text" id="education" placeholder="ex: SMA, S1, S2, S3" />
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
									<Input
										type="textarea"
										name="text"
										id="address"
										rows="4"
										placeholder="Alamat lengkap"
									/>
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
				</Col>
			</Row>
		);
	}
}
export default UserAccountTab;
