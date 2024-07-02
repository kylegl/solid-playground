import { Router } from '@solidjs/router'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import Nav from './components/Nav'
import { Suspense } from 'solid-js'
import {FileRoutes} from '@solidjs/start/router'

export default function App() {
  return (
    <Router root={props => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
