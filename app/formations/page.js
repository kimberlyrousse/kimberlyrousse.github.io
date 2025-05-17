// app/page.js
"use client";

export default function FormationsPage() {
    return (
        <>
            <main className="container py-5">
                <section className="row mb-5 align-items-center">
                    <h2>Formations</h2>
                    <ul>
                        <li>
                            <strong>Étudiante au BAC en Travail social</strong> - UQAC
                        </li>
                        <li>
                            <strong>Étudiante au DEC Technique de l’informatique</strong> - CEGEP de Jonquière
                        </li>
                    </ul>
                </section>
                <section className="mb-5">
                    <h2>Compétences Techniques et Comportementales</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Compétences Informatiques</h3>
                            <ul>
                                <li><strong>Systèmes d’exploitation:</strong> Windows, Ubuntu, Raspberry, IOS, Android</li>
                                <li><strong>Environnements:</strong> .Net, Git, VisualStudio/VSCode, Docker</li>
                                <li><strong>Frameworks:</strong> ASP.NET Core, jQuery, jQueryUI, Bootstrap, Entity, React, Next.js</li>
                                <li><strong>Langages de programmation:</strong> C#, C++, Javascript, HTML, CSS, PHP, XML, Python, Xamarin</li>
                                <li><strong>Langages de script:</strong> PowerShell, Bash</li>
                                <li><strong>Serveurs:</strong> VMware, DNS, DHCP, Active Directory, Fichier et Impression (SMB), Web (IIS et NGINX)</li>
                                <li><strong>Objets connectés(loT):</strong> Raspberry PI, capteurs, MQTT</li>
                                <li><strong>Base de données:</strong> PHPMyAdmin, MySQL, XAMP, SQL Server, localstorage, indexedDB</li>
                                <li><strong>Méthodologies:</strong> Modélisation UML, agilité, Scrum, Microsoft Tasks</li>
                                <li><strong>Logiciels:</strong> Microsoft DynamixAX</li>
                                <li><strong>Intelligence Artificielle (IA):</strong> Familiarité avec Gemini, ChatGPT, Copilot</li>
                                <li><strong>Autres:</strong> Postman, LINQ, tests unitaires, Unreal Engine</li>
                                <li><strong>Outils collaboratifs:</strong> Office 365, Teams, Zoom, One Drive, Discord</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3>Compétences Comportementales</h3>
                            <ul>
                                <li>Excellente en gestion, organisation et planification</li>
                                <li>Autonome, autodidacte, adaptation aux changements</li>
                                <li>Respect des protocoles et des normes de confidentialité</li>
                                <li>Empathie</li>
                                <li>Approche interdisciplinaire</li>
                                <li>Habileté en formation, communication et vulgarisation</li>
                            </ul>
                            <h3>Langues</h3>
                            <ul>
                                <li>Français (parlé et écrit)</li>
                                <li>Anglais (parlé et écrit)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}