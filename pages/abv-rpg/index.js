import DashLayout from '../../components/abv-rpg/abvrpg-dash'
import Link from 'next/link'

const Index = () => (
  <DashLayout>
    <h1>Welcome back, Q!</h1>
    <Link href="/abv-rpg/detail">
      <a>Detail</a>
    </Link>
  </DashLayout>
)

export default Index
