import React, { Component } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from "mdbreact";
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class Filter extends Component{
    constructor(props){
        super(props)
        this.state={
            sortData:""
        }
    }
    setData=(data)=>{
            this.setState({sortData:data})
            if(this.props.onBrandName)
            this.props.onBrandName(data);
            if(this.props.onPriceRange)
            this.props.onPriceRange(data);
    }
    render(){
        var sortBy = this.props.data
        return(
            <>
            {(sortBy.length>0) &&
              <MuiThemeProvider>
                <AutoComplete floatingLabelText={this.props.sortBy}
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={sortBy}
                onUpdateInput = {this.setData.bind(this)}
                maxSearchResults={3}
                fullWidth={true}
                style={{backgroundColor:"floralWhite", borderRadius:'14px'}}
                />
              </MuiThemeProvider> 
            }
            </>
        )
    }
}