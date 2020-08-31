import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask } from '../redux/ActionCreator';
import { CardBody, Card, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import { FadeTransform } from "react-animation-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: (id, title, type, date, description) => dispatch(addTask(id, title, type, date, description)),
  deleteTask: (id, title, type, date, description) => dispatch(deleteTask(id, title, type, date, description))
});

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id, title, type, date, description) {
    console.log("id");
    deleteTask(id, title, type, date, description);
  }

  render() {
    const menu = this.props.tasks.map((task) => {
      return (
        <div className="col-10 ml-5" key={task.id}>
          <Card style={{ marginBottom: "20px", borderWidth: "3px", borderColor: "#0096c7" }}>
            <div className="row">
              <div className="col-md-2 mb-2 ml-4 mr-4 mt-2 text-center" style={{ backgroundColor: "#00b4d8", margin: "0px" }}>
                {task.date ? (
                  <CardSubtitle className="mt-auto mb-auto" style={{ fontSize: "20px", color: "white" }}>{task.date}</CardSubtitle>
                ) :
                  <CardSubtitle className="mt-auto mb-auto" style={{ fontSize: "20px", color: "white" }}>No Due Date</CardSubtitle>}
              </div>
              <div className="col-md-8" style={{ padding: "20px" }}>
                <CardBody >
                  <CardTitle><h3>{task.title}</h3></CardTitle>
                  <CardText>{task.description}</CardText>
                </CardBody>
                <CardFooter style={{backgroundColor: "white", margin: "25px", marginBottom: "0px" }}>
                  <span onClick={this.handleDelete(task.id, task.title, task.type, task.date, task.description)}><FontAwesomeIcon icon={faTrash} size="2x" color="#0096c7" /></span> 
                </CardFooter>
              </div>
            </div>
          </Card>
        </div >
      );
    })

    return (
      <FadeTransform in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <div className="container">
          <div className="row main_component">
            {menu}
          </div>
        </div>
      </FadeTransform>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);