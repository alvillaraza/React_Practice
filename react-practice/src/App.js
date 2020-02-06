import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // This is the state(s) of the app
  // 'state' is the light switch setting (on or off)
  state = {
    lightSwitchStatus: false
  };

  //switch means somebody flipped the lightswitch (on or off)
  switch = () => {
    this.setState({
      lightSwitchStatus: !this.state.lightSwitchStatus
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switch}>Switch</button>

        {/* in line 24, amazonPackage is now telling Keetee if the switch has been flipped */}
        <Keetee amazonPackage={this.state.lightSwitchStatus} />

        {/* line 27 means BigAssButton can flip the switch */}
        <AnotherLightSwitch amazonPackage={this.switch} />
      </div>
    );
  }
}

//in line 34, Keetee meets with upsDeliveryGuy, which is props in reactjs.
function Keetee(upsDeliveryGuyAKAprops) {
  return (
    <div>
      <h1>Client needs this text to be visble</h1>

      {/* in line 40, upsDeliveryGuy gives keetee the amazonPackage. amazonPackage indicates the lightSwitchStatus according to line 24. line 40-41 says if lightswitch has been flipped, then show keetee.jpg, otherwise don't show keetee.jpg */}
      {upsDeliveryGuyAKAprops.amazonPackage ? 
        <img src="keetee.jpg" alt="" /> :  "" }
    </div>
  );
}

//upsDeliveryGuy hands AnotherLightSwitch the amazonPackage. line 27 shows that amazonPackage contains the switch on line 12 (this.switch)
function AnotherLightSwitch(upsDeliveryGuyAKAprops) {
  return (
    <button onClick={upsDeliveryGuyAKAprops.amazonPackage}>
      Other lightswitch
    </button>
  );
}

export default App;
