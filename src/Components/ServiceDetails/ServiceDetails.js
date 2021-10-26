import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {sname} = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('/data.JSON')
        .then(res=> res.json())
        .then(data => setService(data))
    },[])

    const found = service.find(sr => sr.name === sname ); 
    if(found){
        var {name, img, des, price, type} = found;
    }
    
    
    
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} className="my-4">
             <h1 className="my-3  text-success fs-2 fw-bold">Detail Info on {name} </h1>
            <img className="w-25 h-25 mb-4" src={img} alt="" />
            
            <p className="w-50">{des} </p>
            <h4 className="text-danger">Payment: {price} BDT </h4>
            <p>Payment Type: {type}</p>
             
        </div>
    );
};

export default ServiceDetails;