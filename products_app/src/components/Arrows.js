import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";


export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <div  onClick={() => scrollNext()} style={{  fontSize: "30px",
             width: "10px",
             height: "33px",
             marginLeft: "36px",
             marginTop: "66px",
             color: "#FFFFFF",
             backgroundColor: 'transparent'
            }}
            
             >{" > "}</div>
   
  );
}
