import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      maritimo: file(relativePath: { eq: "services/maritim.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      trailer: file(relativePath: { eq: "services/trailer.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      aduanal: file(relativePath: { eq: "services/aduanal.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      intermodal: file(relativePath: { eq: "services/intermodal.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(

    <Layout>
      <SEO title="Logistica personalizada en Baja California" />

      <Carousel />

      <div className="container">
        <div className="alert alert-info my-5">
          <p>VACANTE COORDINADOR DE LOGISTICA – ENSENADA</p>
          <p>El candidato a Coordinador de logística será responsable de organizar y brindar soluciones eficientes de transporte y almacenamiento para nuestros requisitos de envío. </p>
          <a href="/vacantes.pdf" className="btn px-0" target="_blank">Más información <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: 15, height: 15}}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></a>
        </div>
      </div>

      <SectionImage 
        tag="Exportaciones e importaciones"
        title="Baja Cargo Solutions"
        paragraph={[
          "Somos una empresa Mexicana, ubicados estratégicamente en el puerto de Ensenada de Baja California, dedicados a dar un trato personalizado de soluciones en logística táctica en transporte Internacional cumpliendo en tiempo y forma los requerimientos de nuestros clientes.",
        ]}
        src={<Img fluid={data.about.childImageSharp.fluid} className="rounded" alt="Exportaciones e importaciones" />}
        link={{to: "nosotros", title: "Saber más"}}
      />
      
      <section className="container py-5 my-5 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
          <h2 className="text-dark pb-3 text-center text-center">Soluciones en logística táctica en transporte Internacional</h2>
          <p className="text-center">Dedicados a dar un trato personalizado cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
          <Link to="/servicios" className="btn btn-primary rounded">Ver los servicios</Link>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start">
            <div className="row px-3">
              <Img fluid={data.trailer.childImageSharp.fluid} className="w-100 rounded" alt="Transporte terrestre" />
              <div className="py-4 mb-4 mb-4">
                <h4 className="text-dark pb-3">Transporte Terrestre</h4>
                <p className="pb-3">Contamos con una amplia cartera de socios comerciales en servicios terrestres para los requerimientos
                estándar o servicios especializados en todo el territorio de Estados Unidos y México.</p>
                <div className="row">
                  <h5 className="col-md-5 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Servicios Puerta a Puerta</h5>
                  <h5 className="col-md-3 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> FLT y LTL</h5>
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Despacho Aduanal</h5>
                </div>
                <div className="row">
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Carga Seca</h5>
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Tanque</h5>
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Granel</h5>
                </div>
                <div className="row">
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Maquinaria Pesada</h5>
                  <h5 className="col-md-4 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Plataforma</h5>
                </div>
              </div>
            </div>
            <div className="row px-3">
              <Img fluid={data.intermodal.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Transporte Intermodal</h4>
                <p>Servicios combinados de transporte para optimizar y bajar costos en distancias largas, transbordos,
                consolidación y des consolidación de cargas.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start">
            <div className="row px-3">
              <Img fluid={data.maritimo.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Transporte Marítimo</h4>
                <p>De acuerdo a nuestra experiencia, ofrecemos un amplio conocimiento de los más importantes puertos
                en China, Estados Unidos y México dando como resultado un control adecuado de la documentación y
                embarque.</p>
              </div>
            </div>
            <div className="row px-3">
              <Img fluid={data.aduanal.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Despacho Aduanal</h4>
                <p>Contamos con agentes aduanales para realizar todo tipo de trámite aduanal para sus importaciones y
                exportaciones dentro del territorio nacional, del lado americano EEUU, cruces fronterizos, puertos
                marítimos, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
