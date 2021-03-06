import React, { Component } from 'react'
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import {Howl} from "howler";

const audioClips = [
    {sound: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3", label: "Sound Volume 1"},
    {sound: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3", label: "Sound Volume 2"},
    {sound: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3", label: "Sound Volume 3"},
    {sound: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3", label: "Sound Volume 4"}
]

export default class AudioTest extends Component {

    soundPlay = (src) => {
        const sound = new Howl ({
            src, 
            html5: true 
        })
        sound.play();
    }

    RenderButtonSound = () => {
        return audioClips.map((soundObj, index) => {
            return( <> 
                <Button className="btn" color="info" key={index} onClick={() => this.soundPlay(soundObj.sound)}> {soundObj.label} </Button> <br/> <br/></> 
            ) 

        })
    }
    render() {
        return (
            <div> 
                <center>
                    <h1>Audio Test </h1>
                    <br/>
                    <h3>Please press button to hear sound</h3><br/>
                    {this.RenderButtonSound()}
                    {/* <br/><br/><Button className="btn" color="primary" onClick={null}>Sound Volume 1</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={null}>Sound Volume 2</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={null}>Sound Volume 3</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={null}>Sound Volume 4</Button> 
                    <br/><br/> */}
                    <br/><br/>
          <h4 className="card-subtitle">Select the lowest Sound Volume audible to you:</h4> <br/>


          <input className="form-control-lg" type="number" min="1" max="5"/> <br/> <br/> 
          <Button className="btn" color="success" type="submit" value={"Submit Entry"}> Save </Button> 


</center>
            </div>
        )
    }
}
// Form example 
{/* <input className="form-control-lg" type="number" min="1" max="5" name="painLevel" value={painLevel} onChange={(event) => setPainLevel(event.target.value)}/> */}

// Button => onClick function 
{/* <br/><br/><Button className="btn" color="primary" onClick={audioSource.play()}>Sound Volume 2</Button>  */}
