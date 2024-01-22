import React, { useState, useEffect, useCallback } from "react";
import BannerChar from "./BannerChar";

const RandomSGrid2 = () => {
  const [isToggled, setIsToggled] = useState(true);

  const [state, setState] = useState(
    Array.from({ length: 573 }, () => ({
      opacity: Math.random() >= 0.5 ? '0' : '1',
    }))
  );

  useEffect(() => {
    console.log("Opacity changed:", state[1]?.opacity);
  }, [state]);

  const updateOpacity = useCallback(
    (indices) => {
      const newState = [...state];
      indices.forEach((index) => {
        newState[index].opacity = newState[index].opacity === "0" ? "1" : "0";
      });
      console.log("newState", newState[0]?.opacity);
      setState(newState);
    },
    [state] // No dependencies since useCallback is used properly
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndices = Array.from({ length: 5 }, () => Math.floor(Math.random() * 573));
      console.log('changed', randomIndices);
      updateOpacity(randomIndices);
    }, 150);

    return () => clearInterval(intervalId);
  }, [updateOpacity]);


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 585 462"
      width="585"
      height="462"
      preserveAspectRatio="xMidYMid meet"
      style={{
        "width": "585",
        "height": "462",
        "transform": "translate3d(0px, 0px, 0px)",
        "contentVisibility": "visible",
      }}
    >
      <defs>
        <clipPath id="__lottie_element_2">
          <rect width="585" height="462" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_2)">
        <g
          fill="rgb(0,0,0)"
          fontSize="22"
          fontFamily="Shne"
          fontStyle="normal"
          fontWeight="normal"
          aria-label=" S S S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S S S S S
         S S S S S S S S S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S S S S
         S S S S S S S S S S S S S S S S S
         S S S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S S S S S S S
         S S S S S S S S S S S S
          S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S
          S S S S S S S S S S S S S S S S S
          S S S S S S S S S S S S S S S S
"
          transform="matrix(1,0,0,1,291,232)"
          opacity="1"
          style={{ display: "block" }}
        >
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-33.238014221191406,-187.70428466796875)"
            opacity={state[0].opacity}
            style={{ display: "inherit" }}
          >
            <g transform="scale(0.22,0.22)">
              <g style={{ display: "block" }}></g>
            </g>
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.6619930267334,-187.70428466796875)"
            opacity={state[1].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.363988876342773,-187.70428466796875)"
            opacity={state[3].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.93400001525879,-187.70428466796875)"
            opacity={state[5].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23198699951172,-187.70428466796875)"
            opacity={state[7].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999114990234,-187.70428466796875)"
            opacity={state[9].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,-187.70428466796875)"
            opacity={state[11].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,-187.70428466796875)"
            opacity={state[13].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,-187.70428466796875)"
            opacity={state[15].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.72198486328125,-187.70428466796875)"
            opacity={state[17].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.01998901367188,-187.70428466796875)"
            opacity={state[19].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,-187.70428466796875)"
            opacity={state[21].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,-187.70428466796875)"
            opacity={state[23].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-187.70428466796875)"
            opacity={state[25].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-187.70428466796875)"
            opacity={state[27].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,-160.30429077148438)"
            opacity={state[29].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.4499969482422,-160.30429077148438)"
            opacity={state[31].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,-160.30429077148438)"
            opacity={state[33].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85401916503906,-160.30429077148438)"
            opacity={state[35].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.5560073852539,-160.30429077148438)"
            opacity={state[37].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25800323486328,-160.30429077148438)"
            opacity={state[39].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,-160.30429077148438)"
            opacity={state[41].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.661996841430664,-160.30429077148438)"
            opacity={state[43].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364006042480469,-160.30429077148438)"
            opacity={state[45].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933998107910156,-160.30429077148438)"
            opacity={state[47].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200225830078,-160.30429077148438)"
            opacity={state[49].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,-160.30429077148438)"
            opacity={state[51].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,-160.30429077148438)"
            opacity={state[53].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,-160.30429077148438)"
            opacity={state[55].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,-160.30429077148438)"
            opacity={state[58].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.4499969482422,-160.30429077148438)"
            opacity={state[60].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,-160.30429077148438)"
            opacity={state[62].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85401916503906,-160.30429077148438)"
            opacity={state[64].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.5560073852539,-160.30429077148438)"
            opacity={state[66].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25800323486328,-160.30429077148438)"
            opacity={state[68].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,-160.30429077148438)"
            opacity={state[70].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.661996841430664,-160.30429077148438)"
            opacity={state[72].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364006042480469,-160.30429077148438)"
            opacity={state[74].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933998107910156,-160.30429077148438)"
            opacity={state[76].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200225830078,-160.30429077148438)"
            opacity={state[78].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,-160.30429077148438)"
            opacity={state[80].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,-160.30429077148438)"
            opacity={state[82].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,-160.30429077148438)"
            opacity={state[84].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,-160.30429077148438)"
            opacity={state[86].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-160.30429077148438)"
            opacity={state[88].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-160.30429077148438)"
            opacity={state[90].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31797790527344,-160.30429077148438)"
            opacity={state[92].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61598205566406,-160.30429077148438)"
            opacity={state[94].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-160.30429077148438)"
            opacity={state[96].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-160.30429077148438)"
            opacity={state[98].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-284.94000244140625,-133.904296875)"
            opacity={state[99].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-261.6419982910156,-133.904296875)"
            opacity={state[101].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-238.34400939941406,-133.904296875)"
            opacity={state[103].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-215.04600524902344,-133.904296875)"
            opacity={state[105].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,-133.904296875)"
            opacity={state[107].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.4499969482422,-133.904296875)"
            opacity={state[109].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,-133.904296875)"
            opacity={state[111].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85400390625,-133.904296875)"
            opacity={state[113].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.55599975585938,-133.904296875)"
            opacity={state[115].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25801086425781,-133.904296875)"
            opacity={state[117].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,-133.904296875)"
            opacity={state[119].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.661996841430664,-133.904296875)"
            opacity={state[121].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.363992691040039,-133.904296875)"
            opacity={state[123].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.934011459350586,-133.904296875)"
            opacity={state[125].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23201370239258,-133.904296875)"
            opacity={state[127].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999114990234,-133.904296875)"
            opacity={state[129].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82798767089844,-133.904296875)"
            opacity={state[131].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,-133.904296875)"
            opacity={state[133].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,-133.904296875)"
            opacity={state[135].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-133.904296875)"
            opacity={state[137].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-133.904296875)"
            opacity={state[139].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31800842285156,-133.904296875)"
            opacity={state[141].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61598205566406,-133.904296875)"
            opacity={state[143].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9140167236328,-133.904296875)"
            opacity={state[145].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-133.904296875)"
            opacity={state[147].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.934005737304688,-107.50430297851562)"
            opacity={state[149].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200988769531,-107.50430297851562)"
            opacity={state[151].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,-107.50430297851562)"
            opacity={state[153].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82798767089844,-107.50430297851562)"
            opacity={state[155].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,-107.50430297851562)"
            opacity={state[157].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,-107.50430297851562)"
            opacity={state[159].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-107.50430297851562)"
            opacity={state[161].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-107.50430297851562)"
            opacity={state[163].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,-107.50430297851562)"
            opacity={state[165].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,-107.50430297851562)"
            opacity={state[167].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,-107.50430297851562)"
            opacity={state[169].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-107.50430297851562)"
            opacity={state[171].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15199279785156,-81.10430908203125)"
            opacity={state[173].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85398864746094,-81.10430908203125)"
            opacity={state[175].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.55599975585938,-81.10430908203125)"
            opacity={state[177].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25801086425781,-81.10430908203125)"
            opacity={state[179].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.96000671386719,-81.10430908203125)"
            opacity={state[181].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.662004470825195,-81.10430908203125)"
            opacity={state[183].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.3639984130859375,-81.10430908203125)"
            opacity={state[185].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.934005737304688,-81.10430908203125)"
            opacity={state[187].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23199462890625,-81.10430908203125)"
            opacity={state[189].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,-81.10430908203125)"
            opacity={state[191].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.8280029296875,-81.10430908203125)"
            opacity={state[193].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12600708007812,-81.10430908203125)"
            opacity={state[195].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,-81.10430908203125)"
            opacity={state[197].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-81.10430908203125)"
            opacity={state[199].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-81.10430908203125)"
            opacity={state[201].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31800842285156,-81.10430908203125)"
            opacity={state[203].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.6160125732422,-81.10430908203125)"
            opacity={state[205].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-81.10430908203125)"
            opacity={state[207].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-81.10430908203125)"
            opacity={state[209].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,-54.704315185546875)"
            opacity={state[211].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.4499969482422,-54.704315185546875)"
            opacity={state[213].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,-54.704315185546875)"
            opacity={state[215].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85401916503906,-54.704315185546875)"
            opacity={state[217].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.5560073852539,-54.704315185546875)"
            opacity={state[219].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25800323486328,-54.704315185546875)"
            opacity={state[221].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,-54.704315185546875)"
            opacity={state[223].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.661996841430664,-54.704315185546875)"
            opacity={state[225].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364006042480469,-54.704315185546875)"
            opacity={state[227].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933998107910156,-54.704315185546875)"
            opacity={state[229].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200225830078,-54.704315185546875)"
            opacity={state[231].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,-54.704315185546875)"
            opacity={state[233].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,-54.704315185546875)"
            opacity={state[235].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,-54.704315185546875)"
            opacity={state[237].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,-54.704315185546875)"
            opacity={state[239].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-54.704315185546875)"
            opacity={state[241].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-54.704315185546875)"
            opacity={state[243].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31797790527344,-54.704315185546875)"
            opacity={state[245].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61598205566406,-54.704315185546875)"
            opacity={state[247].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-54.704315185546875)"
            opacity={state[249].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-54.704315185546875)"
            opacity={state[251].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.6619930267334,-28.3043212890625)"
            opacity={state[253].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.363988876342773,-28.3043212890625)"
            opacity={state[255].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.93400001525879,-28.3043212890625)"
            opacity={state[257].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23198699951172,-28.3043212890625)"
            opacity={state[259].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999114990234,-28.3043212890625)"
            opacity={state[261].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,-28.3043212890625)"
            opacity={state[263].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,-28.3043212890625)"
            opacity={state[265].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,-28.3043212890625)"
            opacity={state[267].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.72198486328125,-28.3043212890625)"
            opacity={state[269].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.01998901367188,-28.3043212890625)"
            opacity={state[271].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,-28.3043212890625)"
            opacity={state[273].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,-28.3043212890625)"
            opacity={state[275].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-28.3043212890625)"
            opacity={state[277].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-28.3043212890625)"
            opacity={state[279].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.55601501464844,-1.904327392578125)"
            opacity={state[280].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25801086425781,-1.904327392578125)"
            opacity={state[282].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.96000289916992,-1.904327392578125)"
            opacity={state[284].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.66200065612793,-1.904327392578125)"
            opacity={state[286].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.363995552062988,-1.904327392578125)"
            opacity={state[288].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.93400764465332,-1.904327392578125)"
            opacity={state[290].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.231998443603516,-1.904327392578125)"
            opacity={state[292].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,-1.904327392578125)"
            opacity={state[294].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.8280029296875,-1.904327392578125)"
            opacity={state[296].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,-1.904327392578125)"
            opacity={state[298].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,-1.904327392578125)"
            opacity={state[300].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,-1.904327392578125)"
            opacity={state[302].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,-1.904327392578125)"
            opacity={state[304].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31800842285156,-1.904327392578125)"
            opacity={state[306].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.6160125732422,-1.904327392578125)"
            opacity={state[308].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,-1.904327392578125)"
            opacity={state[310].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,-1.904327392578125)"
            opacity={state[312].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,24.49566650390625)"
            opacity={state[313].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85400390625,24.49566650390625)"
            opacity={state[315].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.5560073852539,24.49566650390625)"
            opacity={state[317].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25800323486328,24.49566650390625)"
            opacity={state[319].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.95999526977539,24.49566650390625)"
            opacity={state[321].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.6619930267334,24.49566650390625)"
            opacity={state[323].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.3640031814575195,24.49566650390625)"
            opacity={state[325].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.93400001525879,24.49566650390625)"
            opacity={state[327].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200607299805,24.49566650390625)"
            opacity={state[329].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999114990234,24.49566650390625)"
            opacity={state[331].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,24.49566650390625)"
            opacity={state[333].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,24.49566650390625)"
            opacity={state[335].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,24.49566650390625)"
            opacity={state[337].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.72201538085938,24.49566650390625)"
            opacity={state[339].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02001953125,24.49566650390625)"
            opacity={state[341].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,24.49566650390625)"
            opacity={state[343].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,24.49566650390625)"
            opacity={state[345].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,24.49566650390625)"
            opacity={state[347].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,24.49566650390625)"
            opacity={state[349].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-238.343994140625,50.895660400390625)"
            opacity={state[351].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-215.04598999023438,50.895660400390625)"
            opacity={state[353].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,50.895660400390625)"
            opacity={state[355].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.45001220703125,50.895660400390625)"
            opacity={state[357].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,50.895660400390625)"
            opacity={state[359].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85400390625,50.895660400390625)"
            opacity={state[361].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.55599975585938,50.895660400390625)"
            opacity={state[363].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25799560546875,50.895660400390625)"
            opacity={state[365].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.96000289916992,50.895660400390625)"
            opacity={state[367].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.66200065612793,50.895660400390625)"
            opacity={state[369].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.363997459411621,50.895660400390625)"
            opacity={state[371].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.934005737304688,50.895660400390625)"
            opacity={state[373].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23199462890625,50.895660400390625)"
            opacity={state[375].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,50.895660400390625)"
            opacity={state[377].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.8280029296875,50.895660400390625)"
            opacity={state[379].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12600708007812,50.895660400390625)"
            opacity={state[381].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,50.895660400390625)"
            opacity={state[383].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.72198486328125,50.895660400390625)"
            opacity={state[385].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.01998901367188,50.895660400390625)"
            opacity={state[387].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,50.895660400390625)"
            opacity={state[389].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,50.895660400390625)"
            opacity={state[391].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,50.895660400390625)"
            opacity={state[393].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,50.895660400390625)"
            opacity={state[395].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.93398666381836,77.295654296875)"
            opacity={state[396].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.231990814208984,77.295654296875)"
            opacity={state[398].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999114990234,77.295654296875)"
            opacity={state[400].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,77.295654296875)"
            opacity={state[402].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,77.295654296875)"
            opacity={state[404].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,77.295654296875)"
            opacity={state[406].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,77.295654296875)"
            opacity={state[408].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,77.295654296875)"
            opacity={state[410].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31800842285156,77.295654296875)"
            opacity={state[412].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,77.295654296875)"
            opacity={state[414].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,77.295654296875)"
            opacity={state[416].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,77.295654296875)"
            opacity={state[418].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.934005737304688,103.69564819335938)"
            opacity={state[420].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200988769531,103.69564819335938)"
            opacity={state[422].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,103.69564819335938)"
            opacity={state[424].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82798767089844,103.69564819335938)"
            opacity={state[426].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,103.69564819335938)"
            opacity={state[428].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,103.69564819335938)"
            opacity={state[430].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,103.69564819335938)"
            opacity={state[432].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,103.69564819335938)"
            opacity={state[434].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,103.69564819335938)"
            opacity={state[436].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,103.69564819335938)"
            opacity={state[438].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,103.69564819335938)"
            opacity={state[440].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,103.69564819335938)"
            opacity={state[442].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-191.7480010986328,130.09564208984375)"
            opacity={state[444].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-168.4499969482422,130.09564208984375)"
            opacity={state[446].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-145.15200805664062,130.09564208984375)"
            opacity={state[448].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-121.85401916503906,130.09564208984375)"
            opacity={state[450].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.5560073852539,130.09564208984375)"
            opacity={state[452].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25800323486328,130.09564208984375)"
            opacity={state[454].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,130.09564208984375)"
            opacity={state[456].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.661996841430664,130.09564208984375)"
            opacity={state[458].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364006042480469,130.09564208984375)"
            opacity={state[460].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933998107910156,130.09564208984375)"
            opacity={state[462].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200225830078,130.09564208984375)"
            opacity={state[464].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,130.09564208984375)"
            opacity={state[466].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,130.09564208984375)"
            opacity={state[468].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.1259994506836,130.09564208984375)"
            opacity={state[470].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.42401123046875,130.09564208984375)"
            opacity={state[472].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,130.09564208984375)"
            opacity={state[474].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,130.09564208984375)"
            opacity={state[476].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31797790527344,130.09564208984375)"
            opacity={state[478].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61598205566406,130.09564208984375)"
            opacity={state[480].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.9139862060547,130.09564208984375)"
            opacity={state[482].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,130.09564208984375)"
            opacity={state[484].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200607299805,156.49563598632812)"
            opacity={state[486].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,156.49563598632812)"
            opacity={state[488].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82799530029297,156.49563598632812)"
            opacity={state[490].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12598419189453,156.49563598632812)"
            opacity={state[492].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,156.49563598632812)"
            opacity={state[494].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,156.49563598632812)"
            opacity={state[496].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,156.49563598632812)"
            opacity={state[498].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.31800842285156,156.49563598632812)"
            opacity={state[500].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,156.49563598632812)"
            opacity={state[502].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,156.49563598632812)"
            opacity={state[504].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,156.49563598632812)"
            opacity={state[506].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-98.55599975585938,182.8956298828125)"
            opacity={state[508].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25799560546875,182.8956298828125)"
            opacity={state[510].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.959999084472656,182.8956298828125)"
            opacity={state[512].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.662012100219727,182.8956298828125)"
            opacity={state[514].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364006996154785,182.8956298828125)"
            opacity={state[516].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933996200561523,182.8956298828125)"
            opacity={state[518].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.23200225830078,182.8956298828125)"
            opacity={state[520].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.5300064086914,182.8956298828125)"
            opacity={state[522].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.82798767089844,182.8956298828125)"
            opacity={state[524].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,182.8956298828125)"
            opacity={state[526].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,182.8956298828125)"
            opacity={state[528].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,182.8956298828125)"
            opacity={state[530].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.01998901367188,182.8956298828125)"
            opacity={state[532].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,182.8956298828125)"
            opacity={state[534].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,182.8956298828125)"
            opacity={state[536].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,182.8956298828125)"
            opacity={state[538].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120361328125,182.8956298828125)"
            opacity={state[540].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-75.25799560546875,209.29562377929688)"
            opacity={state[542].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-51.95998764038086,209.29562377929688)"
            opacity={state[544].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-28.66200065612793,209.29562377929688)"
            opacity={state[546].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,-5.364010810852051,209.29562377929688)"
            opacity={state[548].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,17.933992385864258,209.29562377929688)"
            opacity={state[550].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,41.231998443603516,209.29562377929688)"
            opacity={state[552].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,64.52999877929688,209.29562377929688)"
            opacity={state[554].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,87.8280029296875,209.29562377929688)"
            opacity={state[556].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,111.12599182128906,209.29562377929688)"
            opacity={state[558].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,134.4239959716797,209.29562377929688)"
            opacity={state[560].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,157.7220001220703,209.29562377929688)"
            opacity={state[562].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,181.02000427246094,209.29562377929688)"
            opacity={state[564].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,204.3179931640625,209.29562377929688)"
            opacity={state[566].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,227.61599731445312,209.29562377929688)"
            opacity={state[568].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,250.91400146484375,209.29562377929688)"
            opacity={state[570].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
          <g
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            transform="matrix(1,0,0,1,274.2120056152344,209.29562377929688)"
            opacity={state[572].opacity}
            style={{ display: "inherit" }}
          >
            <BannerChar />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default RandomSGrid2;