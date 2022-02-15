import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DropdownMenu from "./DropdownMenu";


const Filter = ({products}) => {
    // const products = [
    //     {product_name:"apple",brand_name:"appache",address:{state:"us",city:"alex"}},
    //     {product_name:"apple11",brand_name:"appache11",address:{state:"us11",city:"alex11"}}
    //   ];
    function unique(types){
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
          }
                
          return types.filter(unique);
          
      }
    
    return ( 
        <div style={{
            width: '228px',
            height: '275px',
           background: '#131313',
           borderRadius: '15px'
        }}>
             <Typography
        sx={{
            marginLeft:"30px",
            paddingTop:"24px",
            fontFamily:' SF Pro Display',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#A5A5A5'
        }}
      >
        {"Filters"}
      </Typography>
      <Divider
        sx={{
          width: "158px",
          marginLeft:"30px",
          marginTop:'11px',
          border: " 1px solid #CBCBCB;",
        }}
      />
      <div style={{marginTop:'36px',marginLeft:'25px'}}>
       <DropdownMenu title={"Products"} data={unique(products.map(a => a.product_name))}/>
       <DropdownMenu title={"State"} data={unique(products.map(a => a.address.state))}/>
       <DropdownMenu title={"City"} data={unique(products.map(a => a.address.city))}/>
        </div>
        </div>
     );
}
 
export default Filter;