'use client'
import Def from './def'
import CustomList, { CustomList2 } from './customList'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-[900px] p-12">
      <div className="text-lg">
        This Policy does not apply to third-party applications, websites,
        products, services or platforms that may be accessed through (non-)
        links that we may provide to you. These sites are owned and operated
        independently from us, and they have their own separate privacy and data
        collection practices. Any Personal Data that you provide to these
        websites will be governed by the third-party’s own privacy policy. We
        cannot accept liability for the actions or policies of these independent
        sites, and we are not responsible for the content or privacy practices
        of such sites.
      </div>

      <div>
        <div className="pt-10 text-2xl font-semibold">Introduction</div>
        <div className="pt-4 text-lg">
          <div>
            Our Privacy Policy governs your visit to https://wonmo.donna.net/
            and explains how we collect, safeguard and disclose information that
            results from your use of our Service.{' '}
          </div>
          <div className="pt-8">
            We use your data to provide and improve Donna. By using Donna, you
            agree to the collection and use of information in accordance with
            this policy. Unless otherwise defined in this Privacy Policy, the
            terms used in this Privacy Policy have the same meanings as in our
            Terms and Conditions.
          </div>
          <div className="pt-8">
            Our Terms and Conditions (“Terms”) govern all use of Donna and
            together with the Privacy Policy constitute your agreement with us
            (“Agreement”).
          </div>
        </div>
        <div>
          <div className="pt-10 text-2xl font-semibold">Definitions</div>
          <Def
            title="SERVICE"
            content="means the https://wonmo.donna.net/ website operated by Wonmo, INC"
          ></Def>
          <Def
            title="PERSONAL DATA"
            content="means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession)."
          ></Def>
          <Def
            title="USAGE DATA"
            content="is data collected automatically either generated by the use of Donna or from the Donna infrastructure itself (for example, the duration of a page visit)."
          ></Def>
          <Def
            title="COOKIES"
            content="are small files stored on your device (computer or mobile device)."
          ></Def>
          <Def
            title="DATA CONTROLLER"
            content="means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data
            Controller of your data."
          ></Def>
          <Def
            title="DATA PROCESSORS (OR SERVICE PROVIDERS)"
            content="means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various
            Service Providers in order to process your data more effectively."
          ></Def>
          <Def
            title="DATA SUBJECT"
            content="is any living individual who is the subject of Personal Data."
          ></Def>
          <Def
            title="THE USER"
            content="is the individual using Donna. The User corresponds to the Data Subject, who is the subject of Personal Data."
          ></Def>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            Google User Data and Limited Use Disclosure
          </div>
          <div className="pt-4 text-lg">
            Our Service’s use and transfer to any other app of information
            received from Google APIs will adhere to the&nbsp;
            <Link
              href={
                'https://developers.google.com/terms/api-services-user-data-policy'
              }
              className="text-blue-400 underline underline-offset-1"
            >
              Google API Services User Data Policy
            </Link>
            , including the Limited Use requirements.
          </div>
          <div className="pt-4 text-lg">
            We respect and acknowledge the&nbsp;
            <Link
              href={
                'https://developers.google.com/terms/api-services-user-data-policy'
              }
              className="text-blue-400 underline underline-offset-1"
            >
              Google API Services User Data Policy
            </Link>
            &nbsp; and affirm our commitment to comply with all its
            requirements, ensuring the privacy and protection of user data
            obtained via Google APIs.
          </div>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            How To Access Your Information
          </div>
          <div className="text-lg pt-4">
            When you log into Donna website, we access your information through
            Google Login. Once you authorize the limited scope of Google Login,
            we gain access to basic user information such as your email and
            name, as well as read permissions for your Google Calendar.
          </div>
        </div>
        <div>
          <div className="pt-10 text-2xl font-semibold">
            Information We collect
          </div>
          <div className="text-lg pt-4">
            We collect information about you directly from you and automatically
            through your use of our Website. To help you protect yourself and
            your information, we encourage you to provide and collect only that
            information that is necessary for using our Website. For example, to
            schedule a meeting, the only information that is necessary is names,
            email addresses, date, and time. Please note that if you choose not
            to share certain Personal Data with us, or refuse certain contact
            permissions, we might not be able to provide certain parts of the
            Services.
            <div className="pt-5">
              Donna is not directed to children under thirteen (13) years of
              age, and we do not knowingly collect personal Data from children
              under 13. If we discover that a child under 13 has provided us
              with Personal Data, we will promptly delete such Personal Data
              from our systems.
            </div>
          </div>
          <div className="list-decimal text-lg pt-4">
            <CustomList2
              title="Calendar Information."
              descriptionList={[
                'Our Donna app is designed to integrate with your Google Calendar for your convenience. Through this, it can determine the free/busy status in your calendar and identify times when you have no appointments. However, this information is only used as necessary for Donna app to provide its services, and is never disclosed to the public or used for other purposes.',
                `What's important is that even when Donna app analyzes your calendar information, we have no knowledge of who you are meeting with or what your appointments entail. This is to ensure one of Donna app's key features: protecting your personal information.`,
                'Lastly, Donna app stands as a processor or service provider in handling your calendar information, and your calendar information is used solely for the purpose of providing services for your convenience.',
                'At Donna app, we prioritize the protection of your personal information and are always striving to provide a convenient and secure service.',
              ]}
            />
            <CustomList2
              title="Information Received from Third Parties."
              descriptionList={[
                'If you choose to connect your account to your account with a third-party service, we may receive or be granted access to information from such third-party service, including Personal Information. For example, if you use the Zoom service, you will send to Zoom certain Personal Information as determined by you. You can stop sharing your information from a third-party service with us by removing our access to that service. Donna processes that information on the User’s behalf as a processor or service provider.',
              ]}
            />
            <CustomList2
              title="Account and Billing Information."
              descriptionList={[
                'Users provide Donna with certain information, including name, email address, username, and password, when you set up your account. If you purchase a premium version of Donna, our third party payment processors will collect and store your billing address and credit card information. We store the last four digits of your credit card number, card type, and the expiration date.',
              ]}
            />
          </div>
          <div className="list-decimal text-lg">
            <div className="text-xl font-semibold pt-4 pb-5">
              Information Collected Automatically From You.
            </div>
            <CustomList
              title="Log & Device Data"
              descriptionList={[
                'When you use Donna, we and our authorized third parties may automatically record certain information (“log data”), including information that your browser sends whenever you visit our Website. This log data may include the web address you came from or are going to, your device model, operating system, browser type, unique device identifier, IP address and time zone or approximate location. Whether we collect some or all of this information often depends on what type of device you’re using and its settings. For example, different types of information are available depending on whether you’re using a Mac or PC. To learn more about what information your device makes available to us, please check the policies of your device manufacturer or software provider.',
              ]}
            />
            <CustomList
              title="Cookie Data"
              descriptionList={[
                'Depending on how you’re accessing our services and subject to your consent, opt-out preferences, or other appropriate legal basis where legally required, we and our authorized third parties may use “Cookies” (a small text file sent by your computer each time you visit our Website, unique to your Donna account or your browser) or similar technologies to record log data. When we use Cookies, we may use ‘session’ Cookies (that last until you close your browser) or ‘persistent’ Cookies (that last until you or your browser deletes them). For example, we may use Cookies to keep you logged into Donna. Some of the Cookies we use are associated with your Donna account (including Personal Data about you, such as the email address you gave us), and other Cookies are not. ',
              ]}
            />
          </div>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            How We Use Your Information
          </div>
          <div className="list-decimal text-lg pt-4">
            <CustomList2
              title="Provide the Donna Website Service."
              descriptionList={[
                'We will use your information to provide our Website and App Functionallity to you, including to facilitate scheduling; create and manage your account; respond to your inquiries; prevent or address service errors, security, or technical issues; analyze and monitor usage; prevent spam, fraud and abuse on the Website; and for other customer service and support purposes. We use the payment information you provide to us in order to alert you of past, current, and upcoming charges, to allow us to present the billing history to you on your billing page on the Website, and to perform internal financial processes, such as looking at the status of a credit card charge. In the event of a credit card dispute, we also share account information with your bank to verify the legitimacy of a charge. ',
              ]}
            />
          </div>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            With Whom We May Share Your Information
          </div>
          <div className="text-lg pt-4">
            We use other companies, agents, or contractors (“Service Providers”)
            to perform services on our behalf or to assist us with providing
            services and communicating with you. For Example, when you integrate
            Zoom service, you’d share your information(such as the email address
            or name).
          </div>
          <div className="text-lg pt-4">
            Also, you can share your information with foundation model
            providers. When you add Donna to an email, we use OpenAI&apos;s GPT
            models to parse the thread. This enables us to take the correct
            action on your behalf. Any information in the emails that Donna is
            cc&apos;d on will be shared with OpenAI. OpenAI&apos;s use of your
            personal information is governed by their Privacy Policy, which can
            be found at OpenAI Privacy Policy
          </div>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            Storage of Information
          </div>
          <div className="text-lg pt-4">
            Given the nature of communications and information processing
            technology, there is no guarantee that Personal Data will be
            absolutely safe from access, alteration, or destruction by a breach
            of any of our physical, technical, and managerial safeguards.
            However, Donna takes the security of your Personal Data very
            seriously. We work hard to protect the Personal Data that you
            provide from loss, misuse, unauthorized access, or disclosure and we
            have taken reasonable steps to help protect the Personal Data we
            collect. We have obtained industry recognized certifications and
            audits such as the ISO/IEC 27001, which affirm our commitment to our
            security program (certification not applicable to the Prelude
            service).
          </div>
          <div className="text-lg pt-4">
            You should also take steps to protect against unauthorized access to
            your device and account by, among other things, choosing a unique
            and complex password that nobody else knows or can easily guess and
            keeping your log-in and password private. We are not responsible for
            any lost, stolen, or compromised passwords or for any activity on
            your account via unauthorized password activity.
          </div>
          <div className="text-lg pt-4">
            We retain the Personal Data we collect for so long as is reasonably
            necessary to fulfill the purposes for which the data was collected,
            to perform our contractual and legal obligations (including any
            exemptions or exceptions contemplated by law), and for any
            applicable statute of limitations periods for the purposes of
            bringing and defending claims.
          </div>
          <div className="text-lg pt-4">
            If you wish to delete your personal information from our app, please
            send an email to wonmo2770@gmail.com. We will proceed with the
            necessary steps upon receiving your request.
          </div>
        </div>

        <div>
          <div className="pt-10 text-2xl font-semibold">
            Information Collection and Use with Third-Parties
          </div>
          <div className="list-decimal text-lg pt-4">
            <CustomList
              title="Purpose of Sharing:"
              descriptionList={[
                'Service Enhancement: We may share your data with third parties to enhance the functionality and efficiency of our Service.',
                'Legal Compliance: In certain circumstances, we may be required to share your data in compliance with legal obligations or in response to lawful requests by public authorities.',
              ]}
            />
            <CustomList
              title="Types of Third Parties:"
              descriptionList={[
                'Analytics Providers: For analyzing service usage and improving user experience.',
                'Marketing Partners: For targeted advertising and promotional campaigns.',
                'Cloud Storage Providers: For secure data storage and backup.',
                'Payment Processors:  For processing transactions securely.',
                "Foundation Model Providers: When you add Donna to an email, we use OpenAI’s GPT models to parse the thread. This enables us to take the correct action on your behalf. Any information in the emails that Donna is cc'd on will be shared with OpenAI. OpenAI's use of your personal information is governed by their Privacy Policy, which can be found at  OpenAI Privacy Policy",
              ]}
            />
            <CustomList
              title="Safeguards in Place:"
              descriptionList={[
                'Data Protection Agreements: We enter into data protection agreements with all third-party service providers, ensuring they adhere to our privacy standards.',
                'Limited Access: Access to your personal data is limited to what is necessary for the third party to perform their specific function.',
                'Regular Audits: We conduct regular audits of our third-party partners to ensure ongoing compliance with our privacy standards.',
              ]}
            />
            <CustomList
              title="User Consent and Opt-Out Options:"
              descriptionList={[
                'Explicit Consent: We obtain explicit consent from users before sharing any sensitive personal data with third parties.',
                'Opt-Out Options: Users have the option to opt out of certain types of data sharing. Instructions for opting out are clearly provided in our Service.',
              ]}
            />
            <CustomList
              title="Transparency:"
              descriptionList={[
                'List of Third Parties: A list of third-party service providers we share data with is available upon request.',
                'Updates on Changes: We will inform users of any significant changes in our data-sharing practices.',
              ]}
            />
            <CustomList
              title="International Data Transfers:"
              descriptionList={[
                'Cross-Border Data Transfer: If personal data is transferred to a third party in a different country, we ensure appropriate safeguards are in place in compliance with applicable data protection laws.',
              ]}
            />
            <CustomList
              title="User Data Rights:"
              descriptionList={[
                'Access to Shared Data:  Users have the right to know what personal data is shared with third parties and can request access to such information.',
                'Revocation of Consent:  Users can revoke consent to share their data with third parties at any time.',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
