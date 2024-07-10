import { A } from '@solidjs/router'
import Counter from '~/components/Counter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

export default function Home() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl text-sky-700 font-thin uppercase">
        <div class="flex items-center justify-center">
          <span class="mr-5">Hello</span>

          {' '}

          <img class="h-12 w-12" src="https://unocss.dev/logo.svg" alt="UnoCSS logo" />
          !
        </div>
      </h1>

      <Counter />

      <p class="mt-8">
        Visit
        {' '}

        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>

        {' '}
        to learn how to build Solid apps.
      </p>

      <p class="mt-2">
        Visit
        {' '}

        <a
          href="https://unocss.dev"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          unocss.dev
        </a>

        {' '}
        to learn how to style your app.
      </p>

      <p class="my-4">
        <span>Home</span>

        {' - '}

        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>

        {' '}
      </p>

      <Accordion collapsible class="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>

          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>

          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>

          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}
