import React from 'react'
import Title from '../../components/Title/Title'
import "./New_Offers.css"

export default function New_Offers() {

    const value = 3

    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <p className="h1"><span className="New"> </span>New<span className="Offers"> Offers</span></p>
                </div>
            </div>
            <div className="container">
                <Title title={"New Offers"} desc={"CHOOSE YOUR OPTION"}  button={false}/>
                <div className="row mt-5">
                    {
                        [...Array(value).keys()].map(() =>
                            <div className="col-lg-8 my-2">
                                <div class="card">
                                    <h5 class="card-header">Offers</h5>
                                    <div class="card-body">
                                        <h5 class="card-title"> title </h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" class="btn btn-info">Details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
}
