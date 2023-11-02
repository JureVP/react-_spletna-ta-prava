import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">O nas</h1>
        <hr />
        <p className="lead text-center">
        Z veseljem vam predstavljamo našo spletno trgovino, kjer boste našli najnovejšo modo in najboljše elektronske izdelke, združene na enem mestu. Naša strast je zagotoviti vam udobno in prijetno izkušnjo pri spletnem nakupovanju, ne glede na to, ali iščete najnovejše modne trende ali pa želite nadgraditi svojo elektroniko.

Oblačila:
Pri nas je moda več kot le oblačenje - je izraz vaše osebnosti. Ponujamo vam širok izbor oblačil za vse priložnosti, od vsakdanjega sloga do posebnih dogodkov. Naša ekipa strokovnjakov nenehno sledi najnovejšim trendom, da vam lahko ponudimo najboljše izdelke. Ne glede na to, ali iščete elegantno obleko za posebno priložnost, športna oblačila za aktivni življenjski slog ali pa enostavno in udobno vsakodnevno obleko, boste pri nas našli nekaj za vsak okus.

Elektronika:
Smo tudi vaš zanesljiv vir za najboljše elektronske izdelke. Naša ponudba vključuje pametne telefone, tablične računalnike, prenosnike, pametne ure, slušalke, igralne konzole in še veliko več. Sodelujemo s priznanimi proizvajalci, da vam zagotovimo izdelke najvišje kakovosti. Naša ekipa strokovnjakov vam stoji ob strani, da vam pomaga pri izbiri prave elektronike za vaše potrebe.

Zakaj izbrati nas:

Široka izbira: Naša ponudba vključuje oblačila in elektroniko, tako da lahko zadovoljimo različne potrebe in želje naših strank.
Kakovost: Skrbno izbiramo izdelke in sodelujemo z zaupanja vrednimi proizvajalci, da zagotovimo najvišjo kakovost.
Ugodne cene: Trudimo se ponuditi konkurenčne cene, da bi naši kupci dobili najboljšo vrednost za svoj denar.
Enostavno in varno naročanje: Naša spletna trgovina je enostavna za uporabo, in vaše naročilo bo varno obdelano.
Hitra dostava: Naša ekipa skrbi za hitro dostavo, da boste svoje izdelke prejeli v najkrajšem možnem času.
Hvala, ker ste nas obiskali, in upamo, da boste uživali v vašem nakupovalnem doživetju pri nas. Če imate kakršna koli vprašanja ali potrebujete pomoč, nas prosimo kontaktirajte - naša ekipa bo vesela, da vam pomaga.






        </p>

        <h2 className="text-center py-4">Naši izdelki</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/index-online-64da7782717b2.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">moška oblačila</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://static.independent.co.uk/2023/08/15/08/petite%20clothing%20brands.png?width=1200&height=1200&fit=crop" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Ženska oblačila</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://fashionista.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk1Mzc0NzE1OTc4NjU1MDM0/jewelry-trends-2023.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Nakit</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://thecanadiantechie.files.wordpress.com/2022/02/pc-accessories-guide-featured-3.jpg?w=1200" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Elektronika</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage