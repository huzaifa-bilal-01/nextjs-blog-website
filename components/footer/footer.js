import classes from './footer.module.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer () {
    return(
        <section className={classes.footer}>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100093702731832">
                    <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/huzaifa-bilal-0a3481231">
                    <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/itx_me_huz/">
                    <FaInstagram />
                    </a>
                    <a href="https://github.com/huzaifa-bilal-01">
                    <FaGithub />
                    </a>
                </div>
                <div>
                    <p>© 2023 Aifu Blog. All rights reserved.</p>
                </div>
        </section>
    );
}

export default Footer;