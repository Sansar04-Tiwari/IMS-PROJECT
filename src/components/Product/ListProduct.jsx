import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ListProduct = () => {

    const [products, setProduct] = useState([])
    const [allProducts, setAllProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [updateProduct, setupdateProduct] = useState({
        productname: '',
        categoryid: '',
    })

    const [categorys, setcategory] = useState([])

    useEffect(() => {

        const getListProduct = async () => {

            try {
                const response = await axios.get('https://processing-management-system-api.vercel.app/api/products');

                const res = await axios.get('https://processing-management-system-api.vercel.app/api/categories')

                const value = await response.data;

                const cats = await res.data;

                setProduct(value);
                setAllProducts(value);
                setcategory(cats)

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        getListProduct();
    }, []);

    const handleFilteration = (e) => {
        e.preventDefault();

        if (e.target.value === '') {
            setProduct(allProducts);
        }
        else {
            const filterItem = allProducts.filter((item) =>
                item.name.toLowerCase().includes(e.target.value)
            );
            setProduct(filterItem);
        }
    }

    const handleEdit = (id, productname, categoryid) => {
        setEditingId(id);
        setupdateProduct({ productname, categoryid });
    };

    const handleInputChange = (e) => {
        setupdateProduct((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleUpdate = async (productId) => {

        const selectedCategory = categorys.find(category => category._id === updateProduct.categoryid);

        try {
            await axios.put(`https://processing-management-system-api.vercel.app/api/products/${productId}`, {
                name: updateProduct.productname,
                category: {
                    _id: updateProduct.categoryid,
                     category_name: selectedCategory.category_name,
                }
            });
            // Update the local state with the new category name
            setProduct((prev) => prev.map((item) => item._id === productId ? {
                ...item, name: updateProduct.productname, category: {
                    _id: updateProduct.categoryid,
                     category_name: selectedCategory.category_name,
                }
            } : item));





            setEditingId(null); // Stop editing

        } catch (error) {
            console.error('There was an error updating the category!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://processing-management-system-api.vercel.app/api/products/${id}`);

            setProduct(products.filter(products => products._id !== id));
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
                                    <h4 className="mb-3">Product List</h4>
                                    <p className="mb-0">The product list effectively dictates product presentation and provides <br></br>space to list your products and offering in the most appealing way.</p>
                                </div>
                                <Link to='/dashboard/addproduct' className="btn btn-primary add-list">Add Product</Link>
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
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Unit of Measure</th>
                                            {/* <th>Color</th>
                                            <th>Weight</th> */}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            products.map((item, index) => (
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
                                                                {item.sku}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {
                                                            editingId === item._id ? (
                                                                <input
                                                                    type="text"
                                                                    name='productname'
                                                                    value={updateProduct.productname}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'
                                                                />
                                                            ) : (
                                                                <div>{item.name}</div>
                                                            )}
                                                    </td>
                                                    <td>{item.description}</td>
                                                    <td>{
                                                        editingId === item._id ? (
                                                            <select name="categoryid" value={updateProduct.categoryid} onChange={handleInputChange} className='form-control'>
                                                                <option value="select" >Select</option>
                                                                {
                                                                    categorys.map((item, index) => (
                                                                        <option key={index} value={item._id}>{item.category_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        ) : (
                                                            <div>{item.category.category_name}</div>
                                                        )}</td>
                                                    <td>{item.unitOfMeasure}</td>
                                                    {/* <td>{item.attributes.color}</td> */}
                                                    {/* <td>{item.attributes.weight}</td> */}
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            {
                                                                editingId === item._id ? (
                                                                    <Link className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save"
                                                                        onClick={() => handleUpdate(item._id)}><SaveOutlinedIcon /></Link>
                                                                ) : (
                                                                    <Link className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                                                        onClick={() => handleEdit(item._id, item.name, item.category._id)}><ModeOutlinedIcon /></Link>
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

export default ListProduct
