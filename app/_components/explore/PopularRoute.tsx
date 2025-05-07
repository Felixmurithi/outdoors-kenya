import { useState } from "react";
import ImageSlider from "@/app/_components/generic/ImageSlider";
import Tag from "../generic/Tag";
import GoogleMapsRouteEmbed from "./GoogleMapsRouteEmbed";

// types pof activities- hiking, cycling, mountain-biking

function Route() {
  //TODO title images slider, route activities, eleveation, lenegth, difficulty(himing and cycling ) map embed.

  //TODO - where do u get eleveation and length, terrain  render

  // route title should be generated from the route map stops

  return (
    <div className="border py-4 px-1 w-80">
      <h4 className="font-bold">Karura WaterFall</h4>
      <ImageSlider images={["football.jpg", "bike_riding-event.jpg"]} />

      <div>length: 14km elevation: 200m</div>
      <div>
        <Tag>hiking (E)</Tag> <Tag>cycling</Tag>
      </div>

      <GoogleMapsRouteEmbed />
    </div>
  );
}

export default Route;

/// INsights
// camping and picnic need a new webiste altogether
// use AI for code completions
