import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

export default function App() {
  return (
    <Router
      root={props => (
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
