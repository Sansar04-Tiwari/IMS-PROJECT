import React from 'react'
import {  useState, useEffect } from 'react';
import axios from 'axios'

function AddChallan() {

  const userId = localStorage.getItem('user');

  const [formData, setformData] = useState({
    inventory: 'select',
    type: 'select',
    createdBy: userId
  })

  const [challan, setChallan] = useState([])


  useEffect(() => {

    const getInventory = async () => {
      try {
        const res = await axios.get('https://processing-management-system-api.vercel.app/api/inventory')

        const value = await res.data

        setChallan(value)
      }
      catch (error) {
        console.log(error.message);
      }
    }

    getInventory();
  }, [])

  const handleInput = (e) => {
    e.preventDefault();

    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://processing-management-system-api.vercel.app/api/challan', formData)
        .then(() => alert('form submitted'))

      setformData({
        type: 'select',
        inventory: '',
        createdBy: userId
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  return (

    <div className="content-page">
      <div className="container-fluid add-form-list">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Challan</h4>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Inventory Date</label>
                        <select name="inventory" value={formData.inventory} onChange={handleInput} className='form-control'>
                          <option value="select" >Select</option>
                          {
                            challan.map((item, index) => (

                              <option key={index} value={item._id}>{item.date_received}</option>
                            ))
                          }
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Supplier Name</label>
                        <select name="supplier" value={formData.supplier} onChange={handleInput} className='form-control'>
                          <option value="select" >Select</option>
                          {
                            challan.map((item, index) => (
                              <option key={index} value={item._id}>{item.supplier.name}</option>
                            ))
                          }
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div> */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Type</label>
                        <select name="type" value={formData.type} onChange={handleInput} className='form-control'>
                          <option value="select" >Select</option>
                          <option value="Daily">Daily</option>
                          {/* <option value="Stock">Stock</option> */}
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label>Date *</label>
                        <input
                          type="date"
                          className="form-control"
                          name="date_received"
                          value={formData.date_received}
                          required
                          onChange={handleInput}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div> */}
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Add Challan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddChallan