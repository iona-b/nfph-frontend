import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { fetchEntries } from "../actions/fetchEntries";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledCollapse
} from 'reactstrap';

const ViewEntries = () => {

  const allEntries = useSelector(state => state.entryReducer.allEntries[0])

  // Fetches all entries when the user goes to view all entries

  useEffect(() => {
      fetchAllEntries();
  }, []);

  const dispatch = useDispatch();

  const fetchAllEntries = () => {
      dispatch(fetchEntries());
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const getDate = (date) => {

    let year;
    let month;
    let day;

    if (date) {
        year = date.slice(0, 4);
        month = monthNames[date.slice(5, 7) - 1];
        day = date.slice(8, 10)
    }

    return `${month} ${day}, ${year}`

  }


  // Creates entry cards from allEntries

  const createEntryCards = () => {

      return allEntries.map(entry => {

        return (
          <Row>
            <Col>
              <Card outline color="danger" className="border" key={entry.id}>
                <CardHeader>{getDate(entry.date_of_entry)}</CardHeader>
                <CardBody>
                  <CardTitle>Issue</CardTitle>
                  <CardText>{entry.issue}</CardText>
                  <CardTitle>Location</CardTitle>
                  <CardText>{entry.location}</CardText>
                  <CardTitle>Pain Level</CardTitle>
                  <CardText>{entry.pain_level}</CardText>
                  <CardTitle>Symptoms</CardTitle>
                  <CardText>{entry.symptoms}</CardText>
                  <CardText>
                    <small className="text-muted">3 comments</small>
                  </CardText>
                  <Button id="changeThis1">View Comments</Button>
                  <Button onClick={(event => redirect(event))}>Edit Entry</Button>
                  <Button>Delete Entry</Button>
                  <UncontrolledCollapse toggler="#changeThis1">
                    <Card>
                      <CardBody>
                        <CardTitle>July 15, 2020</CardTitle>
                        <CardText>A friend started noticing this mole looked weird.</CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <CardTitle>September 20, 2020</CardTitle>
                        <CardText>Mole start itching today</CardText>
                      </CardBody>
                    </Card>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText">Add Comment</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                      </FormGroup>
                    </Form>
                  </UncontrolledCollapse>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        )
      })
    

  }


  // Takes user to new entry page when they click edit entry

  const history = useHistory();

  const redirect = () => {
    history.push('/patient/newentry');
  }

  return (

    <div>
      <h4 className="mb-3">All Entries</h4>
      {allEntries ? createEntryCards() : null}
      {/* <Row>
        <Col>
          <Card outline color="danger" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <CardText>
                <small className="text-muted">3 comments</small>
              </CardText>
              <Button id="changeThis1">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <Button>Delete Entry</Button>
              <UncontrolledCollapse toggler="#changeThis1">
                <Card>
                  <CardBody>
                    <CardTitle>July 15, 2020</CardTitle>
                    <CardText>A friend started noticing this mole looked weird.</CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle>September 20, 2020</CardTitle>
                    <CardText>Mole start itching today</CardText>
                  </CardBody>
                </Card>
                <Form>
                  <FormGroup>
                    <Label for="exampleText">Add Comment</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card outline color="success" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Thoughts</CardTitle>
              <CardText>
                - Card can be outlined, depending on severity?<br></br>
                - If 0 comments, toggle view comment button to Add comment?<br></br>
                - 1 comment vs 2 comments<br></br>
                - images displayed aligned right with submitted pics
              </CardText>
              <CardText>
                <small className="text-muted">0 comments</small>
              </CardText>
              <Button id="changeThis2">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <Button>Delete Entry</Button>
              <UncontrolledCollapse toggler="#changeThis2">
                <Form>
                  <FormGroup>
                    <Label for="exampleText">Add Comment</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card outline color="warning" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Note to self</CardTitle>
              <CardText>Make comment isOpen card specific</CardText>
              <CardText>
                <small className="text-muted">1 comment</small>
              </CardText>
              <Button id="changeThis3">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <Button>Delete Entry</Button>
              <UncontrolledCollapse toggler="#changeThis3">
                <Card>
                  <CardBody>
                    <CardTitle>November 2, 2020</CardTitle>
                    <CardText>JK fixed it via uncontrolled collapse</CardText>
                  </CardBody>
                </Card>
                <Form>
                  <FormGroup>
                    <Label for="exampleText">Add Comment</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                </Form>
              </UncontrolledCollapse>
            </CardBody>
          </Card>
        </Col>
      </Row> */}

    </div>

  );
}

export default ViewEntries;