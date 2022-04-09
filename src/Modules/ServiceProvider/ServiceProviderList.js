import React from 'react'
import CardsTemplate from './CardsTemplate'

const ServiceProviderList=({providerList,handleDetail})=>{
    return     <div className="products">
    <div className="row">
        {providerList.map((item,index)=>
 <div className="col-md-4"
 key={index} onClick={()=>handleDetail(item)}>
    <CardsTemplate item={item} />
 </div>
        )}

    </div>
</div>
}
export default ServiceProviderList