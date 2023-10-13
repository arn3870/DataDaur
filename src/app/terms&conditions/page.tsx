import styles from "@/components/styles/gradients.module.css";

export default function index() {
  return (
    <div className="px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[70px] lg:py-[100px] text-[#fff]">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        style={{ zIndex: "-99" }}
      ></div>
      <h1 className="text-center text-[30px] md:text-[38px] lg:text-[68px]">
        Terms and Conditions
      </h1>
      <p>
        <span className="text-[24px] md:text-[28px] lg:text-[38px]">
          Welcome to Datadaur!
        </span>
        <br></br> These terms and conditions outline the rules and regulations
        for the use of Datadaur's Next.js application, located at datadaur.com.
        By accessing this application, we assume you accept these terms and
        conditions. Do not continue to use the Datadaur Next.js application if
        you do not agree to take all of the terms and conditions stated on this
        page. The following terminology applies to these Terms and Conditions,
        Privacy Statement, and Disclaimer Notice and all Agreements: "Client",
        "You", and "Your" refers to you, the person log on this application and
        compliant to the Company’s terms and conditions. "The Company",
        "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
        "Parties", or "Us", refers to both the Client and ourselves. All terms
        refer to the offer, acceptance, and consideration of payment necessary
        to undertake the process of our assistance to the Client in the most
        appropriate manner for the express purpose of meeting the Client’s needs
        in respect of provision of the Company’s stated services, in accordance
        with and subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization,
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to the same.
      </p>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">Cookies</h1>
      <p>
        We employ the use of cookies. By accessing Datadaur's Next.js
        application, you agreed to use cookies in agreement with the Datadaur's
        Privacy Policy.
      </p>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">License</h1>
      <p>
        Unless otherwise stated, Datadaur and/or its licensors own the
        intellectual property rights for all material on the Datadaur Next.js
        application. All intellectual property rights are reserved. You may
        access this from Datadaur for your own personal use subjected to
        restrictions set in these terms and conditions.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        You must not
      </h1>
      <ul className="list-disc list-inside">
        <li>Republish material from Datadaur</li>
        <li>Sell, rent, or sub-license material from Datadaur</li>
        <li>Reproduce, duplicate, or copy material from Datadaur</li>
        <li>Redistribute content from Datadaur</li>
      </ul>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Hyperlinking to our Content
      </h1>
      <p>
        The following organizations may link to our Next.js application without
        prior written approval:
      </p>
      <ul className="list-disc list-inside">
        <li>Government agencies</li>
        <li>Search engines</li>
        <li>News organizations</li>
        <li>
          Online directory distributors may link to our application in the same
          manner as they hyperlink to the applications of other listed
          businesses
        </li>
        <li>
          System wide Accredited Businesses except soliciting non-profit
          organizations, charity shopping malls, and charity fundraising groups
          which may not hyperlink to our application.
        </li>
      </ul>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Removal of links from our website
      </h1>
      <p>
        If you find any link on our application that is offensive for any
        reason, you are free to contact and inform us at any moment. We will
        consider requests to remove links but we are not obligated to or so or
        to respond to you directly.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Content Liability
      </h1>
      <p>
        We shall not be held responsible for any content that appears on your
        Next.js application. You agree to protect and defend us against all
        claims that are rising on your application. No link(s) should appear on
        any application that may be interpreted as libelous, obscene, or
        criminal, or which infringes, otherwise violates, or advocates the
        infringement or other violation of, any third-party rights.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">Disclaimer</h1>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties, and conditions relating to our application
        and the use of this website. Nothing in this disclaimer will:
      </p>
      <ul className="list-disc list-inside">
        <li>
          limit or exclude our or your liability for death or personal injury;
        </li>
        <li>
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </li>
        <li>
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or
        </li>
        <li>
          exclude any of our or your liabilities that may not be excluded under
          applicable law.
        </li>
      </ul>
      <p>
        The limitations and prohibitions of liability set in this Section and
        elsewhere in this disclaimer: (a) are subject to the preceding
        paragraph; and (b) govern all liabilities arising under the disclaimer,
        including liabilities arising in contract, in tort, and for breach of
        statutory duty. As long as the Next.js application and the information
        and services on the application are provided free of charge, we will not
        be liable for any loss or damage of any nature.
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
