import React, { useEffect, useRef, useState } from "react";
import "./support.css";

function CreateTicket() {
  const [openIndex, setOpenIndex] = useState(null);
  // refs for each content body
  const bodyRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // update bodyRefs length to match sections length on each render
  const setBodyRef = (el, idx) => {
    bodyRefs.current[idx] = el;
  };

  // Recalculate heights on window resize so open panel remains correct
  useEffect(() => {
    const onResize = () => {
      // force reflow by updating a state — but simpler: update inline styles now
      if (openIndex !== null && bodyRefs.current[openIndex]) {
        const el = bodyRefs.current[openIndex];
        el.style.maxHeight = `${el.scrollHeight}px`;
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex]);

  const sections = [
    {
      title: "Account Opening",
      icon: "fa-plus",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-compass",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-money-bill-wave",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-briefcase",
      links: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
    },
    {
      title: "Coin",
      icon: "fa-circle",
      links: ["Mutual funds", "National Pension Scheme (NPS)", "Features on Coin", "Payments and Orders", "General"],
    },
  ];

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* LEFT ACCORDION */}
        <div className="col-md-8">
          {sections.map((item, index) => {
            const isOpen = openIndex === index;

            // compute inline style for content: maxHeight and padding animate smoothly
            const contentStyle = {};
            if (isOpen && bodyRefs.current[index]) {
              contentStyle.maxHeight = `${bodyRefs.current[index].scrollHeight}px`;
              contentStyle.paddingTop = "18px";
              contentStyle.paddingBottom = "22px";
            } else {
              contentStyle.maxHeight = "0px";
              contentStyle.paddingTop = "0px";
              contentStyle.paddingBottom = "0px";
            }

            return (
              <div className="support-accordion mb-3" key={index}>
                <div
                  role="button"
                  aria-expanded={isOpen}
                  className={`support-accordion-header d-flex align-items-center ${isOpen ? "open" : ""}`}
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleAccordion(index);
                  }}
                  tabIndex={0}
                >
                  <div className="icon-box d-flex align-items-center justify-content-center me-3">
                    <i className={`fa ${item.icon}`}></i>
                  </div>

                  <div className="accordion-title">{item.title}</div>

                  <div className="ms-auto">
                    <i className={`fa fa-chevron-down arrow ${isOpen ? "rotate" : ""}`}></i>
                  </div>
                </div>

                {/* Body */}
                <div
                  className={`support-accordion-body ${isOpen ? "show" : ""}`}
                  style={contentStyle}
                  ref={(el) => setBodyRef(el, index)}
                >
                  <ul className="support-list">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE PANELS */}
        <div className="col-md-4">
          <div className="right-orange-box mb-3">
            <ul className="right-news">
              <li>
                <a href="#">Offer for sale (OFS) – December 2025</a>
              </li>
              <li>
                <a href="#">Surveillance measure on scrips – December 2025</a>
              </li>
            </ul>
          </div>

          <div className="right-quick-links">
            <div className="quick-links-header">Quick links</div>
            <ul className="list-group">
              <li className="list-group-item">1. Track account opening</li>
              <li className="list-group-item">2. Track segment activation</li>
              <li className="list-group-item">3. Intraday margins</li>
              <li className="list-group-item">4. Kite user manual</li>
              <li className="list-group-item">5. Learn how to create a ticket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;