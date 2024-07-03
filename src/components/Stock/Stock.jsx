import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Stock() {

    const [challan, setChallan] = useState([]);
    const [aggregatedChallan, setAggregatedChallan] = useState([]);

    useEffect(() => {
        const getListChallan = async () => {
            try {
                const response = await axios.get('https://processing-management-system-api.vercel.app/api/challan');
                const value = await response.data;
                setChallan(value);

                aggregateQuantities(value);
                
            } catch (error) {
                console.error('Error fetching challan:', error);
            }
        };

        getListChallan();
    }, []);


    const aggregateQuantities = (challans) => {
        const aggregated = challans.reduce((acc, item) => {
          const key = `${item.inventory.product.category.category_name}`;
          if (!acc[key]) {
            acc[key] = { ...item, totalQuantity: 0 };
          }
          acc[key].totalQuantity += item.inventory.quantity;
          return acc;
        }, {});
        setAggregatedChallan(Object.values(aggregated));
      };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://processing-management-system-api.vercel.app/api/challan/${id}`);

            setChallan(challan.filter(challan => challan._id !== id));
            aggregateQuantities(challan.filter((challan) => challan._id !== id));
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
                                    <h4 className="mb-3">Stock List</h4>
                                    <p className="mb-0">The Stock list effectively dictates product presentation and provides <br></br>space to list your products and offering in the most appealing way.</p>
                                </div>
                                <Link to='/dashboard/addproduct' className="btn btn-primary add-list">Add Product</Link>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            {/* <label>Search:
                                                <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0" onChange={handleFilteration} />
                                            </label> */}
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
                                            <th>Product Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            aggregatedChallan.map((item, index) => (
                                                <tr className="odd" key={index}>
                                                    <td>{item.inventory._id}</td>
                                                    <td>{item.inventory.product.name}</td>
                                                    <td>{item.inventory.product.category.category_name}</td>
                                                    <td>{item.totalQuantity}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
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

export default Stock