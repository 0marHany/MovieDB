import axios from 'axios';
import Joi from 'joi';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ saveUserData }) {
    const navigate = useNavigate();
    const [errorList, setErrorList] = useState([])
    const [spinnerButton, setSpinnerButton] = useState(false)
    const [userInfo, setUserInfo] = useState({
        firtName: "",
        lastName: "",
        age: 0,
        email: "",
        address: "",
        password: ""
    });

    function validation() {
        let body = Joi.object({
            firtName: Joi.string().required(),
            lastName: Joi.string().required(),
            age: Joi.number().required(),
            email: Joi.string().email({ tlds: { allow: false } }).required(), // Enable TLD list
            address: Joi.string().required(),
            password: Joi.string().required(),
        });
        return body.validate(userInfo, { abortEarly: false });
    }

    function getData(e) {
        const userCopy = { ...userInfo };
        userCopy[e.target.name] = e.target.value;
        setUserInfo(userCopy);
       
    }

    const addData = async () => {
        const { data } = await axios.post('https://662658af052332d553228d46.mockapi.io/users', userInfo);
        
        localStorage.setItem("UserData", JSON.stringify(data))
        saveUserData()
    }
    function Submit(e) {
        e.preventDefault() // to stop the defult event (in form is reload page )
        setSpinnerButton(true)
        setTimeout(() => {
            let valid = validation();
            if (valid.error) {
                setErrorList(valid.error.details)
                setSpinnerButton(false)
                console.log(errorList);
            } else {
                addData();
                navigate('/')
                setSpinnerButton(false)
            }
        }, 1000);
    }
    return (
        <>
            <form onSubmit={Submit}>
                {errorList.length === 0 ? " " : errorList.map((e, index) => { return (<div className='form-control alert alert-danger my-4 p-2' key={index}>{e.message}</div>) })}

                <label htmlFor="firtName" className='text-white my-2'>First Name :</label>
                <input onChange={getData} type="text" className='form-control' name='firtName' id='firtName' />

                <label htmlFor="lastName" className='text-white my-2'>Last Name :</label>
                <input onChange={getData} type="text" className='form-control' name='lastName' id='lastName' />

                <label htmlFor="age" className='text-white my-2'>age :</label>
                <input onChange={getData} type="number" className='form-control' name='age' id='age' />

                <label htmlFor="email" className='text-white my-2'>Email :</label>
                <input onChange={getData} type="email" className='form-control' name='email' id='email' />

                <label htmlFor="address" className='text-white my-2'>address :</label>
                <input onChange={getData} type="text" className='form-control' name='address' id='address' />

                <label htmlFor="password" className='text-white my-2' >Password :</label>
                <input onChange={getData} type="password" className='form-control' name='password' id='password'  autoComplete="current-password"/>


                <button className='btn btn-info my-2'>{spinnerButton == true ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : "REGISTER"}</button>
            </form >
        </>
    );
}
