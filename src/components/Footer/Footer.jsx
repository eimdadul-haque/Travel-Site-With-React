import React from 'react'

export default function Footer() {
    return (
        <div className=" d-flex justify-content-around mt-5 bg-dark" style={{ width: "100%", height: "35vh" }}>
            <div className="mt-3 text-white">
                Contact info
            </div>
            <div className="mt-3 text-white">
                Quick Links
            </div>
            <div className="mt-3 text-white">
                About Us
            </div>
            <div className="mt-3 text-white">
               Terms & Conditions
            </div>
        </div>
    )
}
