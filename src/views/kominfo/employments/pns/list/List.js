import React from 'react';
import {
	Card,
	CardBody,
	Input,
	Row,
	Col,
	UncontrolledDropdown,
	UncontrolledButtonDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	Button,
} from 'reactstrap';
import axios from 'axios';
import { ContextLayout } from '../../../../../utility/context/Layout';
import { AgGridReact } from 'ag-grid-react';
import { Edit, Trash2, ChevronDown, Clipboard, Printer, Download, Eye } from 'react-feather';
import { history } from '../../../../../history';
import '../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss';
import '../../../../../assets/scss/pages/users.scss';
import { Fragment } from 'react';
import BreadCrumbs from '../../../../../components/@vuexy/breadCrumbs/BreadCrumb';
class UsersList extends React.Component {
	state = {
		rowData: null,
		pageSize: 20,
		isVisible: true,
		reload: false,
		collapse: true,
		status: 'Opened',
		role: 'All',
		selectStatus: 'All',
		verified: 'All',
		department: 'All',
		defaultColDef: {
			sortable: true,
		},
		searchVal: '',
		columnDefs: [
			{
				headerName: 'ID',
				field: 'id',
				width: 150,
				filter: true,
				checkboxSelection: true,
				headerCheckboxSelectionFilteredOnly: true,
				headerCheckboxSelection: true,
			},
			{
				headerName: 'Nama',
				field: 'name',
				filter: true,
				width: 200,
				cellRendererFramework: params => {
					return (
						<div
							className="d-flex align-items-center cursor-pointer"
							onClick={() => history.push(`/kominfo/employments/pns/${params.data.id}`)}>
							<img
								className="rounded-circle mr-50"
								src={params.data.avatar}
								alt="user avatar"
								height="30"
								width="30"
							/>
							<span>{params.data.name}</span>
						</div>
					);
				},
			},
			{
				headerName: 'NIP',
				field: 'nip',
				filter: true,
				width: 250,
			},
			{
				headerName: 'Kelas Jabatan',
				field: 'kelasJabatan',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Golongan',
				field: 'golongan',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Satuan Kerja',
				field: 'role',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Pangkat',
				field: 'pangkat',
				filter: true,
				width: 150,
			},
			{
				headerName: 'TMT Jabatan',
				field: 'tmtJabatan',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Angka Kredit',
				field: 'angkaKredit',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Jenis Kelamin',
				field: 'jenisKelamin',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Tahun Lulus',
				field: 'thnLulus',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Jenjang',
				field: 'jenjang',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Jurusan',
				field: 'jurusan',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Agama',
				field: 'agama',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Tempat Lahir',
				field: 'tempatLahir',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Tanggal Lahir',
				field: 'tglLahir',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Pengangkatan',
				field: 'pengangkatan',
				filter: true,
				width: 150,
			},
			{
				headerName: 'BUP',
				field: 'bup',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Status',
				field: 'status',
				filter: true,
				width: 150,
			},
			{
				headerName: 'Actions',
				field: 'transactions',
				width: 150,
				cellRendererFramework: params => {
					return (
						<div className="actions cursor-pointer">
							<Eye
								className="mr-50"
								size={15}
								onClick={() => history.push(`/kominfo/employments/pns/${params.data.id}`)}
							/>
							<Edit
								className="mr-50"
								size={15}
								onClick={() => history.push(`/kominfo/employments/pns/${params.data.id}/edit`)}
							/>
							<Trash2
								size={15}
								onClick={() => {
									let selectedData = this.gridApi.getSelectedRows();
									this.gridApi.updateRowData({ remove: selectedData });
								}}
							/>
						</div>
					);
				},
			},
		],
	};

	async componentDidMount() {
		await axios.get('api/users/list').then(response => {
			let rowData = response.data;
			this.setState({ rowData });
		});
	}

	onGridReady = params => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	};

	filterData = (column, val) => {
		var filter = this.gridApi.getFilterInstance(column);
		var modelObj = null;
		if (val !== 'all') {
			modelObj = {
				type: 'equals',
				filter: val,
			};
		}
		filter.setModel(modelObj);
		this.gridApi.onFilterChanged();
	};

	filterSize = val => {
		if (this.gridApi) {
			this.gridApi.paginationSetPageSize(Number(val));
			this.setState({
				pageSize: val,
			});
		}
	};
	updateSearchQuery = val => {
		this.gridApi.setQuickFilter(val);
		this.setState({
			searchVal: val,
		});
	};

	refreshCard = () => {
		this.setState({ reload: true });
		setTimeout(() => {
			this.setState({
				reload: false,
				role: 'All',
				selectStatus: 'All',
				verified: 'All',
				department: 'All',
			});
		}, 500);
	};

	toggleCollapse = () => {
		this.setState(state => ({ collapse: !state.collapse }));
	};
	onEntered = () => {
		this.setState({ status: 'Opened' });
	};
	onEntering = () => {
		this.setState({ status: 'Opening...' });
	};

	onEntered = () => {
		this.setState({ status: 'Opened' });
	};
	onExiting = () => {
		this.setState({ status: 'Closing...' });
	};
	onExited = () => {
		this.setState({ status: 'Closed' });
	};
	removeCard = () => {
		this.setState({ isVisible: false });
	};

	render() {
		const { rowData, columnDefs, defaultColDef, pageSize } = this.state;
		return (
			<Fragment>
				<BreadCrumbs breadCrumbTitle="Pegawai" breadCrumbParent="Pegawai" breadCrumbActive="PNS" />
				<Row className="app-user-list">
					<Col sm="12">
						<Card>
							<CardBody>
								<div className="ag-theme-material ag-grid-table">
									<div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
										<div className="sort-dropdown">
											<UncontrolledDropdown className="ag-dropdown p-1">
												<DropdownToggle tag="div">
													1 - {pageSize} of 150
													<ChevronDown className="ml-50" size={15} />
												</DropdownToggle>
												<DropdownMenu right>
													<DropdownItem tag="div" onClick={() => this.filterSize(20)}>
														20
													</DropdownItem>
													<DropdownItem tag="div" onClick={() => this.filterSize(50)}>
														50
													</DropdownItem>
													<DropdownItem tag="div" onClick={() => this.filterSize(100)}>
														100
													</DropdownItem>
													<DropdownItem tag="div" onClick={() => this.filterSize(150)}>
														150
													</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</div>
										<div className="filter-actions d-flex">
											<Input
												className="mr-1 mb-1 mb-sm-0"
												style={{ width: '45%' }}
												type="text"
												placeholder="search..."
												onChange={e => this.updateSearchQuery(e.target.value)}
												value={this.state.searchVal}
											/>
											<div className="dropdown actions-dropdown mr-1">
												<UncontrolledButtonDropdown>
													<DropdownToggle className="px-2 py-75" color="white">
														Actions
														<ChevronDown className="ml-50" size={15} />
													</DropdownToggle>
													<DropdownMenu right>
														<DropdownItem tag="a">
															<Trash2 size={15} />
															<span className="align-middle ml-50">Delete</span>
														</DropdownItem>
														<DropdownItem tag="a">
															<Clipboard size={15} />
															<span className="align-middle ml-50">Archive</span>
														</DropdownItem>
														<DropdownItem tag="a">
															<Printer size={15} />
															<span className="align-middle ml-50">Print</span>
														</DropdownItem>
														<DropdownItem tag="a">
															<Download size={15} />
															<span className="align-middle ml-50">CSV</span>
														</DropdownItem>
													</DropdownMenu>
												</UncontrolledButtonDropdown>
											</div>
											<div>
												<Button.Ripple
													color="primary"
													onClick={() => history.push('/kominfo/employments/pns/1/edit')}>
													Add
												</Button.Ripple>
											</div>
										</div>
									</div>
									{this.state.rowData !== null ? (
										<ContextLayout.Consumer>
											{context => (
												<AgGridReact
													gridOptions={{}}
													rowSelection="multiple"
													defaultColDef={defaultColDef}
													columnDefs={columnDefs}
													rowData={rowData}
													onGridReady={this.onGridReady}
													colResizeDefault={'shift'}
													animateRows={true}
													floatingFilter={true}
													pagination={true}
													pivotPanelShow="always"
													paginationPageSize={pageSize}
													resizable={true}
													enableRtl={context.state.direction === 'rtl'}
												/>
											)}
										</ContextLayout.Consumer>
									) : null}
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default UsersList;
