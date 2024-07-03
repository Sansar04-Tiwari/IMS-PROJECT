import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function ListChallan() {
  const [challan, setChallan] = useState([])


    const [editingId, setEditingId] = useState(null);
    const [updateChallan, setupdateChallan] = useState('')


    useEffect(() => {

        const getListChallan = async () => {

            try {
                const response = await axios.get('https://processing-management-system-api.vercel.app/api/challan');

                const value = await response.data;

                setChallan(value);

            } catch (error) {
                console.error('Error fetching challan:', error);
            }
        }

        getListChallan();
    }, []);

    const handleFilteration = (e) => {
        e.preventDefault();

        const filterItem = challan.filter((item) => item.name.toLowerCase().includes(e.target.value));
        setChallan(filterItem);
    }

    const handleEdit = (id, currentName) => {
        setEditingId(id);
        setupdateChallan(currentName);
    };

    const handleInputChange = (e) => {
        setupdateChallan(e.target.value);
    };

    const handleUpdate = async (ChallanId) => {
        try {
            await axios.put(`https://processing-management-system-api.vercel.app/api/challan/${ChallanId}`, {
                name: updateChallan
            });


            // Update the local state with the new category name
            setChallan((prev) => prev.map((item) => item._id === ChallanId ? { ...item, name: updateChallan } : item));


            setEditingId(null); // Stop editing

        } catch (error) {
            console.error('There was an error updating the category!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://processing-management-system-api.vercel.app/api/challan/${id}`);

            setChallan(challan.filter(challan => challan._id !== id));
        }
        catch (error) {
            console.error('There was an error deleting the category!', error);
        }
    };

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Challan List</h4>
                                    <p className="mb-0">The Challan list effectively dictates product presentation and provides <br></br>space to list your products and offering in the most appealing way.</p>
                                </div>
                                <Link to='/dashboard/addchallan' className="btn btn-primary add-list">Add Challan</Link>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            <label>Search:
                                                <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0" onChange={handleFilteration} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <table className="data-tables table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            {/* <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" className="mb-0"></label>
                                                </div>
                                            </th> */}
                                            <th>Inventory Id</th>
                                            <th>Product sku</th>
                                            <th>Product Name</th>
                                            <th>Product Description</th>
                                            <th>Product Category</th>
                                            <th>Product Unit of Measure</th>
                                            <th>Product CreatedAt</th>
                                            <th>Supplier Name</th>
                                            <th>Supplier Email</th>
                                            <th>Supplier Phone_No</th>
                                            <th>Supplier GST_No</th>
                                            <th>Supplier Address</th>
                                            <th>Supplier City</th>
                                            <th>Supplier State</th>
                                            <th>Supplier Country</th>
                                            <th>Supplier CreatedAt</th>
                                            <th>Quantity</th>
                                            <th>Date Received</th>
                                            <th>Type</th>
                                            <th>Challan CreatedBy</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            challan.map((item, index) => (
                                                <tr className="odd" key={index}>
                                                    {/* <td className="sorting_1">
                                                        <div className="checkbox d-inline-block">
                                                            <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                            <label for="checkbox2" className="mb-0"></label>
                                                        </div>
                                                    </td> */}
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                {item._id}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.inventory.product.sku}</td>
                                                    <td>{item.inventory.product.name}</td>
                                                    <td>{item.inventory.product.description}</td>
                                                    <td>{item.inventory.product.category.category_name}</td>
                                                    <td>{item.inventory.product.unitOfMeasure}</td>
                                                    <td>{item.inventory.product.createdAt}</td>
                                                    <td>{item.inventory.supplier.name}</td>
                                                    <td>{item.inventory.supplier.email}</td>
                                                    <td>{item.inventory.supplier.phone_number}</td>
                                                    <td>{item.inventory.supplier.gst_number}</td>
                                                    <td>{item.inventory.supplier.address}</td>
                                                    <td>{item.inventory.supplier.city}</td>
                                                    <td>{item.inventory.supplier.state}</td>
                                                    <td>{item.inventory.supplier.country}</td>
                                                    <td>{item.inventory.supplier.createdAt}</td>
                                                    <td>{item.inventory.quantity}</td>
                                                    <td>{item.inventory.date_received}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.createdBy.name}</td>
                                                    <td>{item.createdBy.email}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            {/* {
                                                                editingId === item._id ? (
                                                                    <Link className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save"
                                                                        onClick={() => handleUpdate(item._id)}><SaveOutlinedIcon /></Link>
                                                                ) : (
                                                                    <Link className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                                                        onClick={() => handleEdit(item._id, item.name)}><ModeOutlinedIcon /></Link>
                                                                )
                                                            } */}
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
            </div>
        </>
    )
}

export default ListChallan