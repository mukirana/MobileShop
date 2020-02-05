import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar.js'
import Filter from './Components/Filter.js'
import { Link } from 'react-router-dom';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { getDefaultNormalizer } from '@testing-library/react';

class App  extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        error: false,
        isLoading:true,
        list:{},
        brandName:"",
        priceName:""
      }
      this.onBrandName = this.onBrandName.bind(this);
      this.onPriceRange = this.onPriceRange.bind(this);
      this.getData = this.getData.bind(this);
      this.onClick = this.onClick.bind(this);
      this.changeToUpper = this.changeToUpper.bind(this);
    }
    error =()=>{
      return(
        <div className="alert alert-danger mx-5" role="alert">
          Data Not Found...
        </div>
      )
    }
    changeToUpper(val){
      if(typeof val==='string'){
        return val.charAt(0).toUpperCase() + val.slice(1);
      }
      return null;
    }
    getData(){
      var brand  =this.changeToUpper(this.state.brandName);
      var url = `http://localhost:8080/home?sortByName=${brand}&sortByPrice=${this.state.priceName}`
      fetch(url)
      .then(response => {   
        if(!response.ok){
          throw Error(response.statusText)
        }
        return response.json()})
      .then(response =>{
        return this.setState({
          list: response,
          isLoading:false,
          error:false
        })
      })
      .catch(error => this.setState({error:true,  isLoading:false }));
    }

    componentDidMount(){
     this.getData();
    }
    onBrandName(data){
       this.setState({brandName:data});
      
    }
    onPriceRange(data){
      this.setState({priceName:data});
    }
    onClick(){
      this.getData();
    }
    render(){
        return(
          <main>
              <Navbar/>
              <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                      <Filter  sortBy="Find by brand" onBrandName={this.onBrandName} data={['Apple','Redmi','Realme','Nokia','Oppo']}/>
                    </div>
                  <div className="col-md-4">
                    <Filter sortBy="Price range" onPriceRange={this.onPriceRange} data={['10','20','30','50','100']}/>
                  </div>
                  <div className="col-md-2">
                     <button className="btn btn-primary" onClick={this.onClick}>Search</button>
                  </div>
                </div>
              </div>
              {this.error===false ? this.error():null}
              {this.isLoading ===true ? <h1>Fetching data...</h1> : null}
              <div style={{width:"80%" , marginTop:"50px", marginLeft:"20px"}}>
                {this.state.list.length==0 && this.error()}
              {(this.state.list.length > 0) && this.state.list.map((value, index) => {
                return (
                  <MDBRow key={value._id}>
                    <MDBCol md="12">
                      <MDBView hover zoom>
                       
                          <Link to={{  pathname:`/details/${value._id}`, data:value}} style={{ textDecoration: 'none'}}>
                            <div className="card" style={{width:"80%", marginLeft:"10%" , marginTop:"10px"}}>
                              <div className="row">
                                <div className="col-md-4">
                                  <img src={require(`./Images/${value.image}`)} className="img-fluid"></img>
                                </div>
                                <div className="col-md-8">
                                    <p id="impId">{value.model}</p>
                                    <p id="impId">&#8377; {value.price}</p>
                                </div>
                              </div>
                            </div>
                            </Link>
                        </MDBView>
                      </MDBCol>
                    </MDBRow>
                )
              })
              }
          </div>
          </main>
        )
    }
}
export default App