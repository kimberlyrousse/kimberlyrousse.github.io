"use client";

import Image from "next/image";

export default function MonApprocheHumainePage() {
  return (
    <>
      <main className="container py-5">
        <section className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h1>Mon Approche Humaine en Informatique : Autonomie et Vulgarisation</h1>
            <p>
              En tant que professionnelle de l'informatique, je crois fermement que la technologie doit être accessible à tous. C'est pourquoi mon approche se centre sur le développement des compétences des utilisateurs et leur autonomie, à travers des explications simples, de la vulgarisation et en suivant le rythme de l'utilisateur, le tout à prix abordables.
            </p>
            <p>
              Cette approche est nourrie par ma passion pour le monde du numérique, le potentiel de l'univers communautaire, mon engagement envers les causes sociales et mon expérience en formation du personnel. Ma maîtrise de divers environnements technologiques et mon intérêt pour la simplification des tâches complexes me permettent d'être une collaboratrice polyvalente, toujours soucieuse de rendre la technologie plus accessible. J'ai également un grand attachement aux progrès des technologies spatiales et informatiques, ce qui influence ma vision de l'avenir de l'humanité.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/images/20230424_115743_2.jpg"
              alt="Photo de profil de Kimberly Rousse"
              width={300}
              height={300}
              className="img-fluid"
              priority={true}
            />
          </div>
        </section>
      </main>
    </>
  );
}