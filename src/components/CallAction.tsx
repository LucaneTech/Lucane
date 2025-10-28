import Button from "../ui/Button";

interface CallActionProp{
    title: string;
    description: string;
    label: string;
    to:string;

}

const CallAction: React.FC<CallActionProp> = ({title,description,label, to }) => {
    return(
        <>
        <section className="text-center  mx-auto mt-8 md:mt-10 py-12 px-4">
            <h1 className="main-color font-semibold text-center text-2xl md:text-4xl mb-4 md:mb-">{title}</h1>
            <p className="text-base">{description}</p>

            <Button label={label} to ={to} changeColor="primary" className="mt-6"/>

        </section>
        </>
    )
}

export default CallAction;