import styles from "../../styles/gradients.module.css";
export default function ServiceImages() {
  return (
    <div className="text-[#F2F2F2] w-[75%]">
      {/* <div className="text-[#CACACA] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"> */}
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        style={{ zIndex: "-99" }}
      ></div>
      <div className="text-[36px]">Build your website in WordPress</div>
      <div className="text-[20px] pb-[10px] w-[90%]">
        Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur
        nulla volutpat libero tortor nam tristique.
      </div>
      <div className="text-[#CACACA] flex flex-row gap-5">
        <div className="lg:w-[645px] md:w-[400px] sm:w-[300px] lg:h-[645px] md:h-[400px] bg-[#1C1928] rounded-[10px]"></div>
        <div className="flex flex-col gap-5">
          <div className="w-[228px] h-[200px] bg-[#1C1928] rounded-[10px]"></div>
          <div className="w-[228px] h-[200px] bg-[#1C1928] rounded-[10px]"></div>
          <div className="w-[228px] h-[200px] bg-[#1C1928] rounded-[10px]"></div>
        </div>
      </div>
      <div className="text-[36px]">Service Description</div>
      <div className="text-[20px] pb-[10px] w-[90%] text-[18px]">
        <span>
          Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut nec
          condimentum vulputate id sed. Ut ullamcorper aenean tincidunt lacinia.
          Mauris tincidunt libero blandit et eleifend. In nec vitae feugiat
          gravida lectus elementum. Pellentesque sed faucibus facilisis nisl ac
          phasellus viverra id nulla. Interdum consectetur non eu posuere
          pulvinar.
        </span>
        <br></br>
        <br></br>
        <ul className="list-disc">
          <li>Bullet Point 1</li>
          <li>Bullet Point 2</li>
          <li>Bullet Point 3</li>
        </ul>
        <br></br>
        <span>
          Dui purus lectus sed in. Integer lorem quisque augue at euismod massa
          molestie. Diam tellus purus dui eu gravida elementum. Auctor quis eget
          ullamcorper mauris. Donec amet vulputate feugiat egestas id. Vel vitae
          adipiscing ac turpis fermentum egestas dictum nulla. Proin amet
          vestibulum tincidunt iaculis. Egestas in augue vel non vulputate eu
          erat etiam.
        </span>
        <br></br>
        <br></br>
        <span>
          Sit odio facilisi adipiscing dui tincidunt egestas sed neque. Vitae
          suscipit rhoncus tincidunt dolor velit proin augue sem. Porta iaculis
          vitae mus a id a morbi at. Lectus viverra non amet mauris viverra
          rhoncus velit lectus nibh. Suscipit lacus pretium quis eros mi tempor.
        </span>
      </div>
    </div>
  );
}
