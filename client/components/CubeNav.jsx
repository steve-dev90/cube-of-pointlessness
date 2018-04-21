import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubesByUserId} from '../api'


class CubeNav extends React.Component {

  constructor(props) {
    //console.log('Cubenav2 ren',props) 
    super(props)

    this.state = {
      cubesByUserID: []
    }

    this.selectUserButton = this.selectUserButton.bind(this)
    this.refreshCubesByUserId = this.refreshCubesByUserId.bind(this)
    this.renderCubesByUserId = this.renderCubesByUserId.bind(this)
  }

  // componentDidMount() {
  //   this.refreshCubesByUserId()
  // }  

//Get cubes from DB
  refreshCubesByUserId (id, err) {
    console.log('refresh',id)
    this.setState({
      error: err,
    })
    getCubesByUserId(this.renderCubesByUserId, id)
  }

  renderCubesByUserId (err, cubes) {
    console.log('cubeID',cubes)
    this.setState({
      error: err,
      cubesByUserID: cubes || []
    })
  }

  selectUserButton (e) {
    var user_id = this.props.users
      .find((user) => e.target.value == user.name)
      .id
    console.log('Basvjd',user_id)                
    this.refreshCubesByUserId(user_id)
    console.log(this.state)
  }

  render(props) {
    //console.log('Cubenav ren',this.state.cubes, this.props.cubes)  
    return (
      <div className="list-cubes">
        <div className="container">

          {this.props.cubes.map((cube) => {
            
            return (
              <div className ="row" key={cube.id}>
                <div className="one-third column value">
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/100x100"/></a>
                </div>
                <div className="one-third column value">
                  <Link to={`/cubes/${cube.id}`}><h3>{cube.name}</h3></ Link> 
                </div>
                <div className="one-third column value">
                  <h3>{cube.rating}</h3>
                </div> 
            </div> 
            )    
          })}

        <div className ="row">
          {/* <button onClick ={this.selectUserButton}>Test button</ button>  */}
          <form>
          <p>
            <select name='name' onChange={this.selectUserButton}>
              
              {this.props.users.map(user => {
                return <option key={user.id} value={user.name}>{user.name}</option>
              })}
            </select>
          </p>

        </form> 
        </div>

        </div> 
      </div> 
    )  
  }
}

export default CubeNav