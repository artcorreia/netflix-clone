const FOOTER_LINKS = [
  'Perguntas frequentes', 'Centro de ajuda', 'Conta', 'Imprensa',
  'Relações com investidores', 'Carreiras', 'Formas de assistir',
  'Termos de uso', 'Privacidade', 'Preferências de cookies',
  'Informações corporativas', 'Entre em contato',
  'Teste de velocidade', 'Avisos legais', 'Só na Netflix',
]

export function Footer() {
  return (
    <footer className="px-[4%] text-[#737373] text-[13px] mb-5">
      <div className="max-w-[980px] mx-auto">
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noreferrer"
          className="text-[#737373] hover:underline"
        >
          <p className="mb-8">Imersão Alura AI</p>
        </a>
        <ul className="list-none grid grid-cols-4 gap-4">
          {FOOTER_LINKS.map((link) => (
            <li key={link}>
              <a
                href="https://www.alura.com.br/"
                target="_blank"
                rel="noreferrer"
                className="text-[#737373] hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}