import { useEffect, useState } from "react";
import { ParagraphDescription } from "./description.styles";

const Description = ({ description }) => {
  const [descrip, setDescrip] = useState("");

  useEffect(() => {
    switch (true) {
      case description.length < 600 && description.length > 0:
        setDescrip(description);
        break;
      case description.length >= 600:
        setDescrip(
          `${description.substring(0, 600)}... go to website for more info`
        );
        break;
      default:
        setDescrip(
          "No description available. Feel free to checkout the website for more info."
        );
    }
  }, [description]);

  return (
    <div>
      <ParagraphDescription>{descrip}</ParagraphDescription>
    </div>
  );
};

export default Description;
