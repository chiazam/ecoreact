import { Foot_stan } from "./foot_stan";

export function Footer_1(props) {

    return (<>

        <section className="flex justify-center p-2 bg-gray-200">

            <Foot_stan name="Hekto" active={true} list={['Contact Info', '17 Princess Road, London, Greater London NW1 8JR, UK']} />

            <Foot_stan name="Catagories" active={false} list={['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones']} />

            <Foot_stan name="Customer Care" active={false} list={['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking']} />

            <Foot_stan name="Pages" active={false} list={['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages']} />

        </section>

    </>);

};