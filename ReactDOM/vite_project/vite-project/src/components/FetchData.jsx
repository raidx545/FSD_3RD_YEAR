import { memo, useEffect, useState } from "react";

export default memo(function FetchData() {
  const [products, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart,addingToCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.products || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function addToCart(element){  
    addingToCart(element);
  }

  return (
    <div>
      <h1>Fetch Meal</h1>
        <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", gap:"10px" }}>
        {products.map((ele) => (
            <div key={ele.id} style={{border:"2px red solid"}}  >
            <h2>{ele.title}</h2>
            <img src={ele.thumbnail} alt={ele.title} width="200" height="150"/>
            <button onClick={addToCart}> Add To Cart</button>
            </div>
      ))}
      </div>
    </div>
  );
});