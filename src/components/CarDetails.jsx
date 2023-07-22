import React, { Component } from 'react'

export default class CarDetails extends Component {

  state = {
    carsArr: [
      { id: 1, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift Dzire", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/ySIJH9R.png", fuel: "Petrol", featured: true },
      { id: 2, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/m6kBxtO.png", fuel: "Diesel", featured: true },
      { id: 3, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/dE5wGak.png", fuel: "Petrol", featured: true },
      { id: 4, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/DBvxiVR.png", fuel: "Diesel", featured: false },
      { id: 5, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/qbTLYvJ.png", fuel: "Diesel", featured: false },
      { id: 6, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/epcJiAL.png", fuel: "Petrol", featured: false }
    ],
    carsImages: [
      { id: 1, urls: ["https://i.imgur.com/wAUhZuq.png", "https://i.imgur.com/3cV0QeO.png", "https://i.imgur.com/JxiK8Dx.png"] },
      { id: 2, urls: ["https://i.imgur.com/ZKNTBiy.png", "https://i.imgur.com/POCCyQq.png", "https://i.imgur.com/ZgwHDpF.png"] },
      { id: 3, urls: ["https://i.imgur.com/c8fP7bm.png", "https://i.imgur.com/BxsXYBk.png", "https://i.imgur.com/tInES5t.png"] },
      { id: 4, urls: ["https://i.imgur.com/1SDyXHT.png", "https://i.imgur.com/DhRZ936.png", "https://i.imgur.com/uIgDEPX.png"] },
      { id: 5, urls: ["https://i.imgur.com/ODpHqUi.png", "https://i.imgur.com/QsVCEaX.png", "https://i.imgur.com/jYBoEJK.png"] },
      { id: 6, urls: ["https://i.imgur.com/RGLTmba.png", "https://i.imgur.com/fPDkePA.png", "https://i.imgur.com/AYU8WAp.png"] }
    ],
    car: {},
    carImage: [],
    extraInfo: [],
    carExtraInfo: [
      { id: 1, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
      { id: 2, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
      { id: 3, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
      { id: 4, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
      { id: 5, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
      { id: 6, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] }
    ],
  }

  componentDidMount() {
    let { carsArr, carsImages, carExtraInfo } = this.state;
    let { model } = this.props;
    let car = carsArr.find(c => c.model === model);
    let carImage = carsImages.find(c => c.id === (+car.id));
    let extraInfo = carExtraInfo.find(i => i.id == car.id).extraInfo;
    this.setState({ car, carImage, extraInfo })
  }

  showingBreadCrumb = (make, model) => {
    return (
      <div className='row'>
        <div className='d-flex align-items-center'>
          <nav aria-label="breadcrumb" className='bg-light w-100 rounded fw-bold pt-2 px-5'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">{make}</a></li>
              <li className="breadcrumb-item active" aria-current="page">{model}</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }

  showCarDetails = (car, carImage, extraInfo) => {
    return (
      <>
        <div className="row my-3">
          <div className="col-sm-2"></div>
          <div className="col-sm-5">{this.showLeftPanel(car, carImage, extraInfo)}</div>
          <div className="col-sm-3">{this.showRightPanel(car)}</div>
          <div className="col-sm-2"></div>
        </div>
      </>
    )
  }

  showLeftPanel = (car, carImage, extraInfo) => {
    return (
      <div className='row'>
        <div className="row">
          <div id="carouselExample" className="carousel slide bg-dark border border-5">
            <div className="carousel-inner">
              {
                carImage?.urls?.map((url, index) =>
                  <div className="carousel-item active d-flex justify-content-center">
                    <img src={url} className="corousel-img" alt={`Car Image - ${index}`} />
                  </div>
                )
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row border ">
          <h3>Details</h3>
          <div className="row">
            <div className="col-sm-5 d-flex justify-content-between"><p className='text-muted fw-bold'>BRAND</p><p>{car.make}</p></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 d-flex justify-content-between"><p className='text-muted fw-bold'>MODEL</p><p>{car.model}</p></div>
            <div className="col-sm-5 d-flex justify-content-between"><p className='text-muted fw-bold'>YEAR</p><p>{car.year}</p></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 d-flex justify-content-between"><p className='text-muted fw-bold'>FUEL</p><p>{car.fuel}</p></div>
            <div className="col-sm-5 d-flex justify-content-between"><p className='text-muted fw-bold'>KM DRIVEN</p><p>{car.miles}</p></div>
          </div>
        </div>
        <div className="row border">
          <h2>DESCRIPTION</h2>
          {extraInfo?.map((i, index) => <p className='p-0 m-0' key={index}>{i}</p>)}
        </div>
      </div>
    )
  }

  showRightPanel = (car) => {
    return (
      <>
        <div className="row">
          <div className='body border rounded p-3'>
            <div className='d-flex justify-content-between'>
              <h3><i class="bi bi-currency-rupee"></i>{car.price}</h3>
              <div className='text-end d-flex justify-content-end gap-2'><i class="bi bi-share-fill"></i><i class="bi bi-heart-fill"></i></div>
            </div>
            <div>
              <div>{car.year} - {car.miles} Km</div>
              <div>{car.make} {car.model},{car.year}, {car.fuel}</div>
              <div className='d-flex justify-content-between font-monospace '><p>{car.location}, {car.city}</p><p>{car.postedOn}</p></div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className='border rounded p-3'>
            <h3>Seller Description</h3>
            <div className='d-flex align-items-center gap-4'>
              <div>
                <img src="https://i.imgur.com/xLaJmx3.png" alt="profile" width="80" />
              </div>
              <div className='fw-bold'>Mr. John</div>
            </div>
            <div>
              <button className='btn btn-primary w-100 mt-3'>Chat With Seller!</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  render() {
    let { car, carImage, extraInfo } = this.state;
    console.log(extraInfo);
    return (
      <div className="container">
        <div className="row">
          {this.showingBreadCrumb(car.make, car.model)}
        </div>
        <div className="row">
          {this.showCarDetails(car, carImage, extraInfo)}
        </div>
      </div>
    )
  }
}
