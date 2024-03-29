import { Accordion } from 'flowbite-react'

export const AboutPage = () => {
  return (
    <div className="bg-white p-10 h-full">
      <h2 className="text-2xl my-10">Acerca de Nosotros</h2>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is FlamaKeys?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              FlamaKeys is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="https://FlamaKeys.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              FlamaKeys is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{' '}
              <a
                href="https://FlamaKeys.com/figma/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Figma design system
              </a>{' '}
              based on the utility classes from Tailwind CSS and components from
              FlamaKeys.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between FlamaKeys and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from FlamaKeys are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that FlamaKeys relies on smaller
              and standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both FlamaKeys, FlamaKeys
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://FlamaKeys.com/pro/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  FlamaKeys Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
