import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover";

import contactbgImg from "../../../assets/contact/banner.jpg"


const Contact = () => {
    return (
        <>
        <Helmet>
            <title>Raiyan Restaurant | Contact</title>
        </Helmet>
        <Cover bgImg={contactbgImg} title={"CONTACT US"} subTitle={"Would you like to try a dish?"}/>

        
    
    </>
    );
};

export default Contact;