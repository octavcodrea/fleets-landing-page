import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RiArrowUpSLine } from "react-icons/ri";

interface ButtonProps {
  yscroll: number;
  scrollTop: any;
}

const BackToTopButton = (props: ButtonProps) => {
  const [showButton, setShowButton] = useState(false);
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (props.yscroll > 150) {
      setShowButton(true);
      setAppeared(true);
    } else {
      setShowButton(false);
    }
  }, [props.yscroll]);

  return (
    <div onClick={props.scrollTop}>
      <Button
        className={appeared ? "buttonBackToTop" : ""}
        id={showButton ? "fadingIn" : "buttonBackToTopHidden"}
        variant="accent"
      >
        <RiArrowUpSLine style={{ fontSize: "20px" }} />
      </Button>
    </div>
  );
};

export default BackToTopButton;
