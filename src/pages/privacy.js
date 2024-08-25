import * as React from 'react';
import Layout from '../components/layout';
import SocialIcons from '../components/socialIcons';
import Seo from '../components/seo';

export default function About() {
  return <Layout>
    <Seo title="About" />
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        
        <p className="text-lg about-blurb">Effective Date: 08/25/2024</p>
        
        <p className="text-lg about-blurb">1. Introduction
        Your privacy is important to us. This Privacy Policy explains how the YouTube Caption Translator Chrome extension handles user data. By using the Extension, you agree to the practices described in this Privacy Policy.
        </p>

        <p className="text-lg about-blurb">2. Information We Do Not Collect

        The Extension does not collect, store, or share any personal information from its users. Specifically:
        <ul>
            <li>No Personally Identifiable Information (PII): The Extension does not collect or store names, addresses, email addresses, or any other personal identifiers.</li>
            <li>No Health Information: The Extension does not collect or store any health-related information.</li>
            <li>No Financial Information: The Extension does not collect or store any financial or payment-related information.</li>
            <li>No Authentication Information: The Extension does not collect or store passwords, credentials, security questions, or PINs.</li>
            <li>No Personal Communications: The Extension does not access or store any emails, text messages, or chat messages.</li>
            <li>No Location Data: The Extension does not collect or track your geographic location or IP address.</li>
            <li>No Web History: The Extension does not collect, track, or store your web browsing history.</li>
            <li>No User Activity Monitoring: The Extension does not monitor, log, or track clicks, mouse movements, scrolls, keystrokes, or other user activities.</li>
        </ul>
        </p>

        <p className="text-lg about-blurb">3. Use of Permissions

        The Extension requires certain permissions to function as intended:

        Storage: The Extension uses storage to save user preferences, such as the default target language and API key. This data is stored locally on your device and is not transmitted or shared with any third parties.
        Tabs: The Extension requires access to the current tab to detect and interact with YouTube videos for caption translation purposes. This permission is used solely to provide the core functionality of the Extension and is not used to track or monitor user activity.
        Host Permissions (YouTube): The Extension needs permission to access YouTube pages to detect and translate captions. This permission is used only to interact with the content on YouTube and is not used for any other purpose.</p>
        <p className="text-lg about-blurb">4. No Data Sharing

        The Extension does not share, sell, or transfer any data to third parties. Since no personal data is collected, there is nothing to share.</p>

        <p className="text-lg about-blurb">5. No Use of Remote Code

        The Extension does not use any remote code or external scripts that are not included within the Extension package. All code runs locally on your device and is subject to review by the Chrome Web Store.</p>
        <p className="text-lg about-blurb">6. Changes to This Privacy Policy

        We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page with a new "Effective Date." Your continued use of the Extension after any changes indicates your acceptance of the updated Privacy Policy.</p>

        <p className="text-lg about-blurb">7. Contact Us

        If you have any questions or concerns about this Privacy Policy or the Extension's practices, please contact us at genehan61@gmail.com.</p>
      </div>
    </div>
    <SocialIcons />
  </Layout>
}

