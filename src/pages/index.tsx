import Header from "@/components/header/header";
import Usuarios from "@/components/usuario/usuarios";
import Opciones from "@/components/opciones/opciones";
import styles from "@/components/opciones/opciones.module.css"

const opcionesData =[
    {
        id:1,
        title: 'Casa',
        direccion: 'Camino Real A Cholula #123',
        colonia: 'Santa Cruz Guadalupe',
        ciudad: 'Puebla, Puebla',
        cp: '72150',
        edit: 'Editar',
        deleted: 'Eliminar',
        predeterminada: 'Predeterminada',
        imgEdit: './editBlack.png',
        imgDelete: './delete.png',
        imgPred: './check.png'
    },
    {
        id:2,
        title: 'Casa',
        direccion: 'Camino Real A Cholula #123',
        colonia: 'Santa Cruz Guadalupe',
        ciudad: 'Puebla, Puebla',
        cp: '72150',
        edit: 'Editar',
        deleted: 'Eliminar',
        predeterminada: 'Predeterminada',
        imgEdit: './editBlack.png',
        imgDelete: './delete.png',
        imgPred: './uncheck.png'
    }
];



function IndexPage() {
    return(
        <div>
            
            <header>
                <title>Perfil de Usuario</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            </header>

        <Header/>
        <Usuarios/>
        
        <div className={styles.opcionesContainer}>
            <ul className={styles.opciones}>
                <li className={styles.listHead}>Mis direcciones</li>
                <li className={styles.listElement}>Mis Pedidos</li>
                <li className={styles.listElement}>Mis Favoritos</li>
                <li className={styles.listElement}>Formas de Pago</li>
            </ul>

            {opcionesData.map((opciones) => (
                <Opciones
                    key={opciones.id}
                    title={opciones.title}
                    direccion={opciones.direccion}
                    colonia={opciones.colonia}
                    ciudad={opciones.colonia}
                    cp={opciones.cp}
                    edit={opciones.edit}
                    deleted={opciones.deleted}
                    predeterminada={opciones.predeterminada}
                    imgEdit={opciones.imgEdit}
                    imgDelete={opciones.imgDelete}
                    imgPred={opciones.imgPred}
                />
            ))}



        </div>



        </div>
    );
}

export default IndexPage;