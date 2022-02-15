import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
 
  var date = new Date(product.date);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "210px",
        height: "150px",
        background: "#232323",
        borderRadius: "4.68775px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: '0' }}>
        {/* <CardContent sx={{ flex: '1 0 auto' }}> */}
          <CardMedia
            component="img"
            sx={{
              width: "70px",
              height: "70px",
              marginTop: "10px",
              marginLeft: "12px",
              borderRadius: "5px",
            }}
            image={product.image}
            alt="Product Image"
          />
          <Typography
            
            style={{
              width: "90px",
              height: '14px',
              fontSize: "13px",
              fontWeight: "400px",
              lineHeight: "15.51px",
              marginLeft: "12px",
              marginTop: "13px",
              color: "rgba(255, 255, 255, 0.6)",
              
            }}
           
          >
            {product.address.city}
          </Typography>
        
          {/* </CardContent> */}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }} >
         
          <Typography
            component="div"
            sx={{
              width: "93px",
              height: "16px",
              fontSize: "15px",
              marginLeft: "20px",
              marginTop: "13px",
              fontWeight: "400px",
              lineHeight: "17.9px",
              color: "#FFFFFF",
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
            title={product.product_name}
          >
            {product.product_name}
          </Typography>
          <Typography
            component="div"
            sx={{
              width: "91px",
              height: "14px",
              fontSize: "13px",
              marginTop: "10px",
              marginLeft: "22px",
              fontWeight: "400px",
              lineHeight: "15.51px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            {product.brand_name}
          </Typography>
          <Typography
            component="div"
            sx={{
              width: "78.96px",
              height: "15px",
              fontSize: "13px",
              marginTop: "10px",
              marginLeft: "20px",
              fontWeight: "400px",
              lineHeight: "15.51px",
              color: "#FFFFFF",
            }}
          >
            {"$ " + product.price}
          </Typography>
          <Typography
            color="text.secondary"
            component="div"
            sx={{
              width: "66.57px",
              height: "14px",
              fontSize: "13px",
              marginTop: "15px",
              marginLeft: "20px",
              fontWeight: "500px",
              lineHeight: "15.51px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            { date.toLocaleDateString()}
          </Typography>

            
   
        </Box>
      </Box>
        <Typography
          
            style={{
              width: "183px",
              height: "15px",
              fontSize: "11px",
              fontWeight: "400px",
              lineHeight: "13.13px",
              marginLeft: "12px",
              marginTop: "14px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
           
          >
            { product.discription}
          </Typography>
    </Card>
  );
}
