import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Label, Input, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Control, LocalForm } from 'react-redux-form';
import { addTask } from '../redux/ActionCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: (title, date, description) => dispatch(addTask(title, date, description))
});

class NavComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      showModal: false,
      showNavbar: true
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
  }

  toggle() {
    console.log("hello");
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleSubmit(values) {
    this.toggle();
    this.props.addTask(this.props.taskId, values.title, values.select, values.date, values.message);
  }

  toggleNav() {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
  }

  setStartDate(date) {
    this.setState({
      date: date
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar className="navbar" light expand="md">
          <NavbarBrand className="navbrand" style={{ color: "white", fontSize: "24px", fontWeight: "medium" }}>ToDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.showNavbar} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: "white", fontSize: "18px" }} onClick={this.toggle}>
                  <FontAwesomeIcon icon={faPlusCircle} size="2x"/>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.showModal} toggle={this.toggle}>
          <ModalHeader style={{ backgroundColor: "#058ED9", color: "white" }} toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={3}>Title</Label>
                <Col md={9}>
                  <Control.text model=".title" id="title" name="title"
                    placeholder="Title"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={3}>Description</Label>
                <Col md={9}>
                  <Control.textarea model=".message" id="message" name="message"
                    rows="6" placeholder="Description"
                    className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="date" md={3}>Date</Label>
                <Col md={9}>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label for="exampleSelect" md={3}>Select</Label>
                <Col md={9}>
                  <Input type="select" name="select">
                    <option value="urgent">Urgent</option>
                    <option value="not">Not Urgent</option>
                  </Input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                  <Button className="ml-5" color="secondary" onClick={this.toggle}>Cancel</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);