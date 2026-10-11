"use client";

import Image from "next/image";
import Section from "./Section";
import { useI18n } from "./I18nProvider";
import { CV_URL } from "../site";

export default function Experience() {
  const { t } = useI18n();
  const jobs = [
    { ...t.experience.pulp, logo: "/pulp-immobilier-logo.png" },
    { ...t.experience.grow, logo: "/grow-your-business-logo.png" }
  ];

  return (
    <Section id="experiences" title={t.experience.title} intro={t.experience.intro}>
      <ol className="space-y-14">
        {jobs.map((job) => (
          <li key={job.company} className="grid gap-5 md:grid-cols-12 md:gap-8">
            <div className="flex items-start gap-4 md:col-span-4 md:flex-col md:gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-rule bg-white">
                <Image src={job.logo} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-default">{job.company}</h3>
                <p className="text-muted">{job.role}</p>
                <p className="mt-1 text-sm text-muted">{job.period}</p>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="max-w-[38em] text-lg text-default">{job.description}</p>
              <ul className="mt-5 space-y-2.5">
                {job.achievements.map((a) => (
                  <li key={a} className="relative max-w-[40em] pl-5 text-muted">
                    <span aria-hidden className="absolute left-0 top-[0.72em] h-px w-2.5 bg-[var(--text-muted)]" />
                    {a}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                {job.stack.split(", ").map((tech) => (
                  <li key={tech} className="rounded-full border border-rule px-2.5 py-0.5 text-sm text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-5 border-t border-rule pt-8 md:grid-cols-12 md:gap-8">
        <h3 className="text-lg font-bold text-default md:col-span-4">{t.experience.sideJobs.title}</h3>
        <ul className="space-y-3 md:col-span-7 md:col-start-6">
          {t.experience.sideJobs.items.map((job) => (
            <li key={job.label} className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
              <span className="text-default">{job.label}</span>
              <span className="text-sm text-muted sm:text-base">{job.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10">
        <a href={CV_URL} download className="link font-medium">
          {t.experience.cvLink}
        </a>
      </p>
    </Section>
  );
}