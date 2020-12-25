import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Button, Container, Row, Col, Navbar, Card } from "react-bootstrap";
import { getAllListings } from "../apis/url";
function Home() {
  /* State */
  const [allListings, setAllListings] = useState([]);

  const getListings = async () => {
    try {
      const res = await fetch(getAllListings, {
        method: "GET",
      });

      const response = await res.json();

      console.log(response);
      setAllListings(response);

      console.log(allListings);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };
  useEffect(() => {
    getListings();
  }, []);
  return (
    <Fragment>
      <Container className='main-body'>
        <Row className='nav-row'>
          <Col className='nav-col' xs={12}>
            <Navbar className='first-nav' bg='light'>
              <Navbar.Brand href='/'>RENTALS</Navbar.Brand>
            </Navbar>
            <Navbar className='second-nav' bg='light'>
              yep
            </Navbar>
          </Col>
        </Row>

        <Row className='main-body-phone-row'>
          <Col className='main-body-phone-col' xs={12}>
            {/* <Card className='phone-card'>
              <div
                className='phone-card-pic'
                style={{
                  backgroundImage: `url('https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fatlanta-falcons_416x416.jpg')`,

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className='phone-card-info'>
                <h3 className='phone-rent'>1200</h3>
                <h3 className='phone-city'>Atlanta</h3>
                <h3 className='phone-type'>house</h3>
              </div>
            </Card> */}

            {allListings.map((listing) => {
              return (
                <Card className='phone-card' key={listing.id}>
                  <div
                    className='phone-card-pic'
                    style={{
                      backgroundImage: "url(" + listing.pic + ")",

                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className='phone-card-info'>
                    <h3 className='phone-rent'>${listing.rent}/mo</h3>
                    <h3 className='phone-city'>{listing.city}</h3>
                    <h3 className='phone-type'>{listing.category}</h3>
                    <Button variant='danger'>More Info</Button>
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
