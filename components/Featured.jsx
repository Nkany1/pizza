import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css"

const Features = () => {
     
  const[index , setIndex] = useState(0);


  const pizzas = [

    "/img/pizza.png",
    "/img/pizza.png",
    "/img/pizza.png",
  ]

  const handleArrow = (direction) => {
     if(direction === "l"){
       setIndex(index !== 0 ? index - 1 : 2)
     }
     if(direction === "r"){
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }
   
        console.log(index)
    return (  
      <div className={styles.container}>

      <div className={styles.arrowContainer} objectFit="contain" style={{left:0}} onClick={() => handleArrow("l")} >
       <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
        
        <div className={styles.wrapper} style={{transform:`translateX(${-100 * index}vw)`}}>
           {pizzas.map((p , i) => (
             <>
             <div className={styles.imgContainer}> 
             <Image src={p} key={i} alt="" layout="fill" objectFit="contain" /> 
            </div> 
            <div className={styles.desc}>
              <p>
              
              </p>
            </div> 
             
             </>
                    
            ))}   
        </div>

        <div className={styles.arrowContainer} objectFit="contain" style={{right:0}} onClick={() => handleArrow("r")} >
         <Image src="/img/arrowr.png" alt=""  layout="fill"/>
       </div>
     </div>
    );
}
 
export default Features;