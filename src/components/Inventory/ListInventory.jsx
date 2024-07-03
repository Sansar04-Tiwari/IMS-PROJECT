import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';


function ListInventory() {

  const [inventory, setInventory] = useState([]);
  const [listinventory,setlistinventory] = useState([])
  const [editingId, setEditingId] = useState(null);
  const [updateInventory, setupdateInventory] = useState('')

  useEffect(() => {
    const getListInventory = async (e) => {
      try {
        const response = await axios.get('https://processing-management-system-api.vercel.app/api/inventory');

        const value = await response.data;

        setInventory(value);
        setlistinventory(value);


      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getListInventory();
  }, [])

  const handleFilteration = (e) => {
    e.preventDefault();

    if (e.target.value === '') {
      setInventory(listinventory);
    }
    else {
      const filterItem = listinventory.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      );
      setInventory(filterItem);
    }
  }

  const handleEdit = (id, quantity) => {
    setEditingId(id);
    setupdateInventory(quantity);
  };

  const handleInputChange = (e) => {
    setupdateInventory(e.target.value);
  };

  const handleUpdate = async (inventoryId) => {
    try {
      await axios.put(`https://processing-management-system-api.vercel.app/api/inventory/${inventoryId}`, {
        quantity: updateInventory
      });


      // Update the local state with the new category name
      setInventory((prev) => prev.map((item) => item._id === inventoryId ? { ...item, quantity: updateInventory } : item));


      setEditingId(null); // Stop editing

    } catch (error) {
      console.error('There was an error updating the category!', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://processing-management-system-api.vercel.app/api/inventory/${id}`);

      setInventory(inventory.filter(inventory => inventory._id !== id));
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
              <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                <div>
                  <h4 className="mb-3">Inventry List</h4>
                  <p className="mb-0">The Inventory list effectively dictates product presentation and provides <br></br>space to list your products and offering in the most appealing way.</p>
                </div>
                <Link to='/dashboard/addproduct' className="btn btn-primary add-list">Add Inventory</Link>
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
                      <th>Product Code</th>
                      <th>Product Name</th>
                      <th>Product Decscription</th>
                      <th>Product Category</th>
                      <th>Unit of Measure</th>
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
                      <th>Date Received</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="ligth-body">
                    {
                      inventory.map((item, index) => (
                        <tr className="odd" key={index}>
                          {/* <td className="sorting_1">
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                    <label for="checkbox2" className="mb-0"></label>
                                                </div>
                                            </td> */}
                          <td>
                            {item.product.sku}
                          </td>
                          <td>
                            {item.product.name}
                          </td>
                          <td>
                            {item.product.description}
                          </td>
                          <td>
                            {item.product.category.category_name}
                          </td>
                          <td>
                            {item.product.unitOfMeasure}
                          </td>
                          <td>
                            {item.product.createdAt}
                          </td>
                          <td>
                            {item.supplier.name}
                          </td>
                          <td>
                            {item.supplier.email}
                          </td>
                          <td>
                            {item.supplier.phone_number}
                          </td>
                          <td>
                            {item.supplier.gst_number}
                          </td>
                          <td>
                            {item.supplier.address}
                          </td>
                          <td>
                            {item.supplier.city}
                          </td>
                          <td>
                            {item.supplier.state}
                          </td>
                          <td>
                            {item.supplier.country}
                          </td>
                          <td>
                            {item.supplier.createdAt}
                          </td>
                          <td>
                            {item.date_received}
                          </td>
                          <td>
                            {
                              editingId === item._id ? (
                                <input
                                  type="text"
                                  value={updateInventory.quantity}
                                  onChange={handleInputChange}
                                  className='form-control'
                                />
                              ) : (
                                <div>{item.quantity}</div>
                              )
                            }
                          </td>
                          <td>
                            <div className="d-flex align-items-center list-action">
                              {
                                editingId === item._id ? (
                                  <Link className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save"
                                    onClick={() => handleUpdate(item._id)}><SaveOutlinedIcon /></Link>
                                ) : (
                                  <Link className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                    onClick={() => handleEdit(item._id, item.quantity)}><ModeOutlinedIcon /></Link>
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
      </div>
    </>
  )
}

export default ListInventory