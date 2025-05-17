// app/page.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperiencePage() {
    return (
        <>
            <main className="container py-5">
                <section className="row mb-5 align-items-center">
                    <h2>Expérience Professionnelle</h2>
                    <ul>
                        <li>
                            <strong>Ateliers d’initiation à l’informatique auprès des clientèles vulnérables axés sur l’autonomie</strong> - Différents organismes communautaires du Saguenay
                            <ul>
                                <li>Accessible à tous et pour tous les appareils</li>
                                <li>Explications sur l’identité numérique et la connectivité des grands comptes (Microsoft, Apple, Google)</li>
                                <li>Gestion des mots de passe et utilisation sécuritaire des outils numériques (courriel, navigateur, réseaux sociaux, services bancaires en ligne, Interac, paiement numérique)</li>
                                <li>Stockage local et utilisation des technologies infonuagiques gratuites, paramétrage des appareils</li>
                                <li>Bases pour une recherche efficace et obtention d’aide autonome</li>
                                <li>Sensibilisation interdisciplinaire</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Analyse organisationnelle</strong> - Différents organismes communautaires du Saguenay
                            <ul>
                                <li>Conseil pour intégrer des solutions informatiques aux opérations des organismes</li>
                                <li>Présence et utilisation des réseaux sociaux</li>
                                <li>Soutien informatique et installation de postes informatiques – destruction des données confidentielles</li>
                                <li>Support Web</li>
                                <li>Sensibilisation interdisciplinaire</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Soutien informatique à l’individuel</strong>- À domicile
                            <ul>
                                <li>Résolution des problèmes courants de l’usager</li>
                                <li>Conseil et aide à l’achat de nouveaux appareils</li>
                                <li>Écoute, soutien et référencement</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}