import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-soft lg:grid-cols-[1.3fr_1fr] lg:p-10">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            Search schools and manage registration
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            One modern portal for schools and students.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Schools create profiles and manage applications. Students search schools, compare details, and submit registrations in a few clicks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/signup"><Button>Get started</Button></Link>
            <Link to="/schools"><Button variant="secondary">Browse schools</Button></Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-sm text-slate-500">For schools</p>
            <h3 className="mt-2 text-xl font-semibold">Create and manage your institution profile</h3>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">For students</p>
            <h3 className="mt-2 text-xl font-semibold">Find schools and apply with a clean workflow</h3>
          </Card>
          <Card className="sm:col-span-2">
            <p className="text-sm text-slate-500">Admissions workflow</p>
            <h3 className="mt-2 text-xl font-semibold">Track pending, approved, and rejected applications in one place</h3>
          </Card>
        </div>
      </section>
    </div>
  )
}
