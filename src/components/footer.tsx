export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <p className="text-sm font-roboto text-gray-600">
            Criado por{" "}
            <span className="text-muted-foreground">Alcino Luvualo</span> usando{" "}
            <span className="text-muted-foreground/90">React</span> e{" "}
            <span className="text-muted-foreground/90">TailwindCSS</span>.
          </p>
          <p className="text-xs font-roboto text-gray-600">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
