import React, { Component } from 'react'
import Navbar from './Navbar'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { Toaster } from 'react-hot-toast';


export default class MainComponent extends Component {

  render() {
    return (
      <>
        <Toaster />
        <div className="container-fluid">
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            <div className="col-5"><LeftPanel /></div>
            <div className="col-7 bg-light"><RightPanel /></div>
          </div>
        </div>
      </>
    )
  }
}
