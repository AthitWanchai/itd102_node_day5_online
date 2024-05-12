import Nav from 'react-bootstrap/Nav';
const Footer = () =>
    <footer className="page-footer font-small blue pt-4 bg-success" >
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <h5 className="text-uppercase">Footer Content</h5>
                <div className="d-flex   justify-content-center">
                    <div className="p-2 bd-highlight">
                        <Nav.Link href="/">Home</Nav.Link>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Nav.Link href="/employee">Employee</Nav.Link>
                    </div>
                </div>
                <hr className="clearfix w-100 d-md-none pb-0" />
            </div>
        </div>

    </footer>

export default Footer