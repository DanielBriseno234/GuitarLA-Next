import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {
  
    return (
        <>
        <Layout
          title='Tienda'
          description="GuitarLA, venta de guitarras, tienda de música"
        >
          <main>
            <h1 className="heading">Nuestra colección</h1>

            <div className={styles.grid}>
              {guitarras?.map( guitarra => (
                <Guitarra 
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))}
            </div>
          </main>
        </Layout>
        </>
      )
}
// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json() 
//     return {
//       props: {
//         guitarras
//       }
//     }
// }

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data:guitarras} = await respuesta.json()

  // Pass data to the page via props
  return { props: { guitarras } }
}
