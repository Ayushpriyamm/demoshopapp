
import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';


const App = () => {

  const products=[
    {

      title:"Nirma",
      amount:100,
      date:new Date(21,8,10),

    },
    {

      title:"Surf Excel",
      amount:200,
      date:new Date(21,2,2),

    },
    {

      title:"Tide",
      amount:300,
      date:new Date(21,5,8),
    },
    {

      title:"Rin Supreme",
      amount:400,
      date:new Date(21,9,1),
    },
  ];

  return (

    <div>
      <NewProduct></NewProduct>
      <Products items={products} />; 
    </div>
  );
}

export default App;
