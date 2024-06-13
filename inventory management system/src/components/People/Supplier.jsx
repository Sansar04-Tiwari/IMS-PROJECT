import React from 'react'

const Supplier = () => {
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
                            <th>
                                <div className="checkbox d-inline-block">
                                    <input type="checkbox" className="checkbox-input" id="checkbox1"/>
                                    <label for="checkbox1" className="mb-0"></label>
                                </div>
                            </th>
                            <th>Company Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>GST No</th>
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
                            <td>Fruits Supply</td>
                            <td>Max Conversion</td>
                            <td>max@gmail.com</td>
                            <td>0123456789</td>
                            <td>Petaling</td>
                            <td>USA</td>
                            <td>1234</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Footwear Supply</td>
                            <td>Paige Turner</td>
                            <td>paige@gmail.com</td>
                            <td>0125856789</td>
                            <td>Orlando</td>
                            <td>USA</td>
                            <td>1235</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Furniture Supply</td>
                            <td>Barb Ackue</td>
                            <td>barb@gmail.com</td>
                            <td>0123246789</td>
                            <td>Miami</td>
                            <td>USA</td>
                            <td>1236</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Food Supply</td>
                            <td>Ira Membrit</td>
                            <td>ira@gmail.com</td>
                            <td>0123458719</td>
                            <td>Francisco</td>
                            <td>UK</td>
                            <td>1237</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Grocery Supply</td>
                            <td>Pete Sariya</td>
                            <td>pete@gmail.com</td>
                            <td>0111456789</td>
                            <td>Petaling</td>
                            <td>USA</td>
                            <td>1238</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Packing Supply</td>
                            <td>Rock lai</td>
                            <td>rock@gmail.com</td>
                            <td>0123452289</td>
                            <td>whopping </td>
                            <td>UK</td>
                            <td>1239</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Fish Supply</td>
                            <td>Terry Aki</td>
                            <td>terry@gmail.com</td>
                            <td>0123205789</td>
                            <td>Suzhou</td>
                            <td>USA</td>
                            <td>1240</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Cloth Supply</td>
                            <td>Cliff Hanger</td>
                            <td>cliff@gmail.com</td>
                            <td>0189556789</td>
                            <td>Guilin</td>
                            <td>UK</td>
                            <td>1241</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
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
                            <td>Toy Supply</td>
                            <td>Alex john</td>
                            <td>alex@gmail.com</td>
                            <td>0123456123</td>
                            <td>Nanjing</td>
                            <td>USA</td>
                            <td>1242</td>
                            <td>
                                <div className="d-flex align-items-center list-action">
                                    <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i className="ri-eye-line mr-0"></i></a>
                                    <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
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

export default Supplier
