import axios from 'axios'
import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ saveUserData }) {
  let navigate = useNavigate()

  const [oldData, setOldData] = useState([{}])
  const [errorList, setErrorList] = useState([])
  const [spinerStatus, setSpinerStatus] = useState(null)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    dataBase();
  }, []);

  async function dataBase() {
    try {
      const response = await axios.get("https://662658af052332d553228d46.mockapi.io/users");
      const { data } = response;
      setOldData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function isUser() {
    const emailValidateor = oldData.find((e) => e.email === userInfo.email)
    const passwordValidateor = oldData.find((e) => e.password === userInfo.password)
    if (!emailValidateor)
      setErrorList([{ message: "email is not correct " }])
    else if (!passwordValidateor)
      setErrorList([{ message: "password is not correct  " }])
    else
      return true
  }

  function formData(e) {
    let copyData = { ...userInfo };
    copyData[e.target.name] = e.target.value;
    setUserInfo(copyData)
  }

  async function sendData() {
    const { data } = await axios.post("https://662658af052332d553228d46.mockapi.io/users", userInfo)
    localStorage.setItem("UserData", JSON.stringify(data))
    saveUserData()
  }
  function validation() {
    let body = Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      password: Joi.string().required()
    })
    return body.validate(userInfo, { abortEarly: false })
  }

  function submit(e) {
    e.preventDefault();
    setSpinerStatus(true)
    setTimeout(() => {
      let statusData = isUser();
      let valid = validation();
      if (valid.error) {
        setSpinerStatus(false)
        setErrorList(valid.error.details)
      } else if (statusData !== true) {
        setSpinerStatus(false)
      } else {
        navigate('/')
        sendData();
        setSpinerStatus(false);
      }
    }, 1000);
  }

  return (
    <>
      <form onSubmit={submit}>
        {errorList.length == 0 ? "" : errorList.map((e, index) => {
          return <div className='alert alert-danger' key={index}>{e.message}</div>
        })}
        <label htmlFor="email" className='text-white my-2' >Email</label>
        <input onChange={formData} type="email" name='email' className='form-control ' />

        <label htmlFor="password" className='text-white my-2' >Password</label>
        <input onChange={formData} type="password" name='password' className='form-control '  autoComplete="current-password"/>

        <button className='btn btn-info my-2'>{spinerStatus == true ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : "LOGIN"}</button>
      </form>
    </>
  )
}
