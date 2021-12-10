
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navBar">
        <div 
        style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
        }}>
            <div><a className="active" href="#home">Home</a></div>
            <div><a href="https://www.linkedin.com/in/salvador-ayon-186794156/">linkedin</a></div>
            <div><a href="ayonsa60@gmailcom">Email</a></div>
            <div><a href="https://github.com/ayonsa60">GitHub</a></div>
            <div><a href="https://docs.google.com/document/d/1uG8aluT-Yl_YjBlk76dwv5fw6Pi0HQwiRsEvxnbWg2Q/edit?usp=sharing">Resume</a></div>
        </div>
        </nav>
    )

}