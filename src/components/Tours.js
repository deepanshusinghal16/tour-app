import Card from './Card';
import './Tours.css';

function Tours({tours,removeTour}){
    return (
        <div className='container'>
            <div>
            <h2 className='title'> Tour Packages </h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour)=> {
                        return (
                            <Card key={tour.id} {...tour} removeTour = {removeTour} />
                        )
                    } )
                }
            </div>
        </div>
    )
}
export default Tours;