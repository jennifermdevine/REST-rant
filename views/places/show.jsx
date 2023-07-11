const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">No comments yet!</h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
        <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name}></img>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <h1>Currently Unrated</h1>
            <h1>Comments</h1>
            <h2>{comments}</h2>
            <h3> Located in {data.place.city}, {data.place.state}</h3>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     
            
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form> 
        </main>
        </Def>
    )
}

module.exports = show
