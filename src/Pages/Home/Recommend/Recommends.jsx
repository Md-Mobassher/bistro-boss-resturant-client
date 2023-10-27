import Card from "../../../Components/Card";
import SectionTitle from "../../../Components/SectionTitle";



const Recommends = () => {
    return (
        <section className="lg:px-20 px-5 lg:mb-20 mb-16">
            <SectionTitle
             subtitle={'Should Try'} title={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
            </div>
        </section>
    );
};

export default Recommends;