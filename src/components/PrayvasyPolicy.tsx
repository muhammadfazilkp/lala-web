import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PrivacyPolicyScreen() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'general',
      title: '1. General',
      content: `Lala Stories, a venture of Funfeed Global Private Limited, offers an internet-based digital subscription service that gives you access to the Lala Stories website and other literary content on your mobile phone, tablet, or other devices. This privacy policy explains our practices regarding collection, storage, use, and disclosure of your personal data. We ensure your personal data is protected with appropriate technical and organizational security measures.`
    },
    {
      id: 'collection',
      title: '2. When and Where Does Lala Stories Collect Personal Data?',
      content: `We collect personal data when you set up an account, use our service, install our application, visit our website, report errors, contact customer services, link to third-party services like Facebook, or answer surveys. We also collect information through cookies and similar tracking technologies to facilitate login, remember your preferences, send tailored marketing, and measure advertising success.`
    },
    {
      id: 'what-data',
      title: '3. What Personal Data Does Lala Stories Collect?',
      content: `We collect basic user data including your name, email address, phone number, date of birth, gender, and address. We also collect usage data such as your choices of titles and search queries, viewing information, and technical data including device IP address, app version, language settings, and browser type. If you link to Facebook, we may collect data you've given Facebook permission to share with us.`
    },
    {
      id: 'retention',
      title: '4. For How Long Is the Data Kept?',
      content: `We keep your personal data only as long as necessary. Marketing data is stored during your subscription and for 12 months after it ends. Support data is stored for 24 months after resolving your latest support ticket. Analytical data is processed during your subscription and for 24 months thereafter. We may store data longer if required by law or to establish, exercise, or defend legal claims.`
    },
    {
      id: 'storage',
      title: '5. Where Is the Personal Data Stored?',
      content: `Your personal data is stored on servers located in the country where the contracting party is established. For international transfers, we apply appropriate security measures in accordance with applicable data protection laws. We primarily store data across India.`
    },
    {
      id: 'why-process',
      title: '6. Why Does Lala Stories Process Your Personal Data?',
      content: `We process your personal data to manage our customer relationship, fulfill legal obligations, and conduct market and customer analysis. We use it to provide personalized offers and services, decrease irrelevant advertising, and create targeted marketing through email, in-app push notifications, and third-party advertising. We may also analyze and combine information from multiple sources to tailor recommendations to your preferences.`
    },
    {
      id: 'legal-basis',
      title: '7. What Is the Legal Basis for the Processing?',
      content: `Most personal data is processed because it's necessary for performing our terms of service and providing the Service. Some data is processed based on legitimate interest, such as support purposes or certain marketing activities. Other data is processed based on your consent, particularly for Facebook integration and direct marketing. You can withdraw consent at any time.`
    },
    {
      id: 'security',
      title: '8. Data Security and Integrity',
      content: `The security, integrity, and confidentiality of your personal data is important to us. We've implemented technical, administrative, and physical security measures to protect your data from unauthorized access, disclosure, use, modification, destruction, and loss. We regularly review our security procedures and encourage you to report any suspicious activities.`
    },
    {
      id: 'disclosure',
      title: '9. Who Does Lala Stories Disclose Your Personal Data To?',
      content: `We may disclose your personal data to affiliates, business partners, suppliers, and third parties to fulfill our agreement with you. We also disclose data to third parties for tailored advertising, marketing success measurement, and promotional purposes. We use data processing agreements to ensure high security standards. Data may be disclosed to comply with legal requirements or to prevent fraud and security issues.`
    },
    {
      id: 'external',
      title: '10. Links to External Websites',
      content: `Lala Stories is not responsible for the processing of personal data on external websites. We encourage you to review the privacy practices of respective website controllers before providing your information.`
    },
    {
      id: 'changes',
      title: '11. Changes to the Privacy Policy',
      content: `We may revise this privacy policy from time to time. We'll inform you of significant changes via email, SMS, or through the Service before they take effect. The most recent version will be published on our website. We encourage you to review this policy frequently to stay informed about our data processing practices.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-500 text-white sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-orange-100">Lala Stories - Funfeed Global Private Limited</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6 border-l-4 border-orange-500">
          <p className="text-gray-700 leading-relaxed">
            This privacy policy explains Lala Stories' practices regarding the collection, storage, use, and disclosure of your personal data. Your privacy and data protection are important to us, and we are committed to treating your information with respect in accordance with applicable data protection legislation.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-800 text-left">{section.title}</h2>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expandedSections[section.id] && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border-t-4 border-orange-500">
          <p className="text-sm text-gray-600 mb-4">
            <strong>Last Updated:</strong> This policy may be revised from time to time. Please review it frequently to stay informed about our data processing practices.
          </p>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
            I Accept the Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}