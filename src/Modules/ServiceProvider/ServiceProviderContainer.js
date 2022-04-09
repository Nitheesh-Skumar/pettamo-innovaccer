import React from 'react'
import { useHistory } from 'react-router'
import { toaster } from '../../Components/Toast'
import { GlobalDispatchContext } from '../../ContextStore/ContextAPI'
import { listService } from '../../Services/UserServices'
import Filters from './Filters'
import ServiceProviderList from './ServiceProviderList'

const ServiceProviderContainer=()=>{
  // let Dummy = [{id:'sdfsdf',petType:'Dogs',imgUrl:'https://www.wikihow.com/images/thumb/e/ed/Take-Care-of-a-Dog-Step-12-Version-2.jpg/v4-460px-Take-Care-of-a-Dog-Step-12-Version-2.jpg',
  // time:'Morning',name:'Global Dog care',description:'Best place for your puppies',serviceType:'Non-Medical',location:'Texas',isLicensed:true}]
const history =useHistory()

const [providerList,setProviderList]=React.useState([])
const dispatch = React.useContext(GlobalDispatchContext)
const [filter,setFilter]=React.useState({})
  const handleDetail=item=>{
    console.log('sdf')
    history.push({pathname:'/detail',state:item})
  }

  const loadProviders=()=>{
    let payload={
      serviceType:filter.serviceType&&filter.serviceType!=='All'?filter.serviceType:undefined,
      petType:filter.petType&&filter.petType!=='All'?filter.petType:undefined,
      time:filter.time&&filter.time!=='All'?filter.time:undefined
    }
    dispatch({type:'loader',payload:true})
    // let id = toaster.loading("Getting List...")
    listService(payload).then(res=>{
      dispatch({type:'loader',payload:false})
      toaster.success("List Loaded...")
      // toastSuccess(id, 'List Loaded 👌');

      const list = Object.keys(res).map(el=>res[el])

      setProviderList(list)
    }).catch(e=>{
      toaster.error(e?.response?.data)
      // toastError(id,e.response.data + '🤯')
    })
  }
  React.useEffect(()=>{
    loadProviders()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    return  <div className="products">
    <div className="row">
    <div className="col-md-3 order-md-1 mb-4">

      <Filters setFilter={setFilter} filter={filter} handleSubmit={loadProviders}/>

    </div>
    <div className="col-md-9 order-md-2">
        <ServiceProviderList providerList={providerList} handleDetail={handleDetail} />
    </div>
  </div>
</div>
}

export default ServiceProviderContainer