import { useState } from 'react';
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Form from './component/Form';

function App() {
  const [active, setactive] = useState("product");
  return (
    <div className="App">
      
     <Header />
     <nav class="navbar">
        <button onClick={()=> setactive("product")}>Product</button>
        <button onClick={()=> setactive("Cart")}>Cart</button>
        <button onClick={()=> setactive("Bill")}>Bill</button>
        <button onClick={()=> setactive("form")}>Add Product</button>
      </nav>

     {active ==="product" && <Content title="Product Page" />}
     {active ==="Cart" && <Content title="Cart Page" />}
     {active ==="Bill" && <Content title="Bill Page" />}
     {active ==="form" && <Form />}

 

    </div>
    
  );
}

export default App;
