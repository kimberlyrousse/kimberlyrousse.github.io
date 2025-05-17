// app/page.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="container py-5">
        <section className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h1>Kimberly Rousse</h1>
            <p className="lead">
              Professionnelle en informatique, passionnée par le monde du numérique et le potentiel de l'univers communautaire.
            </p>
            <p>
              Mon engagement envers les causes sociales, mon expérience dans la formation, enrichie par ma maîtrise de divers environnements technologiques ainsi que mon intérêt pour la simplification  des tâches complexes, font de moi une collaboratrice polyvalente. J'ai un grand attachement aux progrès des technologies spatiales et informatiques.
            </p>
          </div>
          <div className="col-md-6">
            <Image src="/images/20230424_115743_2.jpg" alt="Kimberly Rousse Profil picture" width={300} height={300} className="img-fluid" priority={true}/>
          </div>
        </section>
      </main>
    </>
  );
}