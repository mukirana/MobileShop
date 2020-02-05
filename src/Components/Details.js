import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar.js'
import '../App.css'
export default class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            isUpdate:false
        }
    }
    componentDidMount() {
          if(this.props.location.data){
            this.setState({isUpdate:true})  
           localStorage.setItem("object", JSON.stringify(this.props.location));
          }
          else{
              this.setState({isUpdate:false});
          }
      }
    render(){
        
        
        const { data } = this.state.isUpdate===true
        ? this.props.location
        : JSON.parse(localStorage.getItem("object"));
         let id = data?data._id:"";
       return (
           <main>
           <Navbar/>
           { (id!=="")&&
           <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4">
                       <img style={{width:"400px", height:"440px"}} src={require(`../Images/${data.image}`)} className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <p id="impId">{data.model}</p>
                        <h3><span style={{color:"#388e3c"}} className="badge badge-warning badge-lg">Extra &#8377;1500 discount</span></h3>
                        <p id="impId"><span id="blur">Price: </span>&#8377; {data.price}</p>
                        <p id="impId"><span className="badge badge-warning badge-lg">Camera Specs:</span></p>
                        {data.camera && data.camera.map((value,index)=>{
                          return(
                            <>
                               <p id="impId"><span id="blur">Camera{index+1} :</span> {value}</p>
                               <hr/>
                            </>
                          )
                        })}
                        
                        <span className="badge badge-warning badge-lg" id="impId">Processor:</span>
                        
                        <p id="impId" className="mt-3 "> {data.processor}</p>
                        <span className="badge badge-warning badge-lg mt-4" id="impId">Battery Description:</span>
                        <p id="impId">{data.battery}</p>
                        <p id="impId">{data.batteryDescription}</p>
                        <p className="badge badge-warning badge-lg" id="impId">User Reviews</p>
                        {data.userComments && data.userComments.map((value,index)=>{
                           return(
                               <>
                                <p id="impId">User{index+1} : {value}</p>
                                <hr/>
                               </>
                           )
                        })}
                        
                    </div>
                </div>
            </div>
          }
           </main>

        );
    }
}