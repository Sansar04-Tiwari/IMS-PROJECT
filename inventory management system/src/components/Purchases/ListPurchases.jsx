import React from 'react'

const ListPurchases = () => {
  return (
    <>
      <div className="content-page">
     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                    <div>
                        <h4 className="mb-3">Purchase List</h4>
                        <p className="mb-0">A purchase dashboard enables purchasing manager to efficiently track, evaluate, <br></br>
                        and optimize all acquisition processes within a company.</p>
                    </div>
                    <a href="page-add-purchase.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Purchase</a>
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
                            <th>Date</th>
                            <th>Reference No</th>
                            <th>Supplier</th>
                            <th>Purchase Status</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Balance</th>
                            <th>Payment Status</th>
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
                            <td>01 jan 2021</td>
                            <td>PO201</td>
                            <td>Fruits Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>50.1</td>
                            <td>45.1</td>
                            <td>5.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>05 jan 2021</td>
                            <td>PO202</td>
                            <td>Footwear Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>40.5</td>
                            <td>38.1</td>
                            <td>2.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>06 jan 2021</td>
                            <td>PO251</td>
                            <td>Furniture Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>80.1</td>
                            <td>35.1</td>
                            <td>45.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>08 jan 2021</td>
                            <td>PO261</td>
                            <td>Food Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>30.1</td>
                            <td>15.1</td>
                            <td>15.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>09 jan 2021</td>
                            <td>PO271</td>
                            <td>Grocery Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>20.1</td>
                            <td>7.1</td>
                            <td>13.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>10 jan 2021</td>
                            <td>PO101</td>
                            <td>Packing Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>60.1</td>
                            <td>40.1</td>
                            <td>20.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>12 jan 2021</td>
                            <td>PO122</td>
                            <td>Fish Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>33.1</td>
                            <td>13.1</td>
                            <td>20.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>12 jan 2021</td>
                            <td>PO123</td>
                            <td>Cloth Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>10.1</td>
                            <td>8.1</td>
                            <td>2.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
                            <td>13 jan 2021</td>
                            <td>PO124</td>
                            <td>Toy Supply</td>
                            <td><div className="badge badge-success">Received</div></td>
                            <td>10.1</td>
                            <td>5.1</td>
                            <td>5.00</td>                            
                            <td><div className="badge badge-warning">Panding</div></td>
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
    </>
  )
}

export default ListPurchases
