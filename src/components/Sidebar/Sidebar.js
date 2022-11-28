import styles from './Sidebar.module.scss';

function Sidebar() {
    return ( 
        <div className={styles.sidebar}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">temp</a></li>
            </ul>
        </div>
     );
}


export default Sidebar;