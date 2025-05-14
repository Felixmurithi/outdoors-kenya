import { useState } from "react";
import ImageSlider from "@/app/_components/generic/ImageSlider";
import Tag from "../generic/Tag";
import GoogleMapsRouteEmbed from "./GoogleMapsRouteEmbed";
import LinkText from "../generic/LinkText";

// types pof activities- hiking, cycling, mountain-biking

export default function PopularRoutes() {
  //TODO title images slider, route activities, eleveation, lenegth, difficulty(himing and cycling ) map embed.

  //TODO - where do u get eleveation and length, terrain  render

  // route title should be generated from the route map stops

  return (
    <div className="grid  gap-6">
      <div className="flex border-stone-600  font-semibold  gap-4">
        <img src="/icons/star_box.svg" alt="" />
        <h4>Popular Routes</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <Route />
      </div>
    </div>
  );
}

function Route() {
  return (
    <div className="grid gap-2">
      {/* <LinkText link="#">Ngong Hills Sixth Hill</LinkText> */}
      <ImageSlider images={["football.jpg", "bike_riding-event.jpg"]} />

      <div className="grid gap-2 pl-2">
        <h4 className="font-semibold text-stone-500">Ngong Hills 6th Hill</h4>

        <div className="grid gap-1">
          <div className="text-sm text-stone-400">
            length: 14km elevation: 200m
          </div>
          <div>
            <Tag color="bg-green-500">hiking</Tag> <Tag>cycling</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

/// INsights
// camping and picnic need a new webiste altogether
// use AI for code completions

// TODO - Note
// coding takes a long time, a minute is extremly short and u dont even get mcuyh done in 15 minutes, even doing some simple changes to the design like adding spacing, changing fonts takes some time add a little bit of thinking and an hour passes. Taking brakes to relive the brain is important
