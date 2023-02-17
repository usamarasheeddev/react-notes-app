import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container mt-5 text-center'>
                Made with ❤️ by Usama Rasheed
            </div>
            <div style={{width:"200px"}} className="container d-flex justify-content-between  mt-4">
                <a href="https://mobile.facebook.com/usama2188?" style={{color: "#1877f2" }}><i class="fa-brands fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/us_a_m__a/" style={{color: "#833ab4" }}><i class="fa-brands fa-instagram fa-2x"></i></a>
                <a href="https://github.com/usama2188" style={{color: "#333" }}><i class="fa-brands fa-github fa-2x"></i></a>
            </div>

        </>
    )
}
