const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/homepagepicture.avif" alt="variety of food items like bread, chips and dip, tacos, salad, and flatbread pizza"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@randyfath">Randy Fath</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home