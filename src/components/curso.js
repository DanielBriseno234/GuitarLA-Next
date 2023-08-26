import styles from "../styles/curso.module.css"

export default function Curso({curso}) {
    const { contenido, imagen, titulo, publishedAt } = curso
    console.log(imagen.data.attributes.url)
  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url});
            }
        `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
            <h3 className="heading">{titulo}</h3>
            <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}