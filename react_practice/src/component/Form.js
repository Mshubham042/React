import React from 'react'

export const Form = () => {
    return (
        <div className='frm'>
            <input type="text" name="username" placeholder='Enter Your Name'/><br /> 
            <input type="text" name="useremail" placeholder='Enter Your Mail'/><br /> 
            <input type="text" name="userpassword" placeholder='Enter Your Password'/>
        </div>
    )
}

export default Form
