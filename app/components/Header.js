//app\components\Header.js
'use client';

export default function Header() {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixedHeader">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Kimberly Rousse Informatique</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="formations">Formations et Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="experience">Expérience Professionnelle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contactez-moi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
