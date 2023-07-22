import React, { Component } from 'react'

export default class Cars extends Component {

  state = {
    carsArr: [
      { price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift Dzire", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/ySIJH9R.png", fuel: "Petrol", featured: true },
      { price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/m6kBxtO.png", fuel: "Diesel", featured: true },
      { price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/dE5wGak.png", fuel: "Petrol", featured: true },
      { price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/DBvxiVR.png", fuel: "Diesel", featured: false },
      { price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/qbTLYvJ.png", fuel: "Diesel", featured: false },
      { price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/epcJiAL.png", fuel: "Petrol", featured: false }
    ],
    viewArr: [{ view: 'Grid', icon: "border" }, { view: 'List', icon: "card-list" }, { view: 'Gallery', icon: "display" }],
    currentView: 'Grid'
  }

  handleView = (view) => {
    this.setState({ currentView: view })
  }

  showDetails = (model) => {
    this.props.onChangeView(model)
  }

  selectView = (currentView, viewArr) => {
    return (
      <>
        <div>

          <div className="row my-3 w-25">
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-lg fw-bold" type="button">{currentView} View</button>
              <button type="button" class="btn btn-lg btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                {
                  viewArr.map(v => <li className="d-flex dropdown-item justify-content-between lead fw-bold" onClick={() => this.handleView(v.view)}><span>{v.view}</span><i className={`bi bi-${v.icon}`}></i></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

  showCarsGridView = (carsArr) => {
    return (
      <>
        <div className="row">
          {
            carsArr.map(car =>
              <div className="col-sm-4 mb-4">
                <div class="card shadow" onClick={() => this.showDetails(car.model)}>
                  <img src={car.image} className="card-img-top" alt="cars" />
                  <div class="card-body">
                    <h3 class="card-title fw-bold"><i class="bi bi-currency-rupee"></i> {car.price}</h3>
                    <p class="card-text">
                      <div>{car.year} - {car.miles} km</div>
                      <div>{car.make} {car.model}, {car.year}, {car.fuel}</div>
                      <div className='d-flex justify-content-between font-monospace'><span>{car.location}, {car.city}</span> <span>{car.postedOn}</span></div>
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }

  showCarsListView = (carsArr) => {
    return (
      <>
        <div className="row w-75">
          {
            carsArr.map(car =>
              <div className="card shadow mb-3" onClick={() => this.showDetails(car.model)}>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <img src={car.image} className="card-img-top rounded-start rounded-end-0" alt="cars" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column justify-content-center ">
                      <div className='text-end d-flex justify-content-end gap-2'><i class="bi bi-share-fill"></i><i class="bi bi-heart-fill"></i></div>
                      <h3 className="card-title fw-bold"><i class="bi bi-currency-rupee"></i> {car.price}</h3>
                      <p className="card-text">
                        <div>{car.year} - {car.miles} km</div>
                        <div>{car.make} {car.model}, {car.year}, {car.fuel}</div>
                        <div className='d-flex justify-content-between font-monospace'><span>{car.location}, {car.city}</span> <span>{car.postedOn}</span></div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }


  showCarsGalleryView = (carsArr) => {
    return (
      <>
        <div className="row w-75">
          {
            carsArr.map(car =>
              <div className="card shadow mb-3" onClick={() => this.showDetails(car.model)}>
                <div className="row">
                  <div className="p-0">
                    <img src={car.image} className="card-img-gallery rounded-startrounded-end-0" alt="cars" />
                  </div>
                  <div className="">
                    <div className="card-body h-100 d-flex flex-column justify-content-center ">
                      <div className='text-end d-flex justify-content-end gap-2'><i class="bi bi-share-fill"></i><i class="bi bi-heart-fill"></i></div>
                      <h2 className="card-title fw-bold"><i class="bi bi-currency-rupee"></i> {car.price}</h2>
                      <p className="card-text">
                        <div>{car.year} - {car.miles} km</div>
                        <div>{car.make} {car.model}, {car.year}, {car.fuel}</div>
                        <div className='d-flex justify-content-between font-monospace'><span>{car.location}, {car.city}</span> <span>{car.postedOn}</span></div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }


  render() {
    let { carsArr, viewArr, currentView } = this.state;
    return (
      <>
        <div className="container">

          {this.selectView(currentView, viewArr)}
          <div className="row justify-content-center">
            {currentView === 'Grid' ? this.showCarsGridView(carsArr) : currentView === 'List' ? this.showCarsListView(carsArr) : this.showCarsGalleryView(carsArr)}
          </div>
        </div>
      </>
    )
  }
}
