import { Link } from "react-router-dom";
import { PolicyPanelType } from "../../types/PolicyPanelTypes";
import { FC } from "react";

export const PolicyPanel: FC<PolicyPanelType> = ({ isOpenAside }) => {
  return (
    <div
      className={
        isOpenAside
          ? "popup-wrapper popup-wrapper__policy popup-wrapper--active"
          : "popup-wrapper popup-wrapper__policy"
      }
    >
      <Link className="popup-wrapper__close" to="/">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3002 0.70998C13.2077 0.617276 13.0978 0.543728 12.9768 0.493547C12.8559 0.443366 12.7262 0.417535 12.5952 0.417535C12.4643 0.417535 12.3346 0.443366 12.2136 0.493547C12.0926 0.543728 11.9827 0.617276 11.8902 0.70998L7.00022 5.58998L2.11022 0.699979C2.01764 0.607397 1.90773 0.533957 1.78677 0.483852C1.6658 0.433747 1.53615 0.407959 1.40522 0.407959C1.27429 0.407959 1.14464 0.433747 1.02368 0.483852C0.902716 0.533957 0.792805 0.607397 0.700223 0.699979C0.607642 0.792561 0.534202 0.902472 0.484097 1.02344C0.433992 1.1444 0.408203 1.27405 0.408203 1.40498C0.408203 1.53591 0.433992 1.66556 0.484097 1.78652C0.534202 1.90749 0.607642 2.0174 0.700223 2.10998L5.59022 6.99998L0.700223 11.89C0.607642 11.9826 0.534202 12.0925 0.484097 12.2134C0.433992 12.3344 0.408203 12.464 0.408203 12.595C0.408203 12.7259 0.433992 12.8556 0.484097 12.9765C0.534202 13.0975 0.607642 13.2074 0.700223 13.3C0.792805 13.3926 0.902716 13.466 1.02368 13.5161C1.14464 13.5662 1.27429 13.592 1.40522 13.592C1.53615 13.592 1.6658 13.5662 1.78677 13.5161C1.90773 13.466 2.01764 13.3926 2.11022 13.3L7.00022 8.40998L11.8902 13.3C11.9828 13.3926 12.0927 13.466 12.2137 13.5161C12.3346 13.5662 12.4643 13.592 12.5952 13.592C12.7262 13.592 12.8558 13.5662 12.9768 13.5161C13.0977 13.466 13.2076 13.3926 13.3002 13.3C13.3928 13.2074 13.4662 13.0975 13.5163 12.9765C13.5665 12.8556 13.5922 12.7259 13.5922 12.595C13.5922 12.464 13.5665 12.3344 13.5163 12.2134C13.4662 12.0925 13.3928 11.9826 13.3002 11.89L8.41022 6.99998L13.3002 2.10998C13.6802 1.72998 13.6802 1.08998 13.3002 0.70998Z"
            fill="#29ABE2"
          />
        </svg>
      </Link>
      <div className="policypanel">
        <div className="policypanel__title">Privacy Policy</div>
        <div className="policypanel__subtitle">
          The Amendment of 16th of May, 2023
        </div>
        <div className="policypanel__safe">
          <div className="policypanel__box">
            <div className="policypanel__text">
              OUR SERVICE is provided by Mapooze at no cost and is intended for
              use as is.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at Mapooze unless
              otherwise defined in this Privacy Policy.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Information Collection and Use, Advertising.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information. The information that we may request will be retained
              by us and used as described in this privacy policy.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              The Mapooze may use third-party services that may collect
              information used to identify you.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Link to the privacy policy of third-party service providers used
              by the app
            </div>
          </div>
          <div className="policypanel__box">
            <ul className="policypanel__text">
              <li>Google Analytics for Firebase;</li>
              <li>Facebook.</li>
            </ul>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We don’t sell your personal data to advertisers, and we don’t
              share information that directly identifies you (such as your name,
              email address or other contact information) with advertisers
              unless you give us specific permission.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Applicable Laws</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Means Laws relating to privacy, data protection and the collection
              and use of an individual’s personal information and user
              information gathered, accessed, collected or used by us or any of
              its Affiliates.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Log Data</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We want to inform you that whenever you use our Service, in the
              case of an error in the Mapooze we collect data and information
              (through third-party products) on your phone called Log Data. This
              Log Data may include information such as your device Internet
              Protocol (“IP”) address, device name, operating system version,
              the configuration of the Mapooze when utilizing our Service, the
              time and date of your use of the Service, and other statistics.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text policypanel__text--italy">
              Controlling Your Personal Information
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If you provide personal information to us, You understand We may
              collect, hold, use, and disclose Your personal information in
              accordance with this privacy policy. You can choose not to
              disclose your personal information, but it may affect Your use of
              the Mapooze.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If We receive personal information about You from a third party,
              We will protect it as set out in this privacy policy. If You are a
              third party providing personal information about somebody else,
              You represent and warrant that You have such person’s consent to
              provide the personal information to us.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              You may request details of the personal information that We hold
              about You by contacting us using the details below with “Privacy
              Request” in the subject line.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If You believe that any information We hold about You is
              inaccurate, out of date, incomplete, irrelevant, or misleading,
              please contact Us using the details provided below with “Privacy
              Request” in the subject line. We will take reasonable steps to
              correct any information found to be inaccurate, incomplete,
              misleading, or out of date.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We will not discriminate against You for exercising any of Your
              rights over Your personal information. Unless Your personal
              information is required to provide You with a particular service
              or offer (for example, providing user support), We will not deny
              You to use our web-site.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We will comply with laws applicable to Us in respect of any data
              breach.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If You believe that We have breached a relevant data protection
              law and wish to make a complaint, please contact Us using the
              details below and provide Us with full details of the alleged
              breach with “Privacy Request” in the subject line. We will
              promptly investigate Your complaint and respond to You, in
              writing, setting out the outcome of Our investigation and the
              steps We will take to deal with Your complaint. You may also have
              the right to contact a regulatory body or data protection
              authority in relation to Your complaint.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Your Rights and Controlling Your Personal Information (GDPR)
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Subject to certain conditions, You have the following rights:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              a) You have the right to request copies of Your personal data from
              us. We may charge You a small fee for this service. <br />
              b) You have the right to request Us to correct information You
              believe is inaccurate. You also have the right to request that We
              complete information that You believe is incomplete. <br />
              c) You may have a right to request that We delete the personal
              information We hold about You at any time, and We will take
              reasonable steps to delete Your personal information from Our
              current records. If You ask Us to delete Your personal
              information, We will let You know how the deletion affects Your
              use of the Site or products and services. There may be exceptions
              to this right for specific legal reasons which, if applicable, We
              will set out for You in response to Your request. <br />
              d) You have the right to request that We restrict the processing
              of Your personal information if (i) You are concerned about the
              accuracy of Your personal information; (ii) You believe Your
              personal information has been unlawfully processed; (iii) You need
              Us to maintain the personal information solely for the purpose of
              a legal claim; or (iv) We are in the process of considering Your
              objection in relation to processing on the basis of legitimate
              interests. <br />
              e) You have the right to object to the processing of Your personal
              information that is based on Our legitimate interests or public
              interest. If this is done, We must provide compelling legitimate
              grounds for the processing which overrides Your interests, rights,
              and freedoms, in order to proceed with the processing of Your
              personal information. <br />
              f) You have the right to request a copy of the personal
              information You have provided to Us to be provided to You and/or
              another data controller, and that the format of such information
              be in a structured, commonly used and machine-readable format.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We have 30 days to respond to You if you make a request. To
              exercise any of these rights please contact Us below with “GDPR
              Privacy Request” in the subject line:{" "}
              <a href="mailto:mapooze.io@gmail.com">mapooze.io@gmail.com</a>.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              <li>
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </li>
              <li>
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </li>
              <li>
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </li>
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Cookies</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              This Service does not use these “cookies” explicitly. However, the
              _______ may use third-party code and libraries that use “cookies”
              to collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of this Service.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Service Providers</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We may employ third-party companies and individuals due to the
              following reasons:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If you do choose to withdraw your consent, this will not mean that
              Our processing of your personal data before you withdraw your
              consent was unlawful.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Our Partners (Google Admob, Facebook Audience Network etc.) can
              collect or use your personal information (for ex. ad identifiers,
              age, country, region, gender, language, games played by you,
              information related to the interaction of you with the Services
              and with other users, and so on) and collect Your cookies to show
              you personalized advertisements based on your interests.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Our partners have published detailed data about using of
              information about you, including ways you can control the
              information that is shared by your device when you visit or
              interact with sites and apps, at:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__table">
              <div className="policypanel__table-col">
                <div className="policypanel__table-top-item">NAME</div>
                <div className="policypanel__table-top-item">PURPOSE</div>
                <div className="policypanel__table-top-item">COUNTRY</div>
                <div className="policypanel__table-top-item">
                  PRIVACY POLICIES
                </div>
              </div>
              <div className="policypanel__table-col">
                <div className="policypanel__table-main-item policypanel__table-main-item--name">
                  Google LLC (Google Ads, Google Admob, Google Firebase)
                </div>
                <div className="policypanel__table-main-item policypanel__table-main-item--purpose">
                  analysis of the Users' experience within the App and how Users
                  use the Services and App
                </div>
                <div className="policypanel__table-main-item policypanel__table-main-item--country">
                  Ireland, USA
                </div>
                <a
                  className="policypanel__table-main-item policypanel__table-main-item--policy"
                  href="https://policies.google.com/privacy?hl=en"
                >
                  https:// <br /> policies.google.com/ <br /> privacy?hl=en
                </a>
              </div>
              <div className="policypanel__table-col">
                <div className="policypanel__table-main-item policypanel__table-main-item--name">
                  Facebook Inc.
                </div>
                <div className="policypanel__table-main-item policypanel__table-main-item--purpose">
                  analysis of the Users' experience within the App and how Users
                  use the Services and App
                </div>
                <div className="policypanel__table-main-item policypanel__table-main-item--country">
                  Ireland, USA
                </div>
                <a
                  className="policypanel__table-main-item policypanel__table-main-item--policy"
                  href="#https://www.facebook.com/privacy/explanation"
                >
                  https:// <br /> www.facebook.com/ <br /> privacy/explanation
                </a>
              </div>
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We also may use support from the specialists skilled in performing
              tasks to enhance our Services as well as other independent
              contractors, e.g. IT specialists, accountants, auditors, lawyers,
              etc, provided that all adequate safeguards are put in place.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              In order to secure the adequate level of protection, We
              implemented the Standard Contractual Clauses as well as signed
              Data Processing Agreements in the relationships with the engaged
              contractors, so they are bound to preserve at least the same level
              of personal data protection as it is granted by the law applicable
              to us.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">The information we collect</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We may collect and hold personal information about you, that is,
              information that can identify you, and is relevant to facilitating
              our relationship with you and your use of our website.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              The kinds of information we typically collect include:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              The kinds of information we typically collect include:
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">1. NAME</div>
            <div className="policypanel__text">2. ADDRESS</div>
            <div className="policypanel__text">3. GENDER</div>
            <div className="policypanel__text">4. PHONE NUMBER</div>
            <div className="policypanel__text">5. EMAIL ADDRESS</div>
            <div className="policypanel__text">
              6. USER NAME / PSEUDONYM AND PASSWORD
            </div>
            <div className="policypanel__text">7. GEO.</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Survey or other information, which means information contained in
              the responses given by you to survey or polling questions, or
              other information entered by you in the app, or any other
              information you choose to provide using the app, from time to
              time.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Security</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Children’s Privacy</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              These Services do not address anyone under the age of 18. We do
              not knowingly collect personally identifiable information from
              children under 18 years of age. In the case we discover that a
              child under 18 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able to
              do the necessary actions.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Links to Other Sites</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              Changes to This Privacy Policy
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">Contact Us</div>
          </div>
          <div className="policypanel__box">
            <div className="policypanel__text">
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{" "}
              <a href="mailto:mapooze.io@gmail.com">mapooze.io@gmail.com</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
