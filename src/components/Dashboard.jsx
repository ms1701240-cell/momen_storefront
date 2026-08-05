import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from '../supabase/supabse'
import { useEffect } from 'react'
import { useState } from 'react'
const Dashboard = () => {
     const [category, setCategory] = useState([]);
     const [name, setName] = useState("");
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");
     const [price, setPrice] = useState("");
     const [size, setSize] = useState("");
     const [material, setMaterial] = useState("");
     const [quality, setQuality] = useState("");
     const [selectedcategory, setSelectedcategory] = useState("");
     const [image, setImage] = useState(null);
    async function getCategories() {
    const { data, error } = await supabase
      .from("category")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setCategory(data);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  async function addProduct(e) {
    console.log("Button Clicked");
    e.preventDefault();
    console.log("1");
  if (!image) {
    alert("Please select an image");
    return;
  }
   console.log("2");
  // اسم فريد للصورة
  const fileName = `${Date.now()}-${image.name}`;
console.log("3");
  // رفع الصورة إلى Storage
  console.log(image);
console.log(image.name);
console.log(image.type);
console.log(image.size);
 const { data: uploadData, error: uploadError } = await supabase.storage
  .from("products")
  .upload(fileName, image);

console.log("4");
console.log("Upload Data:", uploadData);
console.log("Upload Error:", uploadError);

  if (uploadError) {
    console.log(uploadError);
alert(JSON.stringify(uploadError));
    
  }

  // الحصول على رابط الصورة
  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  const imageUrl = data.publicUrl;

  // إضافة المنتج إلى جدول products
  const { error } = await supabase.from("products").insert([
    {
      name,
      title,
      desc,
      prize: Number(price),
      size,
      Material,
      quality,
      category_id: selectedcategory,
      img: imageUrl,
    },
  ]);

  if (error) {
    console.log(error);
    alert("Error adding product");
  } else {
    alert("Product Added Successfully");
  }
}
  return (

    <div className='container mt-5'>
       <div className="card shadow">
    <div className="card-header bg-dark text-white">
      <h3>Add Product</h3>
    </div>
    <div className="card-body">
      <form id="productForm">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
  type="text"
  className="form-control"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="desc"
            rows={5}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Price</label>
            <input
  type="number"
  className="form-control"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Size</label>
            <input
  type="text"
  className="form-control"
  placeholder="S,M,L,XL"
  value={size}
  onChange={(e) => setSize(e.target.value)}
/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Material</label>
            <input
  type="text"
  className="form-control"
  value={material}
  onChange={(e) => setMaterial(e.target.value)}
/>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Quality</label>
            <input
  type="text"
  className="form-control"
  value={quality}
  onChange={(e) => setQuality(e.target.value)}
/>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
         <select
  className="form-select"
  value={selectedcategory}
  onChange={(e) => setSelectedcategory(e.target.value)}
>
  <option value="">Select Category</option>

  {category.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ))}
</select>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
  type="button"
  className="btn btn-success w-100"
  onClick={ 
    addProduct
  }
>
  Add Product
</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Dashboard


