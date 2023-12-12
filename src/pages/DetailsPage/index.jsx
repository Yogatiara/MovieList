import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { IMAGE_URL_HEADER } from "../../constants/config";
import { convertDate } from "../../utils";
import { BiSolidStar } from "react-icons/bi";
import DetailsSkeleton from "./skeleton";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../redux/actions/movieActions";

// Only loads the YouTube player

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { detail } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getDetailMovie(id, setIsLoading));
  }, [id, dispatch, setIsLoading]);

  return (
    <>
      <Navbar />
      <div className="bg-slate-950 text-white">
        {isLoading ? (
          <DetailsSkeleton />
        ) : (
          <>
            <div className="relative flex h-[100vh] max-h-[100vh] w-full flex-wrap">
              <div className="absolute left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-slate-950 to-slate-950/30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-slate-950/0"></div>
              <img
                src={
                  detail.backdrop_path
                    ? IMAGE_URL_HEADER + detail.backdrop_path
                    : "/images/image-not-found.jpg"
                }
                alt={detail.title}
                className=" h-screen w-full object-cover object-center"
              />
              <div className="absolute bottom-1/3 left-6 z-20 w-11/12 translate-y-1/3 text-white md:left-10">
                <div className="flex items-start gap-3 md:gap-5">
                  <div className="flex flex-col items-start gap-3 md:gap-5 ">
                    <h1 className="text-xl font-bold tracking-wide md:text-5xl">
                      {detail.title} ({detail?.release_date?.slice(0, 4)})
                    </h1>
                    <p className="text-base md:text-xl ">
                      <span>{convertDate(detail.release_date)} |</span>
                      {detail?.genres?.map((genre, i) => {
                        const firstIndex = i === 0;
                        return (
                          <span key={genre.id}>
                            {firstIndex ? " " : ","} {genre.name}
                          </span>
                        );
                      })}
                    </p>
                    <p className="text-base leading-relaxed md:text-xl">
                      {detail.overview}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <BiSolidStar className="h-6 w-6 text-yellow-600" />
                      <p className="text-base font-semibold md:text-lg">
                        {detail.vote_average} / 10
                      </p>
                    </div>
                    <div className="h-[500px] w-[1000px]">
                      {detail && detail.videos && detail.videos.length > 0 && (
                        <ReactPlayer
                          className="react-player"
                          url={`https://www.youtube.com/watch?v=${detail.videos[0].key}`}
                          width="100%"
                          height="100%"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
