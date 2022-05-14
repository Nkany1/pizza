import Image from "next/image";
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
           <div className={styles.item}>
             <Image src="/img/bg.png" layout="fill" objectFit="cover" alt="" />
           </div>

           <div className={styles.item}>
             <div className={styles.card}>
              <h2 className={styles.motto}>
                 Oh YES, WE DID WELL ORGINIZED RESTAURANT
              </h2>
             
             </div>
             <div className={styles.card}>
              <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
              <p className={styles.text}>
                 312 Bhece drive 
                 <br />Pietermaritzburg
                 <br /> 3201
              </p>

              <p className={styles.text}>
                03 Foxgrove road 
                <br />Pietermaritzburg
                <br /> 3201
              </p>

              <p className={styles.text}>
                314 Jabu Ndlovu street
                <br />Pietermaritzburg
                <br /> 3201
             </p>
             </div>
             <div className={styles.card}>
               <h1 className={styles.title}>WORKING HOURS</h1>
               <p className={styles.text}>
                 MONDAY UNTILL FRIDAY
                 <br /> 9:00 - 12-00               
               </p>
               <p className={styles.text}>
                 SATURDAY UNTILL SUNDAY
               <br /> 12:00 - 24-00               
             </p>
             </div>
           </div>
        </div>
      );
}
 
export default Footer;