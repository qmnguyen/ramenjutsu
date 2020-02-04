import DashLayout from '../../components/abv-rpg/abvrpg-dash'
import Link from 'next/link'

const Index = (props) => (
  <DashLayout>
    <h1>Welcome back, Q!</h1>
    <Link href={{
      pathname: `${process.env.AUTH_URL}`,
      query: {
        client_id: `${process.env.CLIENT_ID}`,
        response_type: "code",
        redirect_url: "https://abvrpg.ramenjutsu.com/abvrpgcallback"
      }
    }}>
      <a className="login-link" target="_blank">Login</a>
    </Link>
    <style jsx>{`
      h1 {
        margin: 40px auto 20px;
        text-align: center;
      }
      .login-link {
        display: inline-block;
        margin-bottom: 40px;
        text-decoration: none;
        text-transform: uppercase;
      }
    `}</style>
  </DashLayout>
)

export default Index
