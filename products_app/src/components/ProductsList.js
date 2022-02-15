import React from "react";
import ProductCard from "./ProductCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./hideScrollbar.css";
import {  RightArrow } from "./Arrows";
const ProductsList = ({products}) => {
 
 

  return (
    <div >
      <Typography
        sx={{
          width: "160px",
          height: "31px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "23px",
          marginLeft:'36px',
          marginTop:'21px',
          color: "#FFFFFF",
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
        title={products.type}
      >
        {products.type}
      </Typography>
      <Divider
        sx={{
          width: "970px",
          // left: "303px",
          // top: "192px",
          marginTop:'4px',
          border: "1px solid rgba(203, 203, 203, 0.5)",
          marginLeft:'34px',
        }}
      />

      <div
        style={{
          width: "984px",
          height: "190px",
          // left: "289px",
          // top: "204px",
          marginTop:'12px',
          background: "#131313",
          borderRadius: "15px",
          marginLeft:'20px',
        }}
      >
        <ScrollMenu 
       
        RightArrow={RightArrow}
                 >

          {products.data.map((product) => (
            <div style={{ marginTop: "21px", marginLeft: "20px" }}>
              <ProductCard product={product} />
            </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default ProductsList;
