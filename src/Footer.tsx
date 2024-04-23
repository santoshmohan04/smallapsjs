function Footer() {
  return (
    <>
      <div className="container-fluid text-center footercontainer">
        <p>Online Store Copyright</p>
        <form className="form-inline">
          <label htmlFor="email">Get deals:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email Address"
          />
          <button type="button" className="btn btn-danger">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Footer;
