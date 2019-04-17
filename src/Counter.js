import React from "react";
import RetroHitCounter from "react-retro-hit-counter";

const Counter = () => (
  <RetroHitCounter
    hits={0}  /* {GET SCORES} FROM localstorage /// {this.state.count} from compteur */
    withBorder={false}
    withGlow={true}
    minLength={1}
    size={50}
    padding={4}
    digitSpacing={6}
    segmentThickness={4}
    segmentSpacing={0.5}
    segmentActiveColor="#FFFFFF"
    segmentInactiveColor="#0000"
    backgroundColor="#0000"
    borderThickness={7}
    glowStrength={0.2}
    glowSize={10}
  />
);

export default Counter;

// === undefined ? 0 : localStorage.getItem("count")
// localStorage.getItem("count")=== "" ? 0 : localStorage.getItem("count")

