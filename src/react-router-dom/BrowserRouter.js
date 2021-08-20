import { createBrowserHistory } from 'history'
import { Router } from '../react-router'

const history = createBrowserHistory()

function BrowserRouter({children}){
   return (
    <Router history={history}>{children}</Router>
   ) 
}

export default BrowserRouter