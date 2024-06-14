import React from 'react'

const AddCategory = () => {
    return (
        <>
            <div class="content-page">
                <div class="container-fluid add-form-list">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Add category</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form action="page-list-category.html" data-toggle="validator" novalidate="true">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <input type="file" class="form-control image-file" name="pic" accept="image/*"/>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Product Name *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Product Name" required=""/>
                                                        <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Category *</label>
                                                    <div class="dropdown bootstrap-select form-control"><select name="type" class="selectpicker form-control" data-style="py-0">
                                                        <option>Beauty</option>
                                                        <option>Grocery</option>
                                                        <option>Food</option>
                                                        <option>Furniture</option>
                                                        <option>Shoes</option>
                                                        <option>Frames</option>
                                                        <option>Jewellery</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle py-0" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Beauty"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Beauty</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Code *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Code" required=""/>
                                                        <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary mr-2 disabled">Add category</button>
                                        <button type="reset" class="btn btn-danger">Reset</button>
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
