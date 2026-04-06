import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Hello, {user?.name || 'there'}.</h1>
        <p className="mt-2 text-slate-600">Manage your profile, browse schools, and track applications.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <h2 className="text-xl font-semibold">Browse schools</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Search all available schools and view their details.</p>
          <Link to="/schools" className="mt-5 inline-block"><Button>Open schools</Button></Link>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Applications</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Track every admission request in one location.</p>
          <Link to="/applications" className="mt-5 inline-block"><Button variant="secondary">View applications</Button></Link>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Keep your information updated for better workflows.</p>
          <Link to={user?.role === 'school' ? '/school/profile' : '/student/profile'} className="mt-5 inline-block">
            <Button variant="secondary">Manage profile</Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
