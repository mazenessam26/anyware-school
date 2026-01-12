import Lottie from "lottie-react";
import UnderConstruction from "../assets/animation.json"
import BasicCard from "./BasicCard";
export default function underConstruction(){
    return(
      <div>
        <Lottie
        animationData={UnderConstruction}
        loop={true}
        autoplay={true}
          
        />
        
        <BasicCard>
          <h1 style={{color: "black"}}>Under Construction</h1>
        </BasicCard>
      </div> 
    )
}