import { statc } from "./static";
import { Unfeatprod } from "./unfeatprod";
import { Dotter } from "./dotter";
import { Symtext } from "./symtext";
import { Unfeatprod_2 } from "./unfeatprod_2";
import { Unfeatprod_3 } from "./unfeatprod_3";
import { Sofa_1st } from "./sofa_1st";
import { Collection_1 } from "./collection_1";
import { Tiny_side } from "./tiny_side";
import { Sofa_2nd } from "./sofa_2nd";
import { Unfeatprod_4 } from "./unfeatprod_4";
import { Banner_1 } from "./banner_1";
import { Ads_1 } from "./ads_1";
import { Blog_1 } from "./blog_1";
import { Caro_1 } from "./caro_1";
import { Footer_1 } from "./footer_1";
import { Ads_2 } from "./ads_2";

export function Featprod(props) {

    return (

        <>

            <Caro_1 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo." topic="New Furniture Collection
Trends in 2020" quote="Best Furniture For Your Castle...." button="Shop Now" cover_2={[statc.img.sofa_1,statc.img.sofa_2,statc.img.sofa_3]} cover_1={statc.img.lamp_1} cover_3={statc.img["50_off"]}/>

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Featured Products</section>

            <section className="flex justify-center p-1">

                <Unfeatprod active={false} code="Code - Y523201" cover={statc.img.chair_1} name="Cantilever chair" price="$42.00" />

                <Unfeatprod active={true} code="Code - Y523201" cover={statc.img.chair_2} name="Cantilever chair" price="$42.00" />

                <Unfeatprod active={false} code="Code - Y523201" cover={statc.img.chair_3} name="Cantilever chair" price="$42.00" />

                <Unfeatprod active={false} code="Code - Y523201" cover={statc.img.chair_4} name="Cantilever chair" price="$42.00" />

            </section>

            <section className="py-2">

                <Dotter clanem="pt-1 rounded-sm flex-1" bg={['bg-pink-600', 'bg-pink-300', 'bg-pink-300', 'bg-pink-300']} />

            </section>

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Latest Products</section>

            <section className="flex">

                <section className="flex m-auto">

                    <Symtext text={<section className="border-b border-pink-600 text-pink-600">New Arrival</section>} rev={true} sym={false} />

                    <Symtext text={<section className="text-purple-600">Best Seller</section>} rev={true} sym={false} />

                    <Symtext text={<section className="text-purple-600">Featured</section>} rev={true} sym={false} />

                    <Symtext text={<section className="text-purple-600">Special Offer</section>} rev={true} sym={false} />

                </section>

            </section>

            <section className="flex justify-center p-1">

                <Unfeatprod_2 active={false} price_2="$65.00" cover={statc.img.chair_5} name="Comfort Handy Craft" price="$42.00" />

                <Unfeatprod_2 active={true} price_2="$65.00" cover={statc.img.chair_6} name="Comfort Handy Craft" price="$42.00" />

                <Unfeatprod_2 active={false} price_2="$65.00" cover={statc.img.chair_1} name="Comfort Handy Craft" price="$42.00" />

            </section>

            <section className="flex justify-center p-1">

                <Unfeatprod_2 active={false} price_2="$65.00" cover={statc.img.chair_8} name="Comfort Handy Craft" price="$42.00" />

                <Unfeatprod_2 active={false} price_2="$65.00" cover={statc.img.chair_7} name="Comfort Handy Craft" price="$42.00" />

                <Unfeatprod_2 active={false} price_2="$65.00" cover={statc.img.chair_4} name="Comfort Handy Craft" price="$42.00" />

            </section>

            <section className="font-bold text-xl text-purple-800 p-1 text-center">What Shopex Offer!</section>

            <section className="flex justify-center p-1">

                <Unfeatprod_3 cover={statc.img.supp_1} name="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />

                <Unfeatprod_3 cover={statc.img.supp_2} name="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />

                <Unfeatprod_3 cover={statc.img.supp_3} name="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />

                <Unfeatprod_3 cover={statc.img.supp_4} name="24/7 Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />

            </section>

            <Sofa_1st />

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Trending Products</section>

            <section className="flex justify-center p-1">

                <Unfeatprod_2 lin={true} active={false} price_2="$26.00" cover={statc.img.chair_9} name="Cantilever chair" price="$40.00" />

                <Unfeatprod_2 lin={true} active={false} price_2="$26.00" cover={statc.img.chair_10} name="Cantilever chair" price="$40.00" />

                <Unfeatprod_2 lin={true} active={false} price_2="$26.00" cover={statc.img.chair_11} name="Cantilever chair" price="$40.00" />

                <Unfeatprod_2 lin={true} active={false} price_2="$26.00" cover={statc.img.chair_7} name="Cantilever chair" price="$40.00" />

            </section>

            <section className="flex justify-center p-1">

                <Collection_1 active={true} cover={statc.img.timer_1} prompt="Shop Now" name="23% off in all products" />

                <Collection_1 active={false} cover={statc.img.drawer_1} prompt="View Collection" name="23% off in all products" />

                <section className="">

                    <Tiny_side active={false} cover={statc.img.chair_12} prompt="$32.00" name="Executive Seat chair" />

                    <Tiny_side active={false} cover={statc.img.chair_13} prompt="$32.00" name="Executive Seat chair" />

                    <Tiny_side active={false} cover={statc.img.chair_14} prompt="$32.00" name="Executive Seat chair" />

                </section>

            </section>

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Discount Item</section>

            <section className="flex">

                <section className="flex m-auto">

                    <Symtext text={<section className="border-b border-pink-600 text-pink-600">Wood Chair</section>} rev={true} sym={false} />

                    <Symtext text={<section className="text-purple-600">Plastic Chair</section>} rev={true} sym={false} />

                    <Symtext text={<section className="text-purple-600">Sofa Colletion</section>} rev={true} sym={false} />

                </section>

            </section>

            <Sofa_2nd />

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Top Categories</section>

            <section className="flex justify-center p-1">

                <Unfeatprod_4 active={true} cover={statc.img.chair_15} name="Mini LCW Chair" price="$56.00" />

                <Unfeatprod_4 active={false} cover={statc.img.chair_4} name="Mini LCW Chair" price="$56.00" />

                <Unfeatprod_4 active={false} cover={statc.img.chair_9} name="Mini LCW Chair" price="$56.00" />

                <Unfeatprod_4 active={false} cover={statc.img.chair_15} name="Mini LCW Chair" price="$56.00" />

            </section>

            <Banner_1 cover={statc.img.banner_1} name="Get Leatest Update By Subscribe 0ur Newslater" button="Shop Now" />

            <Ads_1 cover={statc.img.ads_1} />

            <section className="font-bold text-xl text-purple-800 p-1 text-center">Leatest Blog</section>

            <section className="flex justify-center p-1">

                <Blog_1 active={false} date="21 August,2020" owner="SaberAli" cover={statc.img.blog_1} desc="More off this less hello samlande lied much
over tightly circa horse taped mightly" topic="Top esssential Trends in 2021" />

                <Blog_1 active={true} date="21 August,2020" owner="Surfauxion" cover={statc.img.blog_2} desc="More off this less hello samlande lied much
over tightly circa horse taped mightly" topic="Top esssential Trends in 2021" />

                <Blog_1 active={false} date="21 August,2020" owner="SaberAli" cover={statc.img.blog_1} desc="More off this less hello samlande lied much
over tightly circa horse taped mightly" topic="Top esssential Trends in 2021" />

            </section>

            <Footer_1/>
            
            <Ads_2 cover={statc.img.ads_2}/>

        </>

    )

};