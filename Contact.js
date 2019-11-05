import React from 'react';

class Contact extends React.Component {
  render() {
    return (
        <div className="contact-style">
          <h3 >Get In Touch With Us</h3>
          <form class="ui form"><textarea placeholder="Message Us" rows="2"></textarea>
          
          <div class="field">
    <label>Mobile Number</label>
    <input placeholder=" " />
  </div>

</form>
        </div>
    );
  }
}

export default Contact;