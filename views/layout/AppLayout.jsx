const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.task}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            {/* <link rel="stylesheet" href="/css/style.css" /> */}
        </head>
        <body>
        <div className="container">
          <h1 className='text-center display-1'>to do</h1>
            <nav className="nav nav-pills navbar-dark bg-light">
                <a className="nav-link btn-outline-secondary" href="/">Todo list</a>
                <a className="nav-link btn-outline-primary" href="/new">New Task</a>
            </nav>
        <h1>{this.props.task}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
          </div>
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;