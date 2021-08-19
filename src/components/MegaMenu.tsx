import { FC, useState } from "react";

import { Button } from "@material-ui/core";

const MegaMenu: FC<Props> = ({ className }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Button
        color="inherit"
        className={className}
        component="a"
        size="small"
        onMouseEnter={() => setIsShown(true)}
      >
        Categorías
      </Button>
      <div
        className="dropdown-content"
        style={{ display: isShown ? "block" : "none" }}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="header">
          <h2>Mega Menu</h2>
        </div>
        <div className="row">
          <div className="column">
            <h3>Category 1</h3>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <div className="column">
            <h3>Category 2</h3>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <div className="column">
            <h3>Category 3</h3>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;

interface Props {
  className: any;
}
