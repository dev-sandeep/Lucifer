import React from 'react'
import Form from 'react-bootstrap/Form'

import Banner from './Home/Banner'
import RestuarantStrip from './Home/RestuarantStrip'
class Home extends React.Component {
    render() {

        return (
            //get the locaton from the user
            <div className="container">
                <div className="col-lg-12 text-left">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Location</Form.Label>
                            <Form.Control type="email" className="col-lg-4" placeholder="Your Location" />
                            <Form.Text className="text-muted">
                                We'll not save your location.
                            </Form.Text>
                            <button className="btn btn-small btn-primary">Search</button>
                        </Form.Group>
                    </Form>

                    <hr />
                </div>

                <Banner />

                <RestuarantStrip />

                <hr />
            </div>
        );
    }
}
export default Home;