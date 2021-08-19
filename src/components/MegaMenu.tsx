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
        style={{ top: isShown ? 7 : -1000, transition: "1.3s" }}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="header">
          <h2 style={{ marginBottom: 0 }}>Todas las Categorías Disponibles</h2>
        </div>
        <div className="row" style={{ paddingLeft: "4rem" }}>
          <div className="column">
            <h2>Accesorios</h2>
            <a href="#">Accesorios</a>
            <a href="#">Accesorios Mujer</a>
            <a href="#">Accesorios de Viaje</a>
            <a href="#">Barbijos / Cubrebocas</a>
            <a href="#">Paraguas</a>
            <a href="#">Paraguas de Hombre y de Mujer</a>
            <a href="#">Porta Cosméticos</a>
          </div>
          <div className="column">
            <h2>Morrales</h2>
            <a href="#">Bandoleras</a>
            <a href="#">Bolsos</a>
            <a href="#">Carteras</a>
            <a href="#">Carteras de Dama</a>
            <a href="#">Carteras de Dama (Simil Cuero)</a>
            <a href="#">Morrales</a>
            <a href="#">Riñoneras</a>
          </div>
          <div className="column">
            <h2>Billeteras</h2>
            <a href="#">Billeteras</a>
            <a href="#">Billeteras - Hombre</a>
            <a href="#">Billeteras - Mujer</a>
            <a href="#">Billeteras Tarjetero</a>
            <a href="#">Billeteras de Cuero - Hombre</a>
            <a href="#">Billeteras de Cuero - Mujer</a>
          </div>
          <div className="column">
            <h2>Maletines</h2>
            <a href="#">Botineros</a>
            <a href="#">Maletines</a>
            <a href="#">Porta Notebooks</a>
            <a href="#">Portafolios</a>
            <a href="#">Portafolios para Notebooks</a>
            <a href="#">Portafolios (Simil Cuero)</a>
          </div>
          <div className="column">
            <h2>Mochilas</h2>
            <a href="#">Cartucheras</a>
            <a href="#">Mochilas</a>
            <a href="#">Mochilas Escolares</a>
            <a href="#">Mochilas Porta Notebooks</a>
            <a href="#">Mochilas Urbanas</a>
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
