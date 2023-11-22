import React, { useState } from 'react';
import "../Css/LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const ContactForm = () => {
    const navigate = useNavigate();
    let formValues = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNo: "",
        dateOfBirth: "",
        state:"",
        city:"",
        pincode:"",
        address:"",
        error: {
            firstname: "",
        lastname: "",
        email: "",
        phoneNo: "",
        dateOfBirth: "",
        state:"",
        city:"",
        pincode:"",
        address:'',
        }
    };
    //State Variables 

    const [formdata, setformdata] = useState(formValues);

    /// here is onchange function 
    const commonchange = (e) => {
        let error = { ...formdata.error };
        if (e.target.value === "") {

            error[e.target.name] = `${e.target.name} is Required`;
        } else {

            error[e.target.name] = "";
        }
        if(e.target.name === 'firstname' && e.target.name === 'lastname'){
            if(!validateFname(e.target.value,e.target.value)){
                error[e.target.name] = 'Names lenght should be 15 characters '
            }
        }
        // Adding email and phone number validation
        if (e.target.name === 'email') {
            if (!validateEmail(e.target.value)) {
                error[e.target.name] = 'Invalid email address'
            }
        }

        if (e.target.name === 'PhoneNo') {

            if (!validatePhone(e.target.value)) {
                error[e.target.name] = 'Invalid phone number'
            }
        }
        if(e.target.name === 'pincode'){
            if(!validatePincode(e.target.value)){
                error[e.target.name] = 'Pincode Length should 6 only'
            }
        }
        setformdata({ ...formdata, [e.target.name]: e.target.value, error });

    };
    function validateFname(Fname , Lname){
       if(Fname.length > 15 && Lname.length > 15)return false
       return true
    }
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function validatePhone(phone) {
        if (phone.length < 10 || phone.length > 10) return false
        return true
    }
function validatePincode(pincode){
    if(pincode.length > 6) return false
    return true
}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    }

    return (
        <>

            <div className="page">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="cover" >
                        <h1>Leave message Here !</h1>

                        <input placeholder="FirstName" name="firstname"
                            type="text"
                            onChange={(e) => commonchange(e)}
                            value={formdata.firstname} />
                        <span style={{ color: "red" }}>{formdata.error.firstname}</span>
                        <input placeholder="LastName" name="lastname"
                            type="text"
                            onChange={(e) => commonchange(e)}
                            value={formdata.lastname} />
                        <span style={{ color: "red" }}>{formdata.error.lastname}</span>
                        <input placeholder="Sample@gmail.com" name="email"
                            type="email"
                            onChange={(e) => commonchange(e)}
                            value={formdata.email} />
                        <span style={{ color: "red" }}>{formdata.error.email}</span>
                        <input placeholder="Phone No" name="phoneNo"
                            type="number"
                            onChange={(e) => commonchange(e)}
                            value={formdata.phoneNo} />
                        <span style={{ color: "red" }}>{formdata.error.phoneNo}</span>
                        <input
                            type='date'
                            placeholder='dd/mm/yyy'
                            name='dateOfBirth'
                            onChange={(e) => commonchange(e)}
                            value={formdata.dateOfBirth}

                        />
                        <span style={{ color: "red" }}>{formdata.error.dateOfBirth}</span>
                        <select
                            name="state"
                            onChange={(e) => commonchange(e)}
                            value={formdata.state}
                        >
                          <option value="">Select state</option>
                          <option value="tamilNadu">Tamil Nadu</option>
                          <option value="Andra Pradhesh">Andra Pradhesh</option>
                          <option value="Kerala">Kerala</option>
                          <option value="karnataka">karnataka</option>
                        </select>    
                        <span style={{ color: "red" }}>{formdata.error.state}</span>
                        <input placeholder="city" name="city"
                            type="text"
                            onChange={(e) => commonchange(e)}
                            value={formdata.city} />
                        <span style={{ color: "red" }}>{formdata.error.city}</span>
                        <input placeholder="Pincode" name="pincode"
                            type="number"
                            onChange={(e) => commonchange(e)}
                            value={formdata.pincode} />
                        <span style={{ color: "red" }}>{formdata.error.pincode}</span>
                        <textarea placeholder='Adress' name='address' value={formdata.address} onChange={(e)=>commonchange(e) }/>
                        <span style={{ color: "red" }}>{formdata.error.address}</span>
                        <button className="login-btn" type='submit'>Submit</button>

                    </div>
                </form>
            </div>
        </>
    )
};

export default ContactForm;