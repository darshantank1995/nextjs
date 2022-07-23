import React from 'react';
import Link from 'next/link'

const NavBar = () => {
    return (
            <div>
                <nav>
                    <ul>
                        {/* <li><Link href="/" passHref><a>Home</a></Link></li>
                        <li><Link href="/about" passHref><a>About</a></Link></li>
                        <li><Link href="/contact" passHref><a>contact</a></Link></li>
                        <li><Link href="/blog" passHref><a>blog</a></Link></li> */}

                        <li><Link href="/" ><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                        <li><Link href="/blog"><a>Blog</a></Link></li>

                    </ul>
                </nav>  
            </div>
    );
}

export default NavBar;
