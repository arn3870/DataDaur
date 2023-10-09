import ServiceImages from "@/components/serviceDatailsComponents/ServiceImages/ServiceImages";
import PricingDetails from "@/components/serviceDatailsComponents/pricingDetails/PricingDetails";
import ReadyToBuy from "@/components/serviceDatailsComponents/readyToBuyComponent/ReadyToBuy";

export default function index() {
  return (
    <div>
      <div className="lg:px-[52px] lg:py-[52px] flex flex-row flex-wrap">
        <ServiceImages></ServiceImages>
        <PricingDetails></PricingDetails>
      </div>
      <ReadyToBuy></ReadyToBuy>
    </div>
  );
}
