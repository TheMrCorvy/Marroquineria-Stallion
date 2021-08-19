import { FC, useState, MouseEvent } from "react";

import { Button } from "@material-ui/core";

import { useDispatch } from "react-redux";
import selectCategory from "../redux/actions/categoriesAction";

const MegaMenu: FC<Props> = ({ className }) => {
    const [isShown, setIsShown] = useState(false);

    const dispatch = useDispatch();

    const chooseCategory = (e: MouseEvent, selectedCategory: string) => {
        e.preventDefault();

        dispatch(selectCategory(selectedCategory));

        const productsSection = document.getElementById("productos");

        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

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
                style={{ top: isShown ? 7 : -800, transition: "1.3s" }}
                onMouseLeave={() => setIsShown(false)}
            >
                <div className="header">
                    <h2 style={{ marginBottom: 0 }}>
                        Todas las Categorías Disponibles
                    </h2>
                </div>
                <div className="row" style={{ paddingLeft: "4rem" }}>
                    <div className="column">
                        <h2>Accesorios</h2>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/accesorios")}
                        >
                            Accesorios
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/accesorios - mujer")
                            }
                        >
                            Accesorios Mujer
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/accesorios de viaje")
                            }
                        >
                            Accesorios de Viaje
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/barbijos - cubrebocas")
                            }
                        >
                            Barbijos / Cubrebocas
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/paraguas")}
                        >
                            Paraguas
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(
                                    e,
                                    "/paraguas de hombre y de mujer"
                                )
                            }
                        >
                            Paraguas de Hombre y de Mujer
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/productos fabricados")
                            }
                        >
                            Productos Fabricados
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/porta cosméticos")
                            }
                        >
                            Porta Cosméticos
                        </a>
                    </div>
                    <div className="column">
                        <h2>Morrales</h2>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/bandoleras")}
                        >
                            Bandoleras
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/bolsos")}
                        >
                            Bolsos
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/carteras")}
                        >
                            Carteras
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/carteras de dama")
                            }
                        >
                            Carteras de Dama
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/carteras (simil cuero)")
                            }
                        >
                            Carteras de Dama (Simil Cuero)
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/morrales")}
                        >
                            Morrales
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/riñoneras")}
                        >
                            Riñoneras
                        </a>
                    </div>
                    <div className="column">
                        <h2>Billeteras</h2>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/billeteras")}
                        >
                            Billeteras
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/billeteras - hombre")
                            }
                        >
                            Billeteras - Hombre
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/billeteras - mujer")
                            }
                        >
                            Billeteras - Mujer
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/billeteras - tarjetero")
                            }
                        >
                            Billeteras Tarjetero
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(
                                    e,
                                    "/billeteras de cuero - hombre"
                                )
                            }
                        >
                            Billeteras de Cuero - Hombre
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(
                                    e,
                                    "/billeteras de cuero - mujer"
                                )
                            }
                        >
                            Billeteras de Cuero - Mujer
                        </a>
                    </div>
                    <div className="column">
                        <h2>Maletines</h2>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/botineros")}
                        >
                            Botineros
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/maletines")}
                        >
                            Maletines
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/porta notebooks")
                            }
                        >
                            Porta Notebooks
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/portafolios")}
                        >
                            Portafolios
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(
                                    e,
                                    "/portafolios porta notebooks"
                                )
                            }
                        >
                            Portafolios para Notebooks
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/portafolios (simil cuero)")
                            }
                        >
                            Portafolios (Simil Cuero)
                        </a>
                    </div>
                    <div className="column">
                        <h2>Mochilas</h2>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/cartucheras")}
                        >
                            Cartucheras
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/mochilas")}
                        >
                            Mochilas
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/mochilas escolares")
                            }
                        >
                            Mochilas Escolares
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/mochilas porta notebooks")
                            }
                        >
                            Mochilas Porta Notebooks
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                chooseCategory(e, "/mochilas urbanas")
                            }
                        >
                            Mochilas Urbanas
                        </a>
                        <a
                            href="#"
                            onClick={(e) => chooseCategory(e, "/valijas")}
                        >
                            Valijas
                        </a>
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
