import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import { topChartPlaylists } from "@/utils/playlists";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Top Trending Songs • Okv-Tunes",
};

const Chart = () => {
  return (
    <div className="inner-container flex flex-col gap-6">
      <BackButton />

      <h2 className="text-lg sm:text-2xl font-semibold truncate">
        Featured Charts
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-x-2 justify-items-center">
        {topChartPlaylists.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} type="playlist" />
        ))}
      </div>
    </div>
  );
};

export default Chart;
