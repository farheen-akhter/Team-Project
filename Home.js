import React from 'react';
import '../App.css'

class Home extends React.Component {
  render() {
    return (
      <div className="inputboxes">
    <div className ="inputform">
    <h2>Welcome</h2>
            

<form class="ui form">
  <div class="field">
    <label>Email id</label>
    <input placeholder="Enter Email id" />
  </div>
  <div class="field">
    <label>Password</label>
    <input placeholder="Enter Password" />
  </div>
  </form><br/>
 <button class="ui green button">Login</button>
            </div>


        </div>
      );
  }
}

export default Home;