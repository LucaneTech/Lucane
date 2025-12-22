import Button from "../../ui/Button";

const Promotional = () => { 
    return(
       <>
        <section className="flex flex-col md:flex-row items-center  justify-around text-sm  rounded-tl-4xl rounded-br-4xl  rounded-tr-lg rounded-bl-lg m-2 max-w-7xl w-full  bg-main-color maw-h-5xl  h-full md:mt-12">

        <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
          <h2 className="md:text-5xl text-3xl font-semibold text-white">Avez-vous un projet en tête?</h2>
          <p className="text-2xl md:text-4xl mt-2 w-3/4">Demandez votre devis personnalisé dès maintenant !</p>

          <div className="flex items-center gap-4 mt-6">
            <Button label="Demander un devis" changeColor="white" className="mt-8 md:mt-10" to="/contact" />
          </div>
        
        </div>

        <img className="max-w-[375px] pt-10 md:p-0"
          src="images/home/promo.png"
          alt="excitedWomenImage"/>
      </section>
       </>
    )

}

export default Promotional;