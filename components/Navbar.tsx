import { useAuth } from "../context/AuthContext";

const NavBar = () => {
    const {connectWallet, login} = useAuth()

    return(
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column shadow-lg bg-body rounded">

            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src="./logo.png" alt="Logo" height={100} width={150} className="hover-zoom"/>
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 link-danger ">Home</a></li>
                <li><a href="/dashboard" className="nav-link px-2 link-danger">Vote</a></li>
                <li><a href="/viewResults" className="nav-link px-2 link-danger">View Results</a></li>
                <li><a href="/printResults" className="nav-link px-2 link-danger">Print Results</a></li>
                </ul>

                <div className="col-md-4 text-end">
                <a href="/login"><button type="button" className="btn btn-outline-danger me-2">Login</button></a>
                <a href="/signup"><button type="button" className="btn btn-danger me-2">Sign-Up</button></a>
                <button type="button" className="btn btn-outline-danger" onClick={() => connectWallet()}>Connect Wallet</button>
                </div>
            </header>
        </div>
    )
}
export default NavBar;