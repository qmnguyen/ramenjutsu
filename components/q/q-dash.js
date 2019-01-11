import Head from 'next/head'
import Link from 'next/link'

const DashLayout = () => (
  <div>
    <h1>Welcome back, Q!</h1>
    <Link href="/q/main-base">
      <a>Main base</a>
    </Link>
  </div>
)

export default DashLayout
