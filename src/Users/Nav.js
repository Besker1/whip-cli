import {Link} from 'react-router-dom'
import React from 'react'

export default function Nav(){
    return (
        <div className="menu">
          <ul>
            <li>
              <Link to="/about"> About</Link>
            </li>
            {/* <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/signup"> Sign Up</Link>
            </li> */}
          </ul>
        </div>
    )
}