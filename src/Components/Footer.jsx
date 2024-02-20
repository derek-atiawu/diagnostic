import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className="row">
			<div className="col-md-4">
                <ul>
                    <li><a href=''>About us</a></li>
                    <li><a href=''>Contact us</a></li>
                </ul>
	
			</div>
			<div className="col-md-4">
				<h2>Facebook</h2>
						</div>
			<div className="col-md-4">
				<h2>Linkedin</h2>
			</div>
		</div>
        <div className='copyright'>
        <p>&copy; 2023 Lab and Scan Services</p>
        </div>
    </div>
  )
}

export default Footer