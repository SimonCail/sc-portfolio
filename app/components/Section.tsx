// Gabarit commun : le titre de section tient dans une colonne a gauche et
// reste colle en haut pendant qu'on fait defiler le contenu, jusqu'a ce que
// la section suivante le pousse et prenne le relais. Un filet en haut separe
// les sections.
export default function Section({
  id,
  title,
  intro,
  children
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-page px-5 sm:px-8">
      <div className="grid gap-8 border-t border-rule py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-4 xl:col-span-3">
          <div className="lg:sticky lg:top-24">
            <h2
              id={`${id}-title`}
              className="text-[2.6rem] font-semibold leading-[1] tracking-[-0.025em] text-default sm:text-5xl lg:text-[2.4rem]"
            >
              {title}
            </h2>
            <span aria-hidden className="mt-4 block h-1 w-10 rounded-full bg-[var(--accent)]" />
            {intro && <p className="mt-4 max-w-sm text-base text-muted">{intro}</p>}
          </div>
        </header>
        <div className="min-w-0 lg:col-span-8 xl:col-span-9">{children}</div>
      </div>
    </section>
  );
}