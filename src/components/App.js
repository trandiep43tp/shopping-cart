import React    from 'react';
import Title    from './Title';
import Products from './Products';
import Carts    from './Carts';

function App() {
  return (
    <div className="container">       
       		<Title />       
        <div className="row">         
		    <Products />  
         	< Carts />
        </div>
      </div>
  );
}

export default App;
