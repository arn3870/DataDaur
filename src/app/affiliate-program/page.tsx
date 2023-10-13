import styles from "@/components/styles/gradients.module.css";

export default function index() {
  return (
    <div className=" px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[70px] lg:py-[100px] text-[#fff]">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        style={{ zIndex: "-99" }}
      ></div>
      <h1 className="text-center text-[30px] md:text-[38px] lg:text-[68px]">
        Affilate Program
      </h1>
      <p>
        <span className="text-[24px] md:text-[28px] lg:text-[38px]">
          Welcome to the Datadaur Affiliate Program!
        </span>
        <br></br> This program is designed to offer participants the opportunity
        to earn commission by referring customers to Datadaur's products and
        services.
      </p>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        How It Works
      </h1>
      <ol className="list-decimal list-inside">
        <li>
          Sign up for the Datadaur Affiliate Program through our online
          registration form.
        </li>
        <li>
          Receive a unique referral number that you can share with your
          audience.
        </li>
        <li>
          Earn commission for every qualified purchase made through your
          referral link.
        </li>
      </ol>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Commission Structure
      </h1>
      <ul className="list-disc list-inside">
        <li>
          Earn a standard commission rate of 10% on all sales generated through
          your referral link.
        </li>
        <li>
          Additional performance-based incentives and rewards are available for
          top-performing affiliates.
        </li>
      </ul>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Terms and Conditions
      </h1>
      <ul className="list-disc list-inside">
        <li>
          Commissions are paid out monthly, subject to a minimum payout
          threshold of $100.
        </li>
        <li>Commissions are not eligible for self-referrals.</li>
      </ul>
      <p>
        For any additional inquiries or support, please reach out to our team at
        affiliates@datadaur.com.
      </p>
      <p>
        Join the Datadaur Affiliate Program today and start earning rewards for
        your referrals!
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Contact Information
      </h1>
      <p>
        If you have any questions or suggestions about our Terms and Conditions,
        do not hesitate to contact us at Datadaur.
      </p>
      <br></br>
      <div className="flex justify-end">
        <p>Last updated: 10/13/2023</p>
      </div>
    </div>
  );
}
