import React from "react";
import styled from 'styled-components'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footers = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
height: 8.5rem

`

const Footer = () => {
  return (
<Footers>
      <MDBFooter color="blue" className="page-footer font-small pt-4">
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
      </Footers>
  );
}

export default Footer;