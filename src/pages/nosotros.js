import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
      <Layout
        title="Nosotros"
        description="GuitarLA, venta de guitarras, tienda de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen de nosotros" />

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis euismod sapien, non commodo mi. Quisque rutrum
                felis at finibus aliquam. Nam in malesuada enim, a ultrices
                magna. Donec suscipit orci quis est bibendum ornare. Integer
                malesuada nunc maximus, consectetur neque sed, vulputate mauris.
                Phasellus posuere suscipit lorem a iaculis. 
              </p>
              <p>
                In risus leo, mattis vel nibh nec, rutrum laoreet est. Integer
                ultricies augue eget accumsan dictum. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Ut et egestas justo, at commodo nisi. Nulla nunc leo,
                gravida eget ligula bibendum, varius sagittis neque. 
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
