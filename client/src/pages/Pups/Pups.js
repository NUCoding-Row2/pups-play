import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Pups extends Component {
  state = {
    Pups: [],
    ownername: "",
    pupname: "",
    breed:"",
    bio: ""
  };

  componentDidMount() {
    this.loadPups();
  }

  loadPups = () => {
    API.getPups()
      .then(res =>
        this.setState({ Pups: res.data, ownername: "", pupname: "", breed:"", age:"", size:"", bio: "" })
      )
      .catch(err => console.log(err));
  };

  deletePup = id => {
    API.deletePup(id)
      .then(res => this.loadPups())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.ownername && this.state.pupname) {
      API.savePup({
        ownername: this.state.ownername,
        pupname: this.state.pupname,
        breed: this.state.breed,
        age: this.state.age,
        size: this.state.size,
        bio: this.state.bio
      })
        .then(res => this.loadPups())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Profile Information</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.ownername}
                onChange={this.handleInputChange}
                name="ownername"
                placeholder="Owner's Name (required)"
              />
              <Input
                value={this.state.pupname}
                onChange={this.handleInputChange}
                name="pupname"
                placeholder="Pup's Name (required)"
              />
              <Input
                value={this.state.breed}
                onChange={this.handleInputChange}
                name="breed"
                placeholder="Pup's breed (required)"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="Pup's age (required)"
              />
              <Input
                value={this.state.size}
                onChange={this.handleInputChange}
                name="size"
                placeholder="Pup's size (required)"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="bio (Optional)"
              />
              <FormBtn
                disabled={!(this.state.pupname && this.state.ownername)}
                onClick={this.handleFormSubmit}
              >
                Submit Puppy
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Puppies' List</h1>
            </Jumbotron>
            {this.state.Pups.length ? (
              <List>
                {this.state.Pups.map(Pup => (
                  <ListItem key={Pup._id}>
                    <Link to={"/Pups/" + Pup._id}>
                      <strong>
                        {Pup.pupname} --> Owner: {Pup.ownername}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePup(Pup._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pups;
