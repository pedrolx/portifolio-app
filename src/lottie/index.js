import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import csshtml from "./css-html";
import github from "./github-icon";
import reactIcon from "./react.json";
import javascriptIcon from "./javascript.json";
import node from "./node.json"
import python from "./python.json"
import coding from "./coding";
import construction from './construction.json';

export const Animation = ({ name, width=150, height=150 }) => {
  const [animation, setAnimation] = useState(csshtml);

  useEffect(() => {
    switch (name) {
      case "csshtml":
        setAnimation(csshtml);
        break;

      case "github":
        setAnimation(github);
        break;

      case "js":
        setAnimation(javascriptIcon);
        break;

      case "react":
        setAnimation(reactIcon);
        break;
      case "coding":
        setAnimation(coding);
        break;

      case "construction":
        setAnimation(construction);
        break;

      case "nodejs":
        setAnimation(node);
        break;
        
      case "python":
        setAnimation(python);
        break;

      default:
        break;
    }
  }, [animation, name]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    renderedSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};
