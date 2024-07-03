import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const ListSupplier = () => {

    const [supplier, setSupplier] = useState([])

    const [editingId, setEditingId] = useState(null);
    const [updateSupplier, setupdateSupplier] = useState('')


    useEffect(() => {

        const getListSupplier = async () => {

            try {
                const response = await axios.get("https://processing-management-system-api.vercel.app/api/supplier");

                const value = await response.data;

                setSupplier(value);

            } catch (error) {
                console.error('Error fetching supplier:', error);
            }
        }

        getListSupplier();
    }, []);

    const handleEdit = (id, currentName) => {
        setEditingId(id);
        setupdateSupplier(currentName);
    };

    const handleInputChange = (e) => {
        setupdateSupplier(e.target.value);
    };

    const handleUpdate = async (supplierId) => {
        try {
            await axios.put(`https://processing-management-system-api.vercel.app/api/supplier/${supplierId}`, {
                name: updateSupplier
            });


            // Update the local state with the new category name
            setSupplier((prev) => prev.map((item) => item._id === supplierId ? {...item, name: updateSupplier } : item));


            setEditingId(null); // Stop editing

        } catch (error) {
            console.error('There was an error updating the category!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://processing-management-system-api.vercel.app/api/supplier/${id}`);

            setSupplier(supplier.filter(supplier => supplier._id !== id));
        }
        catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Suppliers List</h4>
                                    <p className="mb-0">Create and manage your vendor list, send and receive purchase orders – your online<br></br>
                                        Dashboard is your new back of house.</p>
                                </div>
                                <a href="page-add-supplier.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Supplier</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            {/* <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" className="mb-0"></label>
                                                </div>
                                            </th> */}
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone No.</th>
                                            <th>GST No</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            supplier.map((item, index) => (
                                                <tr key={index}>
                                                    {/* <td>
                                                        <div className="checkbox d-inline-block">
                                                            <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                            <label for="checkbox2" className="mb-0"></label>
                                                        </div>
                                                    </td> */}
                                                    <td>
                                                    {
                                                                editingId === item._id ? (
                                                                    <input
                                                                        type="text"
                                                                        value={updateSupplier}
                                                                        onChange={handleInputChange}
                                                                        className='form-control'
                                                                    />
                                                                ) : (
                                                                    <div>{item.name}</div>
                                                                )}
                                                    </td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone_number}</td>
                                                    <td>{item.gst_number}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.state}</td>
                                                    <td>{item.country}</td>
                                                    <td>
                                                        <div class="d-flex align-items-center list-action">
                                                        {
                                                                    editingId === item._id ? (
                                                                        <Link className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save"
                                                                            onClick={() => handleUpdate(item._id)}><SaveOutlinedIcon /></Link>
                                                                    ) : (
                                                                        <Link className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                                                            onClick={() => handleEdit(item._id, item.name)}><ModeOutlinedIcon /></Link>
                                                                    )
                                                                }
                                                                <Link className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                                                    onClick={() => handleDelete(item._id)}><DeleteOutlineOutlinedIcon /></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                {/*   
    <div className="modal fade" id="edit-note" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="popup text-left">
                        <div className="media align-items-top justify-content-between">                            
                            <h3 className="mb-3">Product</h3>
                            <div className="btn-cancel p-0" data-dismiss="modal"><i className="las la-times"></i></div>
                        </div>
                        <div className="content edit-notes">
                            <div className="card card-transparent card-block card-stretch event-note mb-0">
                                <div className="card-body px-0 bukmark">
                                    <div className="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">                                                    
                                        <div className="quill-tool">
                                        </div>
                                    </div>
                                    <div id="quill-toolbar1">
                                        <p>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital Marketing Course every week on Monday</p>
                                    </div>
                                </div>
                                <div className="card-footer border-0">
                                    <div className="d-flex flex-wrap align-items-ceter justify-content-end">
                                        <div className="btn btn-primary mr-3" data-dismiss="modal">Cancel</div>
                                        <div className="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            </div>
        </>
    )
}

export default ListSupplier
