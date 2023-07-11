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
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
            <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Review</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-1">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
        </main>
        </Def>
    )
}

module.exports = show
