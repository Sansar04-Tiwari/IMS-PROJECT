import React, { useState } from 'react'
import axios from "axios";

const AddCategory = () => {

    const userId = localStorage.getItem('user');


    const [formData, setformData] = useState({
        category_name: '',
        createdBy: userId
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

        console.log("formData ",formData);

        try {
            await axios
                .post(
                    "https://processing-management-system-api.vercel.app/api/categories",
                    formData
                )
                .then(alert("form submitted"));

            setformData({
                category_name: '',
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
                                        <h4 class="card-title">Add category</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Category Name *</label>
                                                    <input type="text" name='category_name' value={formData.category_name} className="form-control" placeholder="Enter Category Name" required="" onChange={handleInput} />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary mr-2">Add category</button>
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
