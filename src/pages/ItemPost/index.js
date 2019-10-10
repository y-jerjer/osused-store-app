import React from 'react'
import './ItemPost.css'

export default class ItemInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="item-register-form">
          <h3>Selling Register</h3>

          <label htmlFor="Enter Item Name">
            <b>Item Name</b>
          </label>
          <input type="text" placeholder="Item Name" />
          <label htmlFor="Enter Catagory">
            <b>Catagory</b>
          </label>
          <input type="hidden" placeholder="Catagory" />
          <select>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
          </select>

          <label htmlFor="Location">
            <b>Location</b>
          </label>
          <input type="text" placeholder="Enter Location" />
          <label htmlFor="Price">
            <b>Price</b>
          </label>
          <input type="text" placeholder="Enter Price" />
          <label htmlFor="Description">
            <b>Description</b>
          </label>
          <input type="text" placeholder="Description" />

          <button className="registerbtn">Register</button>
        </form>
      </div>
    )
  }
}
