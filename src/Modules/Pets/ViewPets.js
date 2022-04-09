
import CardsTemplate from './CardsTemplate'



const ViewPets=({petList})=>{

    const PetList = () => <div className="pets">
        <div className="row">
            <br/><br/>
            <h3>Your pets</h3>
            {petList.map((item,index)=>
                <div className="col-md-4" key={index}>
                    <CardsTemplate item={item} />
                </div>
            )}
        </div>
    </div>

    return PetList()
}
export default ViewPets