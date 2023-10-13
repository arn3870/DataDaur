import styles from "@/components/styles/gradients.module.css";

export default function index() {
  return (
    <div className="px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[70px] lg:py-[100px] text-[#fff]">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        style={{ zIndex: "-99" }}
      ></div>
      <h1 className="text-center text-[30px] md:text-[38px] lg:text-[68px]">
        Privacy Policy
      </h1>
      <p>
        <span className="text-[24px] md:text-[28px] lg:text-[38px]">
          Welcome to Datadaur!
        </span>
        <br></br> This page is used to inform website visitors regarding our
        policies with the collection, use, and disclosure of Personal
        Information if anyone decided to use our Service, the datadaur website.
        If you choose to use our Service, then you agree to the collection and
        use of information in relation with this policy. The Personal
        Information that we collect are used for providing and improving the
        Service. We will not use or share your information with anyone except as
        described in this Privacy Policy. The terms used in this Privacy Policy
        have the same meanings as in our Terms and Conditions, which is
        accessible at datadaur.com, unless otherwise defined in this Privacy
        Policy. referring to the same.
      </p>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Information Collection and Use
      </h1>
      <p>
        For a better experience while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to your name, phone number, and postal address. The
        information that we collect will be used to contact or identify you.
      </p>
      <br></br>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">Log Data</h1>
      <p>
        We want to inform you that whenever you visit our Service, we collect
        information that your browser sends to us that is called Log Data. This
        Log Data may include information such as your computer's Internet
        Protocol ("IP") address, browser version, pages of our Service that you
        visit, the time and date of your visit, the time spent on those pages,
        and other statistics.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">Cookies</h1>
      <p>We do not use use or store any cookies</p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Service Providers
      </h1>
      <p>
        We may employ third-party companies and individuals due to the following
        reasons:
      </p>
      <ul className="list-disc list-inside">
        <li>To facilitate our Service</li>
        <li>To provide the Service on our behalf</li>
        <li>To perform Service-related services</li>
        <li>To assist us in analyzing how our Service is used</li>
      </ul>
      <p>
        We want to inform our Service users that these third parties have access
        to your Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
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
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">Security</h1>
      <p>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Links to Other Sites
      </h1>
      <p>
        Our Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over,
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Children's Privacy
      </h1>
      <p>
        Our Services do not address anyone under the age of 13. We do not
        knowingly collect personal identifiable information from children under
        13. In the case we discover that a child under 13 has provided us with
        personal information, we immediately delete this from our servers. If
        you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact us so that we will
        be able to do necessary actions.
      </p>
      <h1 className="text-[24px] md:text-[28px] lg:text-[38px]">
        Changes to This Privacy Policy
      </h1>
      <p>
        We may update our Privacy Policy from time to time. Thus, we advise you
        to review this page periodically for any changes. We will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately, after they are posted on this page.
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
