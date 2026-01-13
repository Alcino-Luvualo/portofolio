import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <p className="text-sm font-roboto text-gray-600">
            {t("footer.madeby")}{" "}
            <span className="text-muted-foreground">Alcino Luvualo</span> {t('footer.using')}{" "}
            <span className="text-muted-foreground/90">React</span> {t('footer.and')}{" "}
            <span className="text-muted-foreground/90">TailwindCSS</span>.
          </p>
          <p className="text-xs font-roboto text-gray-600">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

