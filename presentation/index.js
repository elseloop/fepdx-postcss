// Import React
import React from "react";
import styled from "styled-components";

import preloader from "../utils/preloader";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Notes,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  barnTools: require("../assets/barn.tools.jpg"),
  craneBirds: require("../assets/crane.birds.jpg"),
  codeAst: require("../assets/code.ast.png"),
  craner: require("../assets/craner.jpg"),
  danm: require("../assets/danm.jpg"),
  digger: require("../assets/digger.jpg"),
  elseloop: require("../assets/elseloop.avatar.jpg"),
  jsLogo: require("../assets/js.logo.jpg"),
  iconDan: require("../assets/icondan.png"),
  ladder: require("../assets/ladder.jpg"),
  lessLogo: require("../assets/less.logo.png"),
  nightBuild: require("../assets/night.build.jpg"),
  postcssLogo: require("../assets/postcss.logo.svg"),
  responsiveTypeDemo: require("../assets/responsive.type.demo.gif"),
  sassLogo: require("../assets/sass.logo.svg"),
  scaffolding: require("../assets/scaffolding.jpg"),
  sparks: require("../assets/sparks.jpg"),
  stairs: require("../assets/stairs.jpg"),
  sunsetCranes: require("../assets/sunset.cranes.jpg"),
  tools: require("../assets/tools.jpg"),
  welder: require("../assets/welder.jpg"),
  zep: require("../assets/zeppelin.jpg")
};

preloader(images);

const RoundImg = styled(Image)`
  border: 10px solid #444;
  border-radius: 50%;
  height: 15vw;
  width: 15vw;
`;

const RainbowText = styled(Heading)`
  animation: animated-rainbow-shadow 1s infinite;
  @keyframes animated-rainbow-shadow {
  0% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #19F;
  }
  2% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #19F, 50px 50px #19F;
  }
  4% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  6% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  8% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  10% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  12% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  14% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  16% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  18% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  20% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #C25, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  22% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #EA0, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #E62, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #C25, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  24% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #EA0, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #E62, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #C25, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #19F;
  }
  26% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #EA0, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #E62, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #C25, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #19F, 50px 50px #EA0;
  }
  28% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #EA0, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #E62, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #C25, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #19F, 49px 49px #EA0, 50px 50px #EA0;
  }
  30% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #EA0, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #E62, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #C25, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #19F, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  32% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #EA0, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #E62, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #C25, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #19F, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  34% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #EA0, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #E62, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #C25, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #19F, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  36% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #EA0, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #E62, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #C25, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #19F, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  38% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #EA0, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #E62, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #C25, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #19F, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  40% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #EA0, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #E62, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #C25, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #19F, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  42% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #EA0, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #E62, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #C25, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #19F, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  44% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #EA0, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #E62, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #C25, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #19F, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  46% {
    text-shadow: 0px 0px transparent, 1px 1px #EA0, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #E62, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #C25, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #19F, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  48% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #E62, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #C25, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #19F, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #EA0;
  }
  50% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #E62, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #C25, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #19F, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #EA0, 50px 50px #E62;
  }
  52% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #E62, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #C25, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #19F, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #EA0, 49px 49px #E62, 50px 50px #E62;
  }
  54% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #E62, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #C25, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #19F, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #EA0, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  56% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #E62, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #C25, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #19F, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #EA0, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  58% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #E62, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #C25, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #19F, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #EA0, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  60% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #E62, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #C25, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #19F, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #EA0, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  62% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #E62, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #C25, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #19F, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #EA0, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  64% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #E62, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #C25, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #19F, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #EA0, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  66% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #E62, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #C25, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #19F, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #EA0, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  68% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #E62, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #C25, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #19F, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #EA0, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  70% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #E62, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #C25, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #19F, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #EA0, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  72% {
    text-shadow: 0px 0px transparent, 1px 1px #E62, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #C25, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #19F, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #EA0, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  74% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #C25, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #19F, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #EA0, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #E62;
  }
  76% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #C25, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #19F, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #EA0, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #E62, 50px 50px #C25;
  }
  78% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #C25, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #19F, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #EA0, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #E62, 49px 49px #C25, 50px 50px #C25;
  }
  80% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #C25, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #19F, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #EA0, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #E62, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  82% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #C25, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #19F, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #EA0, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #E62, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  84% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #C25, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #19F, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #EA0, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #E62, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  86% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #C25, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #19F, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #EA0, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #E62, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  88% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #C25, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #19F, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #EA0, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #E62, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  90% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #C25, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #19F, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #EA0, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #E62, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  92% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #C25, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #19F, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #EA0, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #E62, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  94% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #C25, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #19F, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #EA0, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #E62, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  96% {
    text-shadow: 0px 0px transparent, 1px 1px #C25, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #19F, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #EA0, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #E62, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  98% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #19F, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #EA0, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #E62, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #C25;
  }
  100% {
    text-shadow: 0px 0px transparent, 1px 1px #19F, 2px 2px #19F, 3px 3px #19F, 4px 4px #19F, 5px 5px #19F, 6px 6px #19F, 7px 7px #19F, 8px 8px #19F, 9px 9px #19F, 10px 10px #19F, 11px 11px #19F, 12px 12px #19F, 13px 13px #EA0, 14px 14px #EA0, 15px 15px #EA0, 16px 16px #EA0, 17px 17px #EA0, 18px 18px #EA0, 19px 19px #EA0, 20px 20px #EA0, 21px 21px #EA0, 22px 22px #EA0, 23px 23px #EA0, 24px 24px #EA0, 25px 25px #E62, 26px 26px #E62, 27px 27px #E62, 28px 28px #E62, 29px 29px #E62, 30px 30px #E62, 31px 31px #E62, 32px 32px #E62, 33px 33px #E62, 34px 34px #E62, 35px 35px #E62, 36px 36px #E62, 37px 37px #E62, 38px 38px #C25, 39px 39px #C25, 40px 40px #C25, 41px 41px #C25, 42px 42px #C25, 43px 43px #C25, 44px 44px #C25, 45px 45px #C25, 46px 46px #C25, 47px 47px #C25, 48px 48px #C25, 49px 49px #C25, 50px 50px #19F;
  }
}`;

const theme = createTheme({
  primary: "white",
  secondary: "black",
  yellow: "#FF0",
  blue: "#1BE7FF",
  orange: "#E8AA14",
  red: "#FF5714"
}, {
  primary: {
    name: "Work Sans",
    googleFont: true,
    styles: [ "300", "400", "700", "800" ]
  },
  secondary: {
    name: "Pacifico",
    googleFont: true,
    styles: [ "400" ]
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>

        {/* SLIDE ONE */}
        <Slide transition={["fade"]} bgImage={images.craneBirds} bgDarken={0.75}>
          <Text textSize="6rem">👋👋👋</Text>
          <Heading size={1} textSize="12rem" fill lineHeight={1} textColor="primary">
            Oh hi, PostCSS!
          </Heading>
          <Text margin="4rem auto 0" textColor="blue" size={1} fill bold>
            Front End PDX 👨🏼‍💻👩🏾‍💻👨🏻‍💻👩🏼‍💻 Jan. 23, 2018
          </Text>
        </Slide>

        {/* SLIDE TWO */}
        <Slide transition={["fade"]} bgColor="red">
          <Notes>
            <List>
              <ListItem>Dan</ListItem>
              <ListItem>I go by elseloop most everywhere and usually look like one of these three pictures</ListItem>
              <ListItem>One of the co-organizers of FEPDX</ListItem>
              <ListItem>I am, for the next three days, a senior software engineer and the front end practice lead here at CDX.</ListItem>
              <ListItem>Beginning next week, I'll be a partner at Turn Agency</ListItem>
              <ListItem>(I'm excited!)</ListItem>
            </List>
          </Notes>
          <Heading size={2} textColor="primary" margin="0 0 4rem">Dan Manchester</Heading>

          <Layout>
            <Fill margin="0 1ch 0 1ch">
              <RoundImg display="block" src={images.iconDan} bgColor="white" />
            </Fill>
            <Fill margin="0 1ch">
              <RoundImg display="block" src={images.danm} />
            </Fill>
            <Fill margin="0 1ch">
              <RoundImg display="block" src={images.elseloop} />
            </Fill>
          </Layout>

          <Heading size={2} textColor="primary" margin="4rem 0 0">@elseloop</Heading>
        </Slide>

        {/* SLIDE THREE */}
        <Slide transition={["fade"]} bgImage={images.tools} bgDarken={0.66}>
          <Notes>
            <ul>
              <li>Show of hands!</li>
              <li>Those of you with your hands still down: show of hands!</li>
              <li>Ok, cool! You're all using PostCSS already. This is intended to be useful for all you, whether you're using it or not.</li>
            </ul>
          </Notes>
          <Text textSize="3rem">🙋‍🙋‍♂️🙋‍🙋‍♂️🙋‍🙋‍♂️</Text>
          <Appear>
            <Heading size="2" textColor="primary" fit bold>Who currently uses PostCSS?</Heading>
          </Appear>
          <Appear>
            <Text margin="4rem 0 0" textSize="3rem">🙋‍🙋‍♂️🙋‍🙋‍♂️🙋‍🙋‍♂️</Text>
          </Appear>
          <Appear>
            <Heading size="4" textColor="primary">What about Autoprefixer?</Heading>
          </Appear>
        </Slide>

        {/* SLIDE FOUR */}
        <Slide transition={["fade"]} bgImage={images.digger} bgDarken={0.75}>
          <Notes>
            <p>I’m just gonna ask you a bunch of questions and then eventually sit down.</p>
            <p>No! Those of you who are using it—how would you describe it or classify it?</p>
          </Notes>
          <Heading size="2" textColor="primary" fit bold>What is PostCSS?</Heading>
        </Slide>

        {/* SLIDE FIVE */}
        <Slide transition={["fade"]} bgImage={images.barnTools} bgDarken={0.8}>
          <Notes>
            <p>“Tool” is <em>intentionally</em> vague</p>
            <p>At least one person thinking WHY DO WE NEED JS TO DO ANYTHING TO CSS?!</p>
            <p>The initial Sass release was in 2006.</p>
            <p>The initial PostCSS release was in November 2013.</p>
          </Notes>
          <Image src={images.postcssLogo} />
          <Heading size="3" textColor="primary" lineHeight="1.2" fill bold>“A tool for processing CSS with JavaScript”</Heading>
        </Slide>

        {/* SLIDE SIX */}
        <Slide transition={["fade"]} bgImage={images.jsLogo} bgRepeat="repeat" bgSize="150px 150px" bgDarken={0}>
          <Notes>
            <p>2013 was sort of the apex of this moment.</p>
            <p>Node 2009. Angular: 2010. Ember: 2012. Grunt: 2012. Webpack: 2012 (kinda).</p>
            <p>Gulp: 2013. React: 2013.</p>
            <p>The idea: you're already using JS to do everything else in your build—why not CSS too?</p>
          </Notes>
          <RainbowText textFont="secondary" textSize="16vh" size="1" textColor="primary" lineHeight="1.2" fill bold>JavaScript to the rescue!</RainbowText>
        </Slide>

        {/* SLIDE SEVEN */}
        <Slide transition={["fade"]} bgImage={images.craner} bgDarken={0.5}>
          <Notes>
            <p>Do first three points, riff on them, then do last point.</p>
            <p>Sassscript, syntax, looping, functions, etc</p>
          </Notes>
          <Heading margin="0" size="3" textColor="primary" lineHeight="1" fill bold>Unlike</Heading>
          <Heading margin="0" size="3" textColor="primary" lineHeight="1" fill bold>
            <Image margin="0" style={{ position: "relative", top: "8px" }} display="inline-block" width="100px" src={images.sassLogo} />
            &nbsp; or &nbsp;
            <Image margin="0" style={{ position: "relative", top: "8px" }} display="inline-block" width="125px" src={images.lessLogo} />
          </Heading>
          <Heading margin="0" size="3" textColor="primary" lineHeight="1" fill bold>PostCSS…</Heading>
          <List textColor="primary" bold>
            <Appear>
              <ListItem>isn’t a preprocessor</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.25em 0 0">isn’t compiled</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.25em 0 0">doesn’t require a CSS  scripting language</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0.25em 0 0">does <em>nothing</em> without plugins</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* SLIDE EIGHT */}
        <Slide transition={["fade"]} bgImage={images.scaffolding} bgDarken={0.8}>
          <Notes>
            <p>So, there's us. We're making our cool site.</p>
            <p>We write CSS!</p>
            <p>We kick off a PostCSS build somehow—WE WILL TALK ABOUT HOW LATER.</p>
            <p>Out of the box, all PostCSS does is take your CSS, run it through its parser to turn it into an AST, then take that AST and stringify it and turn back into CSS.</p>
            <p>That's it.</p>
            <p>On its own, it's just an extra step bewtween you writin CSS and seeing CSS.</p>
            <p>If you want exciting things to happen, they need to happen in the middle, in the AST step.</p>
          </Notes>
          <Text textSize="4rem">👩🏽‍💻</Text>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={2} textColor="primary" fill>CSS</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={2} textColor="primary" fill>AST</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={2} textColor="primary" fill>CSS</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Text textSize="4rem">👩🏾‍💻</Text>
          </Appear>
        </Slide>

        {/* SLIDE NINE */}
        <Slide transition={["fade"]} bgImage={images.ladder} bgDarken={0.4}>
          <Notes>
            <p>An AST is just a structured data graph. It makes static analysis and manipulation really easy.</p>
            <p>And in the course of using PostCSS, there's absolutely no reason you'd need to think about ASTs at all. (Unless you're writing a plugin.)</p>
            <p>BUT!</p>
            <p>I’m a big proponent of making our tools feel less like magic. We don’t need to be able to replicate on a whiteboard what they’re doing, but having some clear sense of how they do what they do comes in handy when debugging or when you need to extend them to do something they’re not currently doing already.</p>
            <p>Looking at ASTs will also inform what we’ll look at next, so let’s dig in!</p>
            <p>So…</p>
          </Notes>
          <Heading size="2" textColor="primary" fit bold>AST?</Heading>
          <Text margin="2rem 0 0" textColor="yellow" textSize="4rem" fit bold>💃 Abstract! Syntax! Tree! 🕺</Text>
        </Slide>

        {/* SLIDE TEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <CodePane
            textSize="2rem"
            lang="css"
            source={require("raw-loader!../assets/thing.css.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE ELEVEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>I know you can't read this and that's ok!</p>
            <p>It's an object! There's a "nodes" key that's an array of objects, which itself has a "nodes" object that's an array of objects...</p>
            <p>This is a garaunteed headache if we try to read it, so let's take it in pieces...</p>
          </Notes>
          <Image src={images.codeAst} />
        </Slide>

        {/* SLIDE TWELVE */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Starting inside that nested "nodes" object...</p>
            <p>Declaration!</p>
            <p>Begin the "source" object</p>
            <p>We’re already seeing the kind of information being presented about what we wrote.</p>
          </Notes>
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.1.example")}
            margin="0 auto"
            overflow="auto"
            fit
          />
        </Slide>

        {/* SLIDE THIRTEEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.2.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE FOURTEEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.3.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE FIFTEEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.4.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE SIXTEEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.5.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE SEVENTEEN */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Really easy to see where this structure comes in handy as a way of processing and/or manipulating the original CSS.</p>
            <ul>
              <li>Knowing where all the comments are makes it easy to strip them out or build something from them or look for specific strings at the front of comments to pull out for some other reason</li>
              <li>Kowing what's between a property and a value means you can catch typos.</li>
              <li>Knowing if there's a tab or a space and how big it is leading up to a declaration means you can easily lint against your preferred standards.</li>
              <li>Knowing how the entire style block looks like that an individual declaration is in means you can reorder if need be or insert default values where they'd be needed, etc.</li>
            </ul>
            <p>All of that work would happen here in the AST. And that's where plugins come in.</p>
          </Notes>
          <CodePane
            textSize="2rem"
            lang="json"
            source={require("raw-loader!../assets/ast.6.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE EIGHTTEEN */}
        <Slide transition={["fade"]} bgImage={images.scaffolding} bgDarken={0.8}>
          <Notes>
            <p>So if we go back to the earlier example of writing CSS for the hot new site, it's actually going to look a little different...</p>
            <p>The AST will get passed to each plugin as needed, recursively.</p>
            <p>But it's stupid fast, because.</p>
          </Notes>
          <Text textSize="4rem">👩🏽‍💻</Text>
          <Heading size={4} textColor="primary" fill>CSS</Heading>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary" fill>AST</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="blue" fill caps>Plugins!</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary" fill>CSS</Heading>
          </Appear>
          <Appear>
            <Text>👇</Text>
          </Appear>
          <Appear>
            <Text textSize="4rem">👩🏾‍🎤</Text>
          </Appear>
        </Slide>

        {/* SLIDE NINETEEN */}
        <Slide transition={["fade"]} bgImage={images.welder} bgDarken={0.75}>
          <Heading size="2" textColor="primary" fit bold caps>Plugins!</Heading>
        </Slide>

        {/* SLIDE TWENTY */}
        <Slide transition={["fade"]} bgImage={images.sunsetCranes} bgDarken={0.66}>
          <Notes>
            <p>I'm gonna go into detail on a few plugins I like for different reasons, but here are some other...</p>
            <p>If you prefer Sass-like variables, nesting, even looping or mixins, PostCSS can do that.</p>
            <p>Stylelint! I'm not going to go into depth on this, but you should be using it. Google "use stylelint" and you'll have pages of results to choose from.</p>
            <p>Use upcoming CSS syntax. Be weary of this one—sometimes the spec changes and then your codebase is left with out of date code that will always need the PostCSS plugin to work.</p>
            <p>Backcompat: gaurd against multiple syntaxes (Autoprefixer!)</p>
            <p>Built-in or CSS Nano is the big one for minimizing.</p>
            <p>If you're not already using some of these and want to, there's a TON of info out there on them, so Google about and you'll strike gold.</p>
            <p>I wanna touch on some lesser known ones…</p>
          </Notes>
          <Heading margin="0 0 .25rem" size="3" textColor="primary" fit bold lineHeight="1.2">Plugins do the heavy lifting in PostCSS.</Heading>
          <Appear>
            <Heading margin="0 0 1rem" size="3" textColor="primary" fill bold>Plugins can…</Heading>
          </Appear>
          <List textColor="primary" fit bold>
            <Appear>
              <ListItem margin=".5em 0 0">…provide your preferred syntax</ListItem>
            </Appear>
            <Appear>
              <ListItem margin=".5em 0 0">…help ensure house code standards</ListItem>
            </Appear>
            <Appear>
              <ListItem margin=".5em 0 0">…future-proof your work</ListItem>
            </Appear>
            <Appear>
              <ListItem margin=".5em 0 0">…make your work backwards compatible</ListItem>
            </Appear>
            <Appear>
              <ListItem margin=".5em 0 0">…make your code production-ready</ListItem>
            </Appear>
            <Appear>
              <ListItem margin=".5em 0 0">…make writing CSS easier &amp; more efficient</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* SLIDE TWENTY-ONE */}
        <Slide transition={["fade"]} bgImage={images.stairs} bgDarken={0.5}>
          <Heading margin="0 0 .25em" lineHeight="1.2" size={1} textColor="blue" fill caps>
             👀<br />Some examples!
          </Heading>
          <List textColor="primary" bold>
            <ListItem>postcss-pseudo-content-insert</ListItem>
            <ListItem>postcss-responsive-type</ListItem>
            <ListItem>postcss-css-variables</ListItem>
          </List>
        </Slide>

        {/* SLIDE TWENTY-TWO */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>What’s wrong with this CSS?</p>
          </Notes>

          <Heading size={3} fit bold>postcss-pseudo-content-insert</Heading>
          <CodePane
            textSize="1.5rem"
            lang="css"
            source={require("raw-loader!../assets/pseudo.css.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <Code textSize="1.5rem">https://github.com/liquidlight/postcss-pseudo-content-insert</Code>
        </Slide>

        {/* SLIDE TWENTY-THREE */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>`content: '';` is the only difference. But what a huge difference it makes.</p>
            <p>Does one thing and does it well!</p>
            <p>Who knows what this code’s doing?</p>
          </Notes>
          <Heading size={3} fit bold>postcss-pseudo-content-insert</Heading>
          <CodePane
            textSize="1.5rem"
            lang="css"
            source={require("raw-loader!../assets/pseudo.css.2.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <Code textSize="1.5rem">https://github.com/liquidlight/postcss-pseudo-content-insert</Code>
        </Slide>

        {/* SLIDE TWENTY-FOUR */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Who is familiar with responsive typography?</p>
          </Notes>
          <Heading margin="0 0 .5em" size={3} textColor="secondary" fill caps>
            Responsive Type
          </Heading>

          <Image src={images.responsiveTypeDemo} />
        </Slide>

        {/* SLIDE TWENTY-FIVE */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>So much easier to read! And think about! And understand!</p>
            <p>If you're using Stylelint, you'll need to declare these (and other) custom properties so it doesn't yell at you constantly.</p>
          </Notes>
          <Heading size={3} fit bold>postcss-responsive-type</Heading>
          <CodePane
            textSize="1.5rem"
            lang="css"
            source={require("raw-loader!../assets/responsive.type.css.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <Appear>
            <CodePane
              textSize="1.5rem"
              lang="css"
              source={require("raw-loader!../assets/responsive.type.css.2.example")}
              margin="0 auto"
              overflow="scroll"
            />
          </Appear>
          <Code textSize="1.5rem">https://github.com/seaneking/postcss-responsive-type</Code>
        </Slide>

        {/* SLIDE TWENTY-SIX */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Implements spec. Works in most modern browsers already, but allows you to also have computed values as a fallback.</p>
          </Notes>
          <Heading margin="0 0 .5em" size={3} textColor="primary" fill caps>
            CSS Variables
          </Heading>

          <CodePane
            textSize="1.5rem"
            lang="css"
            source={require("raw-loader!../assets/variables.css.example")}
            margin="0 auto"
            overflow="scroll"
          />

          <Code textSize="1.5rem">https://github.com/MadLittleMods/postcss-css-variables</Code>
        </Slide>

        {/* SLIDE TWENTY-SEVEN */}
        <Slide transition={["fade"]} bgImage={images.zep} bgDarken={0.75}>
          <Notes>
            <p>Like most things in front end, you've got a pretty wide variety of ways to do it. These are the three big ones.</p>
          </Notes>
          <Heading margin="0 0 .5em" size={1} textColor="primary" fill caps>
            How?
          </Heading>
          <Appear>
            <List textColor="primary">
              <ListItem>npm scripts</ListItem>
              <ListItem>Webpack</ListItem>
              <ListItem>Gulp</ListItem>
            </List>
          </Appear>
        </Slide>

        {/* SLIDE TWENTY-EIGHT */}
        <Slide transition={["fade"]} bgColor="blue">
          <Heading textSize="4vh" size={2} textColor="secondary" caps>
            postcss.config.js
          </Heading>

          <CodePane
            textSize="1.5rem"
            lang="js"
            source={require("raw-loader!../assets/postcss.config.js.example")}
            margin="0 auto"
            overflow="scroll"
          />
        </Slide>

        {/* SLIDE TWENTY-NINE */}
        <Slide transition={["fade"]} bgColor="blue">
          <Heading margin="0 0 .5em" size={3} textColor="secondary" fill caps>
            npm scripts
          </Heading>

          <CodePane
            textSize="1.5rem"
            lang="json"
            source={require("raw-loader!../assets/npm.script.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <p>☝️ Requires <Code>postcss-cli</Code></p>
        </Slide>

        {/* SLIDE THIRTY */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Basically the same as using npm scripts, but you're using keeping things in Webpack.</p>
          </Notes>
          <Heading margin="0 0 .5em" size={3} textColor="secondary" fill caps>
            Webpack
          </Heading>

          <CodePane
            textSize="1.5rem"
            lang="js"
            source={require("raw-loader!../assets/webpack.config.js.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <p>☝️ You’ll still need <Code>postcss.config.js</Code></p>
        </Slide>

        {/* SLIDE THIRTY-ONE */}
        <Slide transition={["fade"]} bgColor="blue">
          <Notes>
            <p>Here you're defining your plugins inline, etc...</p>
          </Notes>
          <Heading margin="0 0 .5em" size={3} textColor="secondary" fill caps>
            Gulp
          </Heading>

          <CodePane
            textSize="1.5rem"
            lang="js"
            source={require("raw-loader!../assets/gulp.example")}
            margin="0 auto"
            overflow="scroll"
          />
          <p>☝️ Requires <Code>gulp-postcss</Code></p>
        </Slide>

        {/* SLIDE TWENTY-FOUR */}
        <Slide transition={["fade"]} bgImage={images.sparks} bgDarken={0.66}>
          <RainbowText margin="0 0 .25em" textFont="secondary" textSize="18vh" size="1" textColor="primary" lineHeight="1.2" fill bold>Thank you!</RainbowText>
          <RainbowText margin="0 0 .5em">🧔🏻</RainbowText>
          <Heading size="5" textColor="primary" lineHeight="1.2">Dan Manchester<br />@elseloop</Heading>
        </Slide>
      </Deck>
    );
  }
}
