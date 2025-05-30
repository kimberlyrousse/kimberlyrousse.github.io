// app/page.js
"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <main className="container py-5">
                <section className="row mb-5 align-items-center">
                    <div className="col-md-12">
                        <h1>Kimberly Rousse</h1>

                        <p className="mt-2">Disponible partout au Saguenay</p>

                        <p className="mt-2">Cellulaire: <Link href="tel:4182904010">418-290-4010</Link></p>

                        <p className="mt-2">Email: <Link href="mailto:kimberly.rousse@hotmail.com">kimberly.rousse@hotmail.com</Link></p>

                        <p className="mt-3">
                            LinkedIn: <Link href="https://www.linkedin.com/in/kimberly-rousse" target="_blank" rel="noopener noreferrer">Kimberly Rousse</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}