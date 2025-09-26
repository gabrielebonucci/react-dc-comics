import logo from '../assets/img/dc-logo.png'


export default function Header() { 
    const navLinks = [
    { text: 'Characters', url: '#'},
    { text: 'Comics', url: '#'},
    { text: 'Movies', url: '#'},
    { text: 'TV', url: '#' },
    { text: 'Games', url: '#'},
    { text: 'Collectibles', url: '#'},
    { text: 'Videos', url: '#' },
    { text: 'Fans', url: '#'},
    { text: 'News', url: '#'},
    { text: 'Shop', url: '#'},
  ];

    return (
    <header>
        <div className='container'>
           <div className='logo-container'>
             <img src={logo} alt="Logo DC" />
           </div> 
           <nav>
                <ul>
                   {navLinks.map((link, index) => (
                    <li key={index}>
                    <a href={link.url}>
                        {link.text.toUpperCase()}
                    </a>
                    </li>
                   ))}
                </ul>
            </nav>
        </div>
                    
    </header>
    );}
