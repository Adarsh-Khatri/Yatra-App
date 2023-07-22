import React from 'react'

function RightPanel() {
  const DISCOUNT_IMG_1 = "https://i.ibb.co/qdc2z7Z/ad01.png";
  const DISCOUNT_IMG_2 = "https://i.ibb.co/yp0bbgz/ad02.png";
  const DISCOUNT_IMG_3 = "https://i.ibb.co/DkrVrkY/ad03.png";
  const BANNER_IMG = "https://i.ibb.co/Rc9qLyT/banner1.jpg";

  const popularDomesticFlightRoutes = [
    { origin: "New Delhi", dest: "Bengaluru", date: "Wed, 3 Oct", amount: 3590 },
    { origin: "New Delhi", dest: "Mumbai", date: "Sun, 13 Oct", amount: 2890 },
    { origin: "Hyderabad", dest: "Bengaluru", date: "Mon,30 Sep", amount: 2150 },
    { origin: "Mumbai", dest: "Pune", date: "Sun,6 Oct", amount: 1850 }
  ]


  const popularHolidayDestinations = [
    { img: "https://i.ibb.co/SQ7NSZT/hol1.png", place: "Australia", price: "177,990", days: "9 Nights / 10 Days" },
    { img: "https://i.ibb.co/Wxj50q1/hol2.png", place: "Europe", price: "119,990", days: "6 Nights / 7 Days" },
    { img: "https://i.ibb.co/VY3XNZr/hol3.png", place: "New Zealand", price: "199,990", days: "6 Nights / 7 Days" },
    { img: "https://i.ibb.co/j4NNc35/hol4.jpg", place: "Sri Lanka", price: "18,999", days: "4 Nights / 5 Days" },
    { img: "https://i.ibb.co/ct6076f/hol5.jpg", place: "Kerala", price: "12,999", days: "4 Nights / 5 Days" },
    { img: "https://i.ibb.co/vB0CpYK/hol6.jpg", place: "Char Dham", price: "22,999", days: "4 Nights / 5 Days" }
  ];

  const threeImages = () => {
    return (
      <>
        <div className="row my-3">
          <div className="col-md-4">
            <img src={DISCOUNT_IMG_1} alt="discount first" className='rounded object-fit-cover discount-img' /></div>
          <div className="col-md-4">
            <img src={DISCOUNT_IMG_2} alt="discount second" className='rounded object-fit-cover discount-img' /></div>
          <div className="col-md-4">
            <img src={DISCOUNT_IMG_3} alt="discount third" className='rounded object-fit-cover discount-img' /></div>
        </div>
      </>
    )
  }

  const showBannerImage = () => {
    return (
      <>
        <div className="row my-3">
          <div>
            <img src={BANNER_IMG} alt="banner" className='object-fit-cover banner-img' />
          </div>
        </div>
      </>
    )
  }

  const popularFlightRoutes = () => {
    return (
      <>
        <div className="row"><h4 className='text-muted'>Popular Domestic Flight Routes</h4></div>
        <div className="row">
          {
            popularDomesticFlightRoutes.map(route =>
              <div className="col-md-2 border rounded rounded-3 mx-2 py-2">
                <div className='text-center'>
                  <div className='fw-bold'>{route.origin}</div>
                  <p className='text-muted'>{route.date}</p>
                  <div className='fw-bold'>{route.dest}</div>
                  <div>Starting From</div>
                  <h5><button className='btn btn-warning btn-sm'>Rs. {route.amount}</button></h5>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }

  const popularDestinations = () => {
    return (
      <>
        <div className="row mt-3"><h4 className='text-muted'>Popular Holiday Destinations</h4></div>
        <div className="row">
          {
            popularHolidayDestinations.map(dest =>
              <div className="col-md-5 border rounded rounded-3 m-2 text-center py-2">
                <div className="row align-items-center">
                  <div className="col-md-2"><img src={dest.img} alt="destination" className='dest-img' /></div>
                  <div className="col-md-8">
                    <div>
                      <div className='fw-bold'>{dest.place}</div>
                      <div><span className='text-danger fw-bold'>Rs. {dest.price}</span> per person</div>
                      <div className='text-muted p-0 m-0'><small>{dest.days}</small></div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <i class="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }

  return (
    <div className="container">
      <div className="row"><h4 className='text-muted'>Flight Discounts For You</h4></div>
      <div className="row">{threeImages()}</div>
      <div className="row">{showBannerImage()}</div>
      <div className="row">{popularFlightRoutes()}</div>
      <div className="row">{popularDestinations()}</div>
    </div>
  )
}

export default RightPanel