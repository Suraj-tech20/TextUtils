import React from 'react'

export default function Navbar(props) {
    // const handletoggle = (name) => {
    //     console.log('hello');
    // }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode !== 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <div className="mx-2 d-flex">
                            <div className="me-1" style={{ height: '20px', width: '30px', borderRadius: '30%', cursor: 'pointer', backgroundColor: 'white' }} onClick={() => props.toggleMode('light')}></div>
                            Light mode
                        </div>
                        <div className="mx-2 d-flex">
                            <div className="bg-danger me-1" style={{ height: '20px', width: '30px', borderRadius: '30%', cursor: 'pointer' }} onClick={() => props.toggleMode('danger')}></div>
                            Red Mode
                        </div>
                        <div className="mx-2 d-flex">
                            <div className="bg-success me-1" style={{ height: '20px', width: '30px', borderRadius: '30%', cursor: 'pointer' }} onClick={() => props.toggleMode('success')}></div>
                            Green Mode
                        </div>
                        <div className="mx-2 d-flex">
                            <div className="me-1" style={{ height: '20px', width: '30px', borderRadius: '30%', cursor: 'pointer', backgroundColor: 'black' }} onClick={() => props.toggleMode('info')}></div>
                            Dark Mode
                        </div>

                        {/* <form className="d-flex">

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => props.toggleMode('light')} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => props.toggleMode('danger')} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                            </div>
                            <div className="form-check form-switch ms-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => props.toggleMode('success')} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
                            </div>
                            <div className="form-check form-switch ms-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => props.toggleMode('info')} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button> 
                        </form> */}
                    </div>
                </div>
            </nav>
        </div >
    )
}
