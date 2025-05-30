//app\layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { keywords } from './keywords';

import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Kimberly Roussse Informatique",
  description: "Page Web Professionnelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="a2dwUT-uSfgrVAOLllECrDaJtQ5usJRY1Atp1L3B3BQ" />
        <meta name="description" content="Services de soutien informatique personnalisés à Saguenay. Aide informatique pour particuliers et entreprises, formations, assistance technique et développement de solutions numériques." />
        <meta name="keywords" content={keywords} />
      </head>
      <body >
        <Header className="fixedHeader" />
        <div className="main-content-wrapper">
          <main className="main-content">
            {children}
          </main>
        </div>
        <Analytics />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
