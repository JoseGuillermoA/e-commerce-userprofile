import styles from '@/components/usuario/usuarios.module.css'

function Usuarios(){
    return(
        <div className={styles.usuarioMain}>
            <img className={styles.userPic} src="./user.png" alt="" width={250} height={250}/>

            <div className={styles.dataUser}>
                <h3>Juan Perez Torres</h3>
                <h4>correo@correo.com</h4>
                <h4>2211332322</h4>
            </div>

            <div className={styles.editInformation}>
                <a href="">
                    <img src="./edit.png" alt="" />
                    Editar informacion
                </a>
            </div>
        </div>
    );
}

export default Usuarios;