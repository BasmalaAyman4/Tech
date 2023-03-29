import React, { useState } from 'react'
import style from './signUp.module.css'
import './SignUp.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const data = {
  countries: [
    {
      name: "egypt",
      states: [
        {
          name: "cairo",
          cities: ["helwan", "maddi", "shobra"]
        }
      ]
    },
    { name: "usa", states: [{ name: "Gharbiya", cities: ["El Mahalla"] }] },

    { name: "KSA", states: [{ name: "Riyadh", cities: ["Yanbu"] }] },
    {
      name: "India",
      states: [
        { name: "Tabuk", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
      ]
    }
  ]
};

export default function SignUp() {

  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );


  const validname = /^[A-Za-z]+$/;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',

  })

  const { userName, email, phone, password, confirmPassword } = formData
  const [formError, setFormError] = useState({})

  const onChangeHandler = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const onChangeHandlerPhone = data => {
    setFormData({ ...formData, phone: data })
    console.log(formData)
  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    let err = {}

    if (formData.userName === '') {
      err.userName = 'Your Name is required';
    } else if (!validname.test(userName)) {
      err.userName = 'Your Name must be only string without spaces';
    }
    if (formData.email === '') {
      err.email = "Email is required";
    } else if (!validEmail.test(email)) {
      err.email = "Invalid Email";
    }
    if (formData.password === '') {
      err.password = "password is required"
    } else if (!validPass.test(password)) {
      err.password = 'Minimum eight characters, at least one letter and one number';

    }
    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Confirm Password does not match"
    }
    setFormError({ ...err })
  }

  return (
    <>
      <div className={`${style.path}`}>
        <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-between container" dir='rtl'>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"></a></li>
            <li class="breadcrumb-item active " >الرئيسيه</li>
            <li class="breadcrumb-item " ><a href="#">التسجيل</a></li>
          </ol>
        </nav>
        <h4 className='container title' dir='rtl'>تسجيل حساب مستفيد</h4>
      </div>
      <section className={style.logForm}>
        <div className='container' >
          <div className={style.signup}>
            <h2 className={style.signup__title}>انشئ حسابك</h2>
            <p className={style.signup__para}>فضلا قم بملء النموذج بالاسفل لانشاء حساب جديد خاص بك<a href='/'>  منصه استشاره تك</a></p>
            <hr />
            <Form onSubmit={onSubmitHandler} >
              <div className={style.userName}>

                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label className={`${style.label}`}>اسم المستخدم </Form.Label>
                  <Form.Control name="userName" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={userName} />
                  <Form.Text className={`${style.msErr}`}>
                    {formError.userName}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}>البريد الالكتروني  </Form.Label>
                  <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} />
                  <Form.Text className={`${style.msErr}`}>
                    {formError.email}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}>اسم الدولة </Form.Label>
                  <select
                    placeholder="Country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    name="skills"
                    className={`${style.input}`}
                  >
                    <option>--اختار البلد--</option>
                    {data.countries.map((value, key) => {
                      return (
                        <option value={value.name} key={key}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>

                </Form.Group>
                <div class={style.inputGroupp}>
                  <Form.Label className={`${style.label}`}> رقم الهاتف </Form.Label>
                  <PhoneInput
                    defaultCountry="EG"
                    international
                    error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    value={phone}
                    name="phone"
                    onChange={onChangeHandlerPhone}
                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}>اسم المنطقه </Form.Label>
                  <select
                    placeholder="City"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className={`${style.input}`}
                    name="address"
                  >
                    <option>--اختار المدينه--</option>
                    {availableCities?.cities.map((e, key) => {
                      return (
                        <option value={e.name} key={key}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}> اسم المحافظه </Form.Label>
                  <select
                    placeholder="State"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className={`${style.input}`}
                    name="age"
                  >
                    <option>--اختار المحافظه--</option>
                    {availableState?.states.map((e, key) => {
                      return (
                        <option value={e.name} key={key}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}> تأكيد كلمه المرور </Form.Label>
                  <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="تأكيد كلمة المرور" onChange={onChangeHandler} value={confirmPassword} />
                  <Form.Text className={`${style.msErr}`}>
                    {formError.confirmPassword}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={`${style.label}`}> كلمه المرور </Form.Label>
                  <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} />
                  <Form.Text className={`${style.msErr}`}>
                    {formError.password}
                  </Form.Text>
                </Form.Group>

                <Button className={style.signup__btn} type="submit">
                  "انشاء حساب"
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}
