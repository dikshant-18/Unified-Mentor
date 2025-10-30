const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dikshant Shubhankar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
