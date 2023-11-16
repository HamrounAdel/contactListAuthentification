import React from 'react'
import './admin.css'
function Admin() {
  return (
    <div className='bodyadmin'>
  {/* overlay */}
  <div
    id="sidebar-overlay"
    className="overlay w-100 vh-100 position-fixed d-none"
  />
  {/* sidebar */}
  <div
    className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar"
    id="sidebar"
  >
    <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center" />
    <div className="list-group rounded-0">
      <a
        href="#"
        className="list-group-item list-group-item-action active border-0 d-flex align-items-center"
      >
        <span className="bi bi-border-all" />
        <span className="ml-2">Dashboard</span>
      </a>
      <a
        href="#"
        className="list-group-item list-group-item-action border-0 align-items-center"
      >
        <span className="bi bi-box" />
        <span className="ml-2">Products</span>
      </a>
      <button
        className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
        data-toggle="collapse"
        data-target="#sale-collapse"
      >
        <div>
          <span className="bi bi-cart-dash" />
          <span className="ml-2">Sale</span>
        </div>
        <span className="bi bi-chevron-down small" />
      </button>
      <div className="collapse" id="sale-collapse" data-parent="#sidebar">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action border-0 pl-5"
          >
            Customers
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-0 pl-5"
          >
            Sales
          </a>
        </div>
      </div>
      <button
        className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
        data-toggle="collapse"
        data-target="#purchase-collapse"
      >
        <div>
          <span className="bi bi-cart-plus" />
          <span className="ml-2">Purchase</span>
        </div>
        <span className="bi bi-chevron-down small" />
      </button>
      <div className="collapse" id="purchase-collapse" data-parent="#sidebar">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action border-0 pl-5"
          >
            Sellers
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-0 pl-5"
          >
            Purchases
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
    {/* top nav */}
    <nav className="w-100 d-flex px-4 py-2 mb-4 shadow-sm">
      {/* close sidebar */}
      <button className="btn py-0 d-lg-none" id="open-sidebar">
        <span className="bi bi-list text-primary h3" />
      </button>
      <div className="dropdown ml-auto">
        <button
          className="btn py-0 d-flex align-items-center"
          id="logout-dropdown"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="bi bi-person text-primary h4" />
          <span className="bi bi-chevron-down ml-1 mb-2 small" />
        </button>
        <div
          className="dropdown-menu dropdown-menu-right border-0 shadow-sm"
          aria-labelledby="logout-dropdown"
        >
          <a className="dropdown-item" href="#">
            Logout
          </a>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </div>
      </div>
    </nav>
    {/* main content */}
    <main className="p-4 min-vh-100">
      <section className="row">
        <div className="col-md-6 col-lg-4">
          {/* card */}
          <article
            className="p-4 rounded shadow-sm border-left
 mb-4"
          >
            <a href="#" className="d-flex align-items-center">
              <span className="bi bi-box h5" />
              <h5 className="ml-2">Products</h5>
            </a>
          </article>
        </div>
        <div className="col-md-6 col-lg-4">
          <article className="p-4 rounded shadow-sm border-left mb-4">
            <a href="#" className="d-flex align-items-center">
              <span className="bi bi-person h5" />
              <h5 className="ml-2">Customers</h5>
            </a>
          </article>
        </div>
        <div className="col-md-6 col-lg-4">
          <article className="p-4 rounded shadow-sm border-left mb-4">
            <a href="#" className="d-flex align-items-center">
              <span className="bi bi-person-check h5" />
              <h5 className="ml-2">Sellers</h5>
            </a>
          </article>
        </div>
      </section>
      <div className="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
        <div className="container">
          <h1 className="display-4 mb-2 text-primary">Simple</h1>
          <p className="lead text-muted">
            Simple Admin Dashboard with Bootstrap.
          </p>
        </div>
      </div>
    </main>
  </div>
</div>

  )
}

export default Admin
