import React from 'react';
import './Business.css';

class Business extends React.Component{
    render(){
        const business  = this.props.business; // const {business} = this.props;
        return(
            <div className="Business">
                <div className="image-container">
                    <a href = {business.url} target="_blank" >
                        <img src={business.imageSrc} alt=''/>
                    </a> 
                </div>
                
                <h2>{business.name}</h2>
                
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>  
                        {/* <p> {business.url} </p>                       */}
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category} {business.price}</h3>
                        <h3 className="rating"> {business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Business;