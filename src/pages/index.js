import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { gradients } from '@/utils/gradients'
import { ReactComponent as ScreencastsImage } from '@/img/screencasts.svg'
import { ReactComponent as GuidesImage } from '@/img/guides.svg'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { ReactComponent as TuiLogo } from '@/img/tailwind-ui-logo-on-dark.svg'
import Link from 'next/link'
import clsx from 'clsx'
import tinytime from 'tinytime'
import { Community } from '@/components/Community'
import styles from './index.module.css'
import { Widont } from '@/components/Widont'
import { ReactComponent as TuiBundleLogo } from '@/img/tailwind-ui-bundle-logo.svg'
import { ReactComponent as RefactoringUiCompleteLogo } from '@/img/refactoring-ui-complete-logo.svg'

const whatsNew = [
  {
    title: 'Focus Ring Utilities',
    version: '2.0+',
    image: require('@/img/docs/focus-ring.svg').ReactComponent,
    href: '/docs/ring-width',
  },
  {
    title: 'Dark Mode',
    version: '2.0+',
    image: require('@/img/docs/dark-mode.svg').ReactComponent,
    href: '/docs/dark-mode',
  },
  {
    title: 'Extended Color Palette',
    version: '2.0+',
    image: require('@/img/docs/color-palette.svg').ReactComponent,
    href: '/docs/customizing-colors#color-palette-reference',
  },
  {
    title: 'Extend Variants',
    version: '2.0+',
    image: require('@/img/docs/extend-variants.svg').ReactComponent,
    href: '/docs/configuring-variants#enabling-extra-variants',
  },
  {
    title: 'Extra Wide Breakpoint',
    version: '2.0+',
    image: require('@/img/docs/breakpoint.svg').ReactComponent,
    href: '/docs/breakpoints',
  },
  {
    title: 'Shareable Presets',
    image: require('@/img/docs/shareable-presets.svg').ReactComponent,
    href: '/docs/presets',
  },
  {
    title: 'Gradients',
    image: require('@/img/docs/gradients.svg').ReactComponent,
    href: '/docs/gradient-color-stops',
  },
  {
    title: 'Animations',
    image: require('@/img/docs/animations.svg').ReactComponent,
    href: '/docs/animation',
  },
]

const latestUpdates = [
  {
    title: 'Tailwind CSS v2.1',
    date: '2021-04-05T19:00:00.000Z',
    url: 'https://blog.tailwindcss.com/tailwindcss-2-1',
    description:
      'We just released Tailwind CSS v2.1 which brings the new JIT engine to core, adds first-class CSS filter support, and more!',
  },
  {
    title: 'Just-In-Time: The Next Generation of Tailwind CSS',
    date: '2021-03-15T16:30:00.000Z',
    url: 'https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css',
    description:
      "One of the hardest constraints we've had to deal with as we've improved Tailwind CSS over the years is the generated file size in development. With enough customizations to your config file, the generated CSS can reach 10mb or more, and there's only so much CSS that build tools and even the browser itself will comfortably tolerate.",
  },
  {
    title: 'Welcoming James McDonald to Tailwind Labs',
    date: '2021-03-08T19:00:00.0Z',
    url: 'https://blog.tailwindcss.com/welcoming-james-mcdonald-to-tailwind-labs',
    description: `Many years ago I got a message from Steve that said something like "Have I ever shared this guy's Dribbble profile with you before? Been following him forever, some of my absolute favorite work I've ever found." That person was James McDonald, and today we're totally over the moon to share that James is joining our team full-time.`,
  },
  {
    title: '"Tailwind CSS: From Zero to Production" on YouTube',
    date: '2021-02-16T16:05:00.000Z',
    url: 'https://blog.tailwindcss.com/tailwindcss-from-zero-to-production',
    description:
      "Today we're excited to release Tailwind CSS: From Zero to Production, a new screencast series that teaches you everything you need to know to get up and running with Tailwind CSS v2.0 from scratch.",
  },
  {
    title: 'Welcoming David Luhr to Tailwind Labs',
    date: '2021-02-01T13:35:00.0Z',
    url: 'https://blog.tailwindcss.com/welcoming-david-luhr-to-tailwind-labs',
    description:
      "We started working with David Luhr last summer on a project-by-project basis to help us develop a Figma version of Tailwind UI (almost ready!), as well as to leverage his accessibility expertise when building Tailwind UI templates, ensuring we were following best practices and delivering markup that would work for everyone, no matter what tools they use to browse the web. Today we're excited to share that David has joined the team full-time!",
  },
  {
    title: 'Multi-line truncation with @tailwindcss/line-clamp',
    date: '2021-01-24T20:00:00Z',
    url: 'https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp',
    description:
      "Imagine you're implementing a beautiful design you or someone on your team carefully crafted in Figma. You've nailed all the different layouts at each breakpoint, perfected the whitespace and typography, and the photography you're using is really bringing the design to life.",
  },
  {
    title: 'Tailwind CSS v2.0',
    date: '2020-11-18T17:45:00.000Z',
    url: 'https://blog.tailwindcss.com/tailwindcss-v2',
    description:
      "Today we're finally releasing Tailwind CSS v2.0, including an all-new color palette, dark mode support, and tons more!",
  },
]

const formatDate = tinytime('{MM} {DD}, {YYYY}').render

export default function DocsLandingPage() {
  return (
    <div className="px-4 pt-10 pb-16 font-mono sm:px-6 xl:px-8">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
        Treetop Learning Documentation 
      </h1>
      <p className="mb-10 text-2xl tracking-tight">
        Learn to code at your own pace
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8">
        <section className="flex">
          <div className="relative flex w-full overflow-hidden text-white shadow-lg rounded-3xl">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.violet[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-shadow">Read the docs</h2>
                <p className="mb-4 font-medium text-violet-100 text-shadow">
                  Learn how to get Tailwind set up in your project.
                </p>
                <Link href="/docs/installation">
                  <a className="inline-flex px-4 py-2 mt-auto font-semibold transition-colors duration-200 bg-opacity-50 bg-violet-800 hover:bg-opacity-75 rounded-xl">
                    Start learning
                  </a>
                </Link>
              </div>
              <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                <GuidesImage className="absolute overflow-visible top-6 left-6 md:static" />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 hidden h-20 sm:block"
              style={{
                background: 'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))',
              }}
            />
          </div>
        </section>
        <section className="flex">
          <div className="relative flex w-full overflow-hidden text-white shadow-lg rounded-3xl">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.pink[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-shadow">Try it in the browser</h2>
                <p className="mb-4 font-medium text-rose-100 text-shadow">
                  Build something with Tailwind in our online playground.
                </p>
                <a
                  href="https://play.tailwindcss.com/"
                  className="inline-flex px-4 py-2 mt-auto font-semibold transition-colors duration-200 bg-opacity-50 bg-rose-900 hover:bg-opacity-75 rounded-xl"
                >
                  Start building
                </a>
              </div>
              <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                <PlayImage className="absolute overflow-visible top-6 left-6 md:static" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 hidden h-20 bg-gradient-to-t from-rose-500 sm:block" />
          </div>
        </section>
        <section className="flex">
          <div className="relative flex w-full overflow-hidden text-white shadow-lg rounded-3xl">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.amber[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-shadow">Watch the screencasts</h2>
                <p className="mb-4 font-medium text-amber-100 text-shadow">
                  Learn more about Tailwind directly from the team on our channel.
                </p>
                <Link href="https://www.youtube.com/tailwindlabs">
                  <a className="inline-flex px-4 py-2 mt-auto font-semibold transition-colors duration-200 bg-opacity-50 bg-amber-900 hover:bg-opacity-75 rounded-xl">
                    Start watching
                  </a>
                </Link>
              </div>
              <div className={`${styles.image} relative hidden sm:block`}>
                <div className="absolute left-2 bottom-3 xl:bottom-5">
                  <ScreencastsImage className="overflow-visible" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 hidden h-20 bg-gradient-to-t from-orange-500 sm:block" />
          </div>
        </section>
      </div>
      <section>
        <h2 className="mt-16 mb-8 text-3xl font-extrabold tracking-tight text-gray-900">
          What’s new in Tailwind
        </h2>
        <ul className="grid grid-cols-2 gap-4 font-semibold text-center text-gray-900 sm:grid-cols-3 xl:grid-cols-4 sm:gap-6 xl:gap-8">
          {whatsNew.map((item) => (
            <li key={item.title} className="flex">
              <Link href={item.href}>
                <a className="relative w-full px-6 pt-8 pb-6 shadow-sm rounded-xl ring-1 ring-black ring-opacity-5">
                  {item.image && <item.image className="h-auto max-w-full mx-auto mb-3" />}
                  {item.title}
                  {item.version && (
                    <span className="absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2">
                      {item.version}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <header className="flex items-center justify-between mt-16 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Latest Updates</h2>
          <a href="https://blog.tailwindcss.com" className="font-medium text-gray-900">
            View all the latest updates
          </a>
        </header>
        <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
          {latestUpdates.map((item, i) => (
            <li key={item.title}>
              <article>
                <a
                  href={item.url}
                  className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6 hover:bg-white"
                >
                  <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
                    {item.title}
                  </h3>
                  <time
                    dateTime={item.date}
                    className="flex items-center row-start-1 mb-1 font-medium md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className={clsx('w-3 h-3 mr-6 overflow-visible', {
                        'text-gray-300': i !== 0,
                        'text-cyan-400': i === 0,
                      })}
                    >
                      <circle cx="6" cy="6" r="6" fill="currentColor" />
                      {i === 0 && (
                        <circle
                          cx="6"
                          cy="6"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      )}
                      {i !== 0 && (
                        <path
                          d="M 6 -6 V -30"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                      {i !== latestUpdates.length - 1 && (
                        <path
                          d="M 6 18 V 500"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                    </svg>
                    {formatDate(new Date(item.date))}
                  </time>
                  <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                    {item.description}
                  </p>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mt-16 mb-8 text-3xl font-extrabold tracking-tight text-gray-900">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation',
  },
  Layout: DocumentationLayout,
}
