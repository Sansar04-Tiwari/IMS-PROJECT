import React from 'react'

const ListCategory = () => {
  return (
    <>
    <div class="content-page">
        <div classNameName="content-page">
     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <div>
                        <h4 className="mb-3">Category List</h4>
                        <p className="mb-0">Use category list as to describe your overall core business from the provided list. <br></br>
                        Click the name of the category where you want to add a list item. .</p>
                    </div>
                    <a href="page-add-category.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Category</a>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="table-responsive rounded mb-3">
                <table className="data-table table mb-0 tbl-server-info">
                    <thead className="bg-white text-uppercase">
                        <tr className="ligth ligth-data">
                            <th>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox1"/>
                                    <label for="checkbox1" className="mb-0"></label>
                                </div>
                            </th>
                            <th>Image</th>
                            <th>Code</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="ligth-body">
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox2"/>
                                    <label for="checkbox2" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    
                                    <div>
                                        Organic Cream
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>CREM01</td>
                            <td>Beauty</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox3"/>
                                    <label for="checkbox3" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                   
                                    <div>
                                        Rain Umbrella
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>UM01</td>
                            <td>Grocery</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox4"/>
                                    <label for="checkbox4" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                                                     
                                    <div>
                                        Serum Bottle
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>SEM01</td>
                            <td>Beauty</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox5"/>
                                    <label for="checkbox5" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                                                
                                    <div>
                                        Coffee Beans
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>COF01</td>
                            <td>Food</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox6"/>
                                    <label for="checkbox6" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    
                                                                <div>
                                        Book Shelves                                   
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>FUN01</td>
                            <td>Furniture</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox7"/>
                                    <label for="checkbox7" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    
                                    <div>
                                        Dinner Set                                  
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>DIS01</td>
                            <td>Grocery</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox8"/>
                                    <label for="checkbox8" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                   
                                    <div>
                                        Nike Shoes                               
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>NIS01</td>
                            <td>Shoes</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox9"/>
                                    <label for="checkbox9" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                   
                                    <div>
                                        Computer Glasses                               
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>COG01</td>
                            <td>Frames</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox10"/>
                                    <label for="checkbox10" className="mb-0"></label>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    
                                    <div>
                                        Alloy Jewel Set                   
                                        <p className="mb-0"><small>This is test Product</small></p>
                                    </div>
                                </div>
                            </td>
                            <td>AJS01</td>
                            <td>Jewellery</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                        href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

    </>
  )
}

export default ListCategory
