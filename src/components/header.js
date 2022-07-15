import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Transitions</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2" to="/csstransition">CSSTransition</Link>
              <Link className="p-2" to="/tgroup">Tgroup</Link> - 
              <Link className="p-2 " to="/transition">Transition</Link>
              <Link className="p-2 " to="/other">Other</Link>
              <Link className="p-2 " to="/reducer">Reducer</Link>
            </nav>
          </div>
        </header>
    )
}

export default Header;