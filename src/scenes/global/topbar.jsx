import React from "react";


export default function Topbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white " href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item px-4 ">
                            <a className="nav-link text-white active" aria-current="page" href="#">CSPM</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link text-white active" href="#">APPLICATION TESTING</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link text-white active" href="#">PRIVILEGE MANAGEMENT</a>
                        </li>

                    </ul>

                    <a className="d-flex text-white p-4 " href="../login">Login</a>




                </div>
            </div>
        </nav>
    )
}