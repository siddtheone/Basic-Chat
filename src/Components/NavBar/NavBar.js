import React from "react";

import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';
// import {SOCKET} from '../../constants';
class NavBar extends React.Component {
  componentDidMount() {
    this.props.getConnect();
  }

  render() {
    const {
      location: {pathname}
    } = this.props;
    return (
      <nav className={styles.navbar}>
        <Link to="/"><div className={`${styles.navItems} ${pathname === '/' ? styles.navActive : ''}`}>Chat</div></Link>
        <Link to="/settings"><div className={`${styles.navItems} ${pathname === '/settings' ? styles.navActive : ''}`}>Settings</div></Link>
      </nav>
    );
  }
}

// function NavBar({
//   getConnect,
//   isLight,
// }) {
//   // const [isVisible, setVisible] = useState(true);

//   // function onFocus() {
//   //   setVisible(true);
//   //   console.log('f');
//   // }

//   // function onBlur() {
//   //   setVisible(false);
//   //   console.log('b');
//   // }

//   useEffect(() => {
//     getConnect();
//     // window.addEventListener('focus', onFocus);
//     // window.addEventListener('blur', onBlur);
//     // // Specify how to clean up after this effect:
//     // return () => {
//     //   window.removeEventListener('focus', onFocus);
//     //   window.removeEventListener('blur', onBlur);
//     // };
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       <Link to="/">
//         <div className={styles.navItems}>Chat</div>
//       </Link>
//       <Link to="/settings"><div className={styles.navItems}>Settings</div></Link>
//     </nav>
//   );
// }

export default NavBar;
