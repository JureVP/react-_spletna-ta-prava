import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Registracija</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Ime</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="napiši ime"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email naslov</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="ime@primer.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Geslo</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="geslo"
                                />
                            </div>
                            <div className="my-3">
                                <p>Že imaš račun? <Link to="/login" className="text-decoration-underline text-info">Prijava</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Registriraj se 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register