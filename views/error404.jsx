const React = require('react');
const Def = require('./default');

function error404 () {
    return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <img src="/images/404-error-page.png" alt="ghost with flashlight 404 page"></img>
            <p>Oops! Sorry, we can't find this page!</p>
        </main>
    </Def>
    )
}

module.exports = error404