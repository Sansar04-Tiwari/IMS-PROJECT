import React from 'react'

const AddCategory = () => {
  return (
    <>
     <div className="content-page">
     <div className="container-fluid add-form-list">
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Add Sale</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="page-list-returns.html" data-toggle="validator">
                            <div className="row">                                  
                                <div className="col-md-6">                      
                                    <div className="form-group">
                                        <label>Date *</label>
                                        <input type="text" className="form-control" placeholder="Date"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Reference No *</label>
                                        <input type="text" className="form-control" placeholder="Enter Reference No" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Biller *</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>Test Biller</option>
                                        </select>
                                    </div> 
                                </div>  
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Customer *</label>
                                        <input type="text" className="form-control" placeholder="Enter Customer Name" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>   
                                <div className="col-md-6"> 
                                    <div className="form-group">
                                        <label>Order Tax *</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>No Text</option>
                                            <option>GST @5%</option>
                                            <option>VAT @10%</option>
                                        </select>
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Order Discount</label>
                                        <input type="text" className="form-control" placeholder="Discount"/>
                                    </div>
                                </div> 
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Shipping</label>
                                        <input type="text" className="form-control" placeholder="Shpping"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Attach Document</label>
                                        <input type="file" className="form-control image-file" name="pic" accept="image/*"/>
                                    </div>
                                </div>
                                <div className="col-md-6"> 
                                    <div className="form-group">
                                        <label>Sale Status *</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>Completed</option>
                                            <option>Pending</option>
                                        </select>
                                    </div>
                                </div> 
                                <div className="col-md-6"> 
                                    <div className="form-group">
                                        <label>Payment Status *</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>Pending</option>
                                            <option>Due</option>
                                            <option>Paid</option>
                                        </select>
                                    </div>
                                </div> 
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Sale Note *</label>
                                        <div id="quill-tool">
                                            <button className="ql-bold" data-toggle="tooltip" data-placement="bottom" title="Bold"></button>
                                            <button className="ql-underline" data-toggle="tooltip" data-placement="bottom" title="Underline"></button>
                                            <button className="ql-italic" data-toggle="tooltip" data-placement="bottom" title="Add italic text <cmd+i>"></button>
                                            <button className="ql-image" data-toggle="tooltip" data-placement="bottom" title="Upload image"></button>
                                            <button className="ql-code-block" data-toggle="tooltip" data-placement="bottom" title="Show code"></button>
                                        </div>
                                        <div id="quill-toolbar">
                                        </div>
                                    </div>
                                </div> 
                            </div>                            
                            <button type="submit" className="btn btn-primary mr-2">Add Sale</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default AddCategory
