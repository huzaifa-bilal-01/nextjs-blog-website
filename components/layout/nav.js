import Link from 'next/link';
import classes from './nav.module.css';
import Logo from './logo';

function nav() {
    return (
        <header className={classes.header}>
            <Link href="/"><Logo /></Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default nav;