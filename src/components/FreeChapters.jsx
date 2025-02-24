import { Button } from '../components/primer-components/Button'
import { Container } from '../components/primer-components/Container'
import { Pattern } from '../components/primer-components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        {/* <Container
          size="md"
          className="relative grid blue zinc grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        > */}
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-zinc-800 sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get free sample jokes
            </h2>
            <p className="mt-4 text-lg tracking-tight text-zinc-500">
              Enter your email address and I’ll send you a sample from the joke package
              containing 5 of my favorite jokes.
            </p>
          </div>
          <form className="">
            <h3 className="text-base font-medium tracking-tight text-zinc-700">
              Get 5 free jokes straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full px-4 py-2 text-base text-zinc-700 placeholder:text-zinc/70 focus:outline-hidden sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-zinc/20 peer-focus:ring-1  sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free jokes
              </Button>
            </div>
          </form>
        {/* </Container> */}
      </div>
    </section>
  )
}
