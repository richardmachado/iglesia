import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter  color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Mas Informacion</h5>
            <p>
             Para mas informacion: <a href="mailto:anselmo316@yahoo.com">anselmo316@yahoo.com</a> O Telefono: <a href="tel:209-828-1381">209-828-1381</a>
            </p>
          </MDBCol>
          <MDBCol md="6">
         
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href= "mailto:anselmo316@yahoo.com"> Anselmo Machado </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;