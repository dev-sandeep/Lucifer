import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class RestuarantStrip extends React.Component {
    render() {
        const addToCart = (e) => {
            e.preventDefault();
            /* dispatch from here */
            
        }

        return (
            <div className="row">

                <div className='col-lg-4'>
                    <Jumbotron>
                        <h1>Categories</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                    </Jumbotron>
                </div>
                <div className='col-lg-8'>
                    <Jumbotron>
                        <h1>Product 1</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        <p>
                            <Button variant="primary" onClick={addToCart}>Add To Cart</Button>
                        </p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1>Product 2</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        <p>
                            <Button variant="primary">Add To Cart</Button>
                        </p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1>Product 3</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        <p>
                            <Button variant="primary">Add To Cart</Button>
                        </p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1>Product 4</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        <p>
                            <Button variant="primary">Add To Cart</Button>
                        </p>
                    </Jumbotron>
                </div>


            </div>
        )
    }
}

export default RestuarantStrip;