//app\layout.js
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

export const metadata = {
  title: "Kimberly Roussse Informatique",
  description: "Page Web Professionnelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >
        <Header className="fixedHeader" />
        <div className="main-content-wrapper">
          <main className="main-content">
            {children}
          </main>
        </div>
//        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
