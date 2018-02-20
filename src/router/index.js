import Hello from '@/components/Hello'
import AccountsList from '@/components/Accounts/List'
import AccountsShow from '@/components/Accounts/Show'
import AccountsCreate from '@/components/Accounts/Create'
import AccountsEdit from '@/components/Accounts/Edit'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/contas',
    component: AccountsList
  },
  {
    path: '/contas/cadastrar',
    component: AccountsCreate
  },
  {
    path: '/contas/:id',
    component: AccountsShow
  },
  {
    path: '/contas/:id/editar',
    component: AccountsEdit
  }
]

export default routes
