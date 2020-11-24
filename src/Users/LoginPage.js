import Footer from "./Footer";
import React from 'react'

export default function Signin(){
    return (
        <div>
        <h1>Login</h1>
<form action="post" className='sign-form'>
<label for="email"> Email:</label>
<input type="text" placeholder="email" Email/>
<label for="password">Password</label>
<input type="text" name="password" id="" placeholder="password"/>
<label for="password"> Re-enter password</label>
<input type="text" name="password" id="" placeholder="confirm password"/>
<button>Submit</button>
</form>
        <Footer/>

</div>
)
}