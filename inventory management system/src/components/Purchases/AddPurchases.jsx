import React from 'react'

const AddPurchases = () => {
  return (
    <>
      <div className="content-page">
     <div className="container-fluid add-form-list">
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Add Purchase</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="page-list-purchase.html" data-toggle="validator">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="dob">Date *</label>
                                        <input type="date" className="form-control" id="dob" name="dob" />
                                    </div>
                                </div>  
                                <div className="col-md-6">                      
                                    <div className="form-group">
                                        <label>Purchase No *</label>
                                        <input type="text" className="form-control" placeholder="Purchase No" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>    
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Supplier</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>Select Supplier</option>
                                            <option>Test Supplier</option>
                                        </select>
                                    </div>
                                </div> 
                                <div className="col-md-6"> 
                                    <div className="form-group">
                                        <label>Received</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>Received</option>
                                            <option>Not received yet</option>
                                        </select>
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Order Tax</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                            <option>No Text</option>
                                            <option>GST @5%</option>
                                            <option>VAT @20%</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Discount</label>
                                        <input type="text" className="form-control" placeholder="Discount"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Shipping</label>
                                        <input type="text" className="form-control" placeholder="Shipping"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Payment *</label>
                                        <input type="text" className="form-control" placeholder="Payment" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Note *</label>
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
                            <button type="submit" className="btn btn-primary mr-2">Add Purchase</button>
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

export default AddPurchases
