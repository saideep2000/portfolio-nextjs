// app/layout.tsx
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaUser, FaBriefcase, FaCode, FaUserGraduate } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Saideep Samineni",
  description: "Portfolio page of Saideep Samineni",
};

const navItems = [
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaCode /> },
  { name: "Work", link: "#work", icon: <FaBriefcase /> },
  { name: "Education", link: "#education", icon: <FaUserGraduate /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Saideep's Portfolio" />
        <meta
          property="og:description"
          content="Machine Learning Engineer with 3+ years of experience in the FinTech industry. Skilled in implementing AI-based microservices using Python, SQL, Javascript, Docker, and AWS."
        />
        <meta property="og:type" content="website" />

        {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2NWSJR474"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L2NWSJR474', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
          <ScriptForSectionTiming />
        </ThemeProvider>
      </body>
    </html>
  );
}

// Section timing tracking script
function ScriptForSectionTiming() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          const sections = ['about', 'projects', 'work', 'education'];
          const sectionTimers = {};
          let currentSection = null;
          let sectionStartTime = Date.now();

          function getCurrentVisibleSection() {
            for (const id of sections) {
              const el = document.getElementById(id);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                  return id;
                }
              }
            }
            return null;
          }

          function trackTime() {
            const visible = getCurrentVisibleSection();
            const now = Date.now();
            if (visible !== currentSection) {
              if (currentSection) {
                const timeSpent = (now - sectionStartTime) / 1000;
                gtag('event', 'section_view', {
                  section: currentSection,
                  time_spent_seconds: timeSpent,
                });
              }
              currentSection = visible;
              sectionStartTime = now;
            }
          }

          window.addEventListener('scroll', () => {
            trackTime();
          });

          window.addEventListener('beforeunload', () => {
            const now = Date.now();
            if (currentSection) {
              const timeSpent = (now - sectionStartTime) / 1000;
              gtag('event', 'section_view', {
                section: currentSection,
                time_spent_seconds: timeSpent,
              });
            }
          });
        `,
      }}
    />
  );
}
