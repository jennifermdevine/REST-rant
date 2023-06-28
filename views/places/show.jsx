const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
        <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name}></img>
            <h1>{data.place.city}</h1>
            <h1>{data.place.state}</h1>
            <h1>{data.place.cuisines}</h1>
            <h1>Currently Unrated</h1>
            <h1>No Comments Yet!</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     
            
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form> 
        </main>
        </Def>
    )
}

module.exports = show
