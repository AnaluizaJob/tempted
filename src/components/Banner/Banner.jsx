import styles from './Banner.module.css'

function Banner({image}){
    return <div className={styles.Banner}>
        <img className={styles.img} src={image} width={'1280'}/>

    </div>
}

export default Banner