function Layout() {
  const productsList = [
    {
      id: 1,
      description: "Buy 50 mobiles and get a gift card",
      color: "primary",
    },
    {
      id: 2,
      description: "Buy 50 mobiles and get a gift card",
      color: "danger",
    },
    {
      id: 3,
      description: "Buy 50 mobiles and get a gift card",
      color: "success",
    },
    {
      id: 4,
      description: "Buy 50 mobiles and get a gift card",
      color: "primary",
    },
    {
      id: 5,
      description: "Buy 50 mobiles and get a gift card",
      color: "primary",
    },
    {
      id: 6,
      description: "Buy 50 mobiles and get a gift card",
      color: "primary",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {productsList.map((item) => (
            <div className="col-sm-4 mb-3" key={item.id}>
              <div className={"card text-white bg-" + item.color}>
                <div className="card-header">BLACK FRIDAY DEAL</div>
                <div className="card-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    className="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  />
                </div>
                <div className="card-footer">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
    </>
  );
}

export default Layout;
