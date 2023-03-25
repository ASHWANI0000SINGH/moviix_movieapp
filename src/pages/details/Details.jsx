import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import Recommendation from "./carousel/Recomendation";
import Similar from "./carousel/Similar";
import Cast from "./cast/Cast";
import "./details.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import VideosSection from "./videoSection/VideoSection";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = UseFetch(
    `/${mediaType}/${id}/credits`
  );
  // console.log(data?.results?.[0])
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />

      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
