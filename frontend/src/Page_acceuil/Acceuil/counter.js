import React from "react";
import "./counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible1: false, visible2: false, visible3: false };
  }
  onChangeVisibility1 = isVisible => {
    this.setState({ visible1: isVisible });
  };
  onChangeVisibility2 = isVisible => {
    this.setState({ visible2: isVisible });
  };
  onChangeVisibility3 = isVisible => {
    this.setState({ visible3: isVisible });
  };
  render() {
    return (
      <section class="counters">
        <div class=" d-flex justify-content-around  row">
          <div className="col-sm-4 ">
            <div className="count ">
              <span
                class="iconify info-ecole"
                data-inline="false"
                data-icon="fa-solid:graduation-cap"
              ></span>
              <VisibilitySensor
                stayVisible={true}
                partialVisibility
                onChange={this.onChangeVisibility1}
                active={!this.state.visible1}
              >
                {({ isVisible }) => (
                  <div style={{ height: 75, fontSize: "50px" }}>
                    {isVisible ? <CountUp start={2000} end={2700} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <h3>élèves inscrit</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="count">
              <span
                class="iconify info-ecole"
                data-inline="false"
                data-icon="fa-solid:chalkboard-teacher"
              ></span>
              <VisibilitySensor
                stayVisible={true}
                partialVisibility
                onChange={this.onChangeVisibility2}
                active={!this.state.visible2}
              >
                {({ isVisible }) => (
                  <div style={{ height: 75, fontSize: "50px" }}>
                    {isVisible ? <CountUp end={35} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <h3>enseignents certifiés</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="count">
              <span
                class="iconify info-ecole"
                data-inline="false"
                data-icon="ic:baseline-percentage"
              ></span>
              <VisibilitySensor
                stayVisible={true}
                partialVisibility
                onChange={this.onChangeVisibility3}
                active={!this.state.visible3}
              >
                {({ isVisible }) => (
                  <div style={{ height: 75, fontSize: "50px" }}>
                    {isVisible ? <CountUp end={95} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <h3>taux de réussite</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Counter;
