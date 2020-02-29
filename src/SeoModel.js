import React,{component, Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class SeoModel extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Seo Datapoints 1
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
               This is Seo Datapoints 1 model
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}