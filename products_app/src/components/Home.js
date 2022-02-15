import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductsList from "./ProductsList";

const Home = () => {
     //on opening the page this data should be fetched from the backend
  const [products, setProducts] = useState([]);
  const grouped = [];
  const [groupedProducts, setGroupedProducts] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://assessment-edvora.herokuapp.com", requestOptions)
      .then((response) => response.json())
      .then((data) => {
         
        setProducts(data);
        groubBy(data);
        setGroupedProducts(grouped);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function groubBy(arr){
    var types = arr.map(a => a.product_name)
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
      
      const uniqueTypes = types.filter(unique);
      for(var i = 0 ;i<uniqueTypes.length;i++){
       grouped.push({type:uniqueTypes[i],data:arr.filter(obj => {
                 return obj.product_name === uniqueTypes[i];
               })});
      }
  
      console.log(grouped);
  }



  
    return ( 
        <div style={{
            // height: '100%',
            left:'0',
            // width: '100%',
            overflow: 'hidden',    
            position: 'relative',
            background: '#292929',
            display: "flex", 
            flexDirection: "row" 
        }}>
    <div  style={{paddingTop:'42px',paddingLeft:'41px'}}>
           <Filter products ={products}  />
     </div>
     <Box sx={{ display: "flex", flexDirection: "column" }}>
     <Typography
            
            style={{
              width: "111px",
              height: '42px',
              fontSize: "35px",
              fontWeight: "bold",
              lineHeight: "42px",
              marginLeft: "34px",
              marginTop: "34px",
              color: "rgba(255, 255, 255, 0.87)",
              textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
              
            }}
           
          >
            {"Edvora"}
          </Typography>
          <Typography
            
            style={{
              width: "97px",
              height: '30px',
              fontSize: "25px",
              fontWeight: "500px",
              lineHeight: "30px",
              marginLeft: "34px",
              marginTop: "34px",
              color: "rgba(255, 255, 255, 0.5)",
              textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
           
          >
            {"Products"}
          </Typography>
          {groupedProducts.map((productGroup) => (
          <div>
          <ProductsList products={productGroup}/>
          </div>
          ))}
        
          </Box>
        </div>
     );
}
 
export default Home;