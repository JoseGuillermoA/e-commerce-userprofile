import React from "react";
import styles from "@/components/opciones/opciones.module.css"
import { opcionesProps} from "@/interfaces/opciones"

const Opciones: React.FC<opcionesProps> = ({ title, direccion, colonia, ciudad, cp, edit, deleted, predeterminada, imgEdit, imgDelete, imgPred }) => {
    return(
        <div className={styles.direccionContainer}>

            <div className={styles.direccionMain}>
                <h3 className={styles.vivienda}>{title}</h3>
                <h4 className={styles.direccion}>{direccion}</h4>
                <h4 className={styles.colonia}>{colonia}</h4>
                <h4 className={styles.ciudad}>{ciudad}</h4>
                <h4 className={styles.cp}>{cp}</h4>
            </div>

            <div className={styles.predeterminadaMain}>
                <h4 className={styles.predeterminada}>{predeterminada}</h4>
                <img className={styles.check} src={imgPred} alt="" width={40} height={40}/>
            </div>

            <div className={styles.options}>

                <div className={styles.editMain}>
                    <img className={styles.imgEdit} src={imgEdit} alt="" />
                    <a href="">
                        <h4>{edit}</h4>
                    </a>
                </div>    

                <div className={styles.deleteMain}>
                    <img className={styles.imgDelete} src={imgDelete} alt="" />
                    <a href="">
                        <h4>{deleted}</h4>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Opciones