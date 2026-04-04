import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  certificationFilters,
  certifications,
  issuers,
  type Certification,
  type IssuerKey,
} from "@/data/certifications";
import "./CertificationsSection.scss";

const MAX_VISIBLE_SKILLS = 5;
const MOBILE_VISIBLE_CERTS = 3;

export default function CertificationsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | IssuerKey>("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);
    const listener = (event: MediaQueryListEvent) => handleChange(event);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  const filteredCertifications = useMemo(() => {
    if (activeFilter === "all") {
      return certifications;
    }
    return certifications.filter((cert) => cert.issuer === activeFilter);
  }, [activeFilter]);

  const mobilePreviewCerts = useMemo(() => {
    const first = certifications[0];
    const nodeCert = certifications.find(
      (cert) => cert.id === "ibm-node-express-essentials"
    );
    const reactCert = certifications.find(
      (cert) => cert.id === "ibm-react-frontend-v2"
    );

    const picks = [first, nodeCert, reactCert].filter(
      (item): item is Certification => Boolean(item)
    );

    const unique: Certification[] = [];
    for (const cert of picks) {
      if (!unique.some((item) => item.id === cert.id)) {
        unique.push(cert);
      }
    }

    if (unique.length < MOBILE_VISIBLE_CERTS) {
      for (const cert of certifications) {
        if (!unique.some((item) => item.id === cert.id)) {
          unique.push(cert);
        }
        if (unique.length === MOBILE_VISIBLE_CERTS) {
          break;
        }
      }
    }

    return unique.slice(0, MOBILE_VISIBLE_CERTS);
  }, []);

  const visibleCertifications = useMemo(() => {
    if (!isMobile) {
      return filteredCertifications;
    }
    if (activeFilter === "all" && showAllMobile) {
      return filteredCertifications;
    }
    if (activeFilter === "all") {
      return mobilePreviewCerts;
    }
    return filteredCertifications.slice(0, MOBILE_VISIBLE_CERTS);
  }, [activeFilter, filteredCertifications, isMobile, mobilePreviewCerts, showAllMobile]);

  useEffect(() => {
    if (activeFilter !== "all") {
      queueMicrotask(() => setShowAllMobile(false));
    }
  }, [activeFilter]);

  const toggleExpanded = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="certifications" className="certifications-section">
      <ScrollReveal>
        <div className="certifications-container">
        <header className="certifications-header">
          <p className="certifications-kicker">{t("certifications.title")}</p>
          <h2 className="certifications-title">{t("certifications.subtitle")}</h2>
        </header>

        <div className="certifications-filters" role="tablist" aria-label="Filter">
          {certificationFilters.map((filter) => {
            const isActive =
              activeFilter === filter.key &&
              !(isMobile && filter.key === "all" && !showAllMobile);

            const totalCount =
              filter.key === "all"
                ? certifications.length
                : certifications.filter((cert) => cert.issuer === filter.key).length;

            return (
              <button
                key={filter.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-chip ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  if (filter.key === "all" && isMobile) {
                    setShowAllMobile(true);
                  }
                  setActiveFilter(filter.key);
                }}
              >
                {t(filter.labelKey)} ({totalCount})
              </button>
            );
          })}
        </div>

        <div className="certifications-grid">
          {visibleCertifications.map((cert, index) => {
            const isExpanded = Boolean(expandedCards[cert.id]);
            const visibleSkills = isExpanded
              ? cert.skills
              : cert.skills.slice(0, MAX_VISIBLE_SKILLS);
            const remainingSkills = cert.skills.length - MAX_VISIBLE_SKILLS;

            return (
              <article
                key={cert.id}
                className="cert-card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="cert-card__logo">
                  <img
                    src={issuers[cert.issuer].logo}
                    alt={`${issuers[cert.issuer].name} logo`}
                    loading="lazy"
                  />
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__skills">
                  {visibleSkills.map((skill) => (
                    <span key={`${cert.id}-${skill}`} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > MAX_VISIBLE_SKILLS ? (
                    <button
                      type="button"
                      className="skill-chip skill-chip--action"
                      onClick={() => toggleExpanded(cert.id)}
                    >
                      {isExpanded
                        ? t("certifications.showLess")
                        : `+${remainingSkills} ${t("certifications.more")}`}
                    </button>
                  ) : null}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card__link"
                >
                  {t("certifications.viewCredential")}
                </a>
              </article>
            );
          })}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
