import React, { useState } from 'react'
import axios from 'axios';

const AddSupplier = () => {

    const userId = localStorage.getItem('user');

    const [formData, setformData] = useState({
        name: '',
        email: '',
        phone_number: '',
        gst_number: '',
        address: '',
        city: '',
        state: '',
        country: '',
        createdby: userId
    })

    const handleInput = (e) => {
        e.preventDefault();

        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
            await axios
                .post(
                    "https://processing-management-system-api.vercel.app/api/supplier",
                    formData
                )
                .then(alert("form submitted"));

            setformData({
                name: '',
                username: '',
                email: '',
                phone_number: '',
                gst_number: '',
                address: '',
                city: '',
                state: '',
                country: '',
                createdBy: userId
            });
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div class="content-page">
                <div class="container-fluid add-form-list">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Add Supplier</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Name *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Name" name='name' value={formData.name} required onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Email" name='email' value={formData.email} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone Number *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Phone Number" name='phone_number' value={formData.phone_number} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>GST Number *</label>
                                                    <input type="text" class="form-control" placeholder="Enter GST Number" name='gst_number' value={formData.gst_number} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Address</label>
                                                    <textarea class="form-control" rows="4" name='address' value={formData.address} onChange={handleInput}></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>City *</label>
                                                    <input type="text" class="form-control" placeholder="Enter City" name='city' value={formData.city} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>State *</label>
                                                    <input type="text" class="form-control" placeholder="Enter State" name='state' value={formData.state} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Country *</label>
                                                    <input type="text" class="form-control" placeholder="Enter Country" name='country' value={formData.country} required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary mr-2 ">Add Supplier</button>
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

export default AddSupplier
