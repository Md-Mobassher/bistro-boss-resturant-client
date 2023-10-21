import Card from "../../../Components/Card";
import SectionTitle from "../../../Components/sectionTitle";


const Recommends = () => {
    return (
        <section className="max-w-screen-xl mx-auto">
            <SectionTitle
             subtitle={'Should Try'} title={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card title={'Caeser Salad'} description={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
            </div>
        </section>
    );
};

export default Recommends;