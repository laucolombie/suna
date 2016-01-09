import React from 'react';
import LoginView from '../views/LoginView';
import Header from '../components/Header';

const CLASS_ROOT = "USER_STATE";
 
class IndexPage extends React.Component {

  render() {

  	var logged = null;

  	logged = (
  		<div>
  			<Header/>
  			<div className={CLASS_ROOT + "__logged"}>
          	<LoginView/>
        	</div>
        </div>
  	);

    return logged;
  }
}

export default IndexPage; 