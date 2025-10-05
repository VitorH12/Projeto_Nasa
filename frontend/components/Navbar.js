'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Para detectar página atual

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        backgroundColor: '#0f172a', // azul bem escuro
        padding: '1rem 2rem',
        borderBottom: '1px solid #334155',
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Logo/Home Link */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link
          href="/"
          style={{
            color: '#facc15', // amarelo solar
            textDecoration: 'none',
          }}
        >
          ☀️ Ocllo Space
        </Link>
      </div>

      {/* Botão para Menu Hamburger em telas pequenas */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid #e2e8f0',
          color: '#e2e8f0',
          borderRadius: '6px',
          padding: '0.5rem 0.7rem',
          cursor: 'pointer',
          fontSize: '1.2rem',
        }}
        className="hamburger-button"
      >
        ☰
      </button>

      {/* Links da Navegação */}
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          gap: '1rem',
        }}
        className="nav-links"
      >
        {[
          { href: '/historias', label: 'The story of the Sun' },
          { href: '/impactos', label: 'Impacts of Space Weather on Earth' },
          { href: '/quiz', label: 'Interactive Quiz' },
          { href: '/laboratorio', label: 'Space Lab' },     // Novo link para o Space Lab
          { href: '/tour-solar', label: 'Solar System Tour' }, // Novo link para o Solar System Tour
          { href: '/glossary', label: 'Glossary' }, // Novo link para o Glossário
          { href: '/about', label: 'About' },       // Novo link para o About
          
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                backgroundColor:
                  pathname === href ? '#f59e0b' : '#1e293b', // ativo = laranja
                color: pathname === href ? '#fff' : '#e2e8f0',
                textDecoration: 'none',
                padding: '0.6rem 1.3rem',
                borderRadius: '9999px', // formato pílula
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-block',
                boxShadow:
                  pathname === href
                    ? '0 4px 12px rgba(245, 158, 11, 0.6)'
                    : '0 2px 6px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease-in-out',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Estilos JSX para responsividade */}
      <style jsx>{`
        .nav-links li a:hover {
          background-color: #334155;
          color: #facc15;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            width: 100%;
            text-align: center;
            margin-top: 1rem;
          }
          .hamburger-button {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}