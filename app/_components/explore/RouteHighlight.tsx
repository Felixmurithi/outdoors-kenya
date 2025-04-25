import { useState } from "react";
import ImageSlider from "@/app/_components/generic/ImageSlider";

function RouteHighlight() {
  //TODO images slider, route activities, map embed.

  return (
    <div>
      <ImageSlider images={["football.jpg", "bike_riding-event.jpg"]} />
    </div>
  );
}

export default RouteHighlight;
