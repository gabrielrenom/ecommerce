import Banner from "./Banner";
import NewArrival from "../../components/NewArrival/NewArrival";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreditCardWidget from "../../components/CreditCardWidget/CreditCardWidget";
import { Link } from "react-router-dom";
import Image from "../../statics/images/nillkin-case.webp"
import { useEffect } from "react";
import { getLandingPageProducts} from "../../services/productservice";
import { useState } from "react";

function FrontPage() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            var result = await getLandingPageProducts();
            console.log(result);  
            setData(result);
        }
        
        fetchData();
    }, []);

   
  return (
    <>
      <ScrollToTopOnMount />
          <Banner />
          <CreditCardWidget merchantId={"01234567890123456789"} merchantName={"SoNice"} totalPrice={"4"} />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
         This is a demo of a shopping cart using React, Redux, and Bootstrap.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse our products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {
                data.length>0? data.map((item) => {
                    return <NewArrival key={item.id} price={item.price} image={item.image} title={item.name} id={item.id}/>;
                }):<>Loading...</>
            }
        
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
