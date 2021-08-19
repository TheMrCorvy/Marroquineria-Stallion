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
        style={{ display: isShown ? "block" : "none", transition: "1s" }}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="header">
          <h2>Todas las Categorías Disponibles</h2>
        </div>
        <div className="row">
          <div className="column">
            <a href="#">Accesorios</a>
            <a href="#">Accesorios de Mujer</a>
            <a href="#">Accesorios de Viaje</a>
            <a href="#">Bandoleras</a>
          </div>
          <div className="column">
            <a href="#">Barbijos / Cubrebocas</a>
            <a href="#">Billeteras</a>
            <a href="#">Billeteras - Hombre</a>
            <a href="#">Billeteras - Mujer</a>
          </div>
          <div className="column">
            <a href="#">Billeteras - Tarjetero</a>
            <a href="#">Billeteras de Cuero - Hombre</a>
            <a href="#">Billeteras de Cuero - Mujer</a>
            <a href="#">Bolsos</a>
          </div>
          <div className="column">
            <a href="#">Botineros</a>
            <a href="#">Carteras</a>
            <a href="#">Carteras de Dama</a>
            <a href="#">Carteras (Simil Cuero)</a>
          </div>
          <div className="column">
            <a href="#">Cartucheras</a>
            <a href="#">Maletines</a>
            <a href="#">Mochilas</a>
            <a href="#">Mochilas Escolares</a>
          </div>
          <div className="column">
            <a href="#">Mochilas Porta Notebooks</a>
            <a href="#">Mochila Urbanas</a>
            <a href="#">Morrales</a>
            <a href="#">Paraguas</a>
          </div>
          <div className="column">
            <a href="#">Paraguas de Hombre y de Mujer</a>
            <a href="#">Porta Cosméticos</a>
            <a href="#">Porta Notebooks</a>
          </div>
          <div className="column">
            <a href="#">Portafolios</a>
            <a href="#">Portafolios Porta Notebooks</a>
            <a href="#">Portafolios (Simil Cuero)</a>
            <a href="#">Productos Fabricados</a>
          </div>
          <div className="column">
            <a href="#">Riñoneras</a>
            <a href="#">Valijas</a>
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
