// return HTML for navigation section
export default function Navbar(page, items){
    return `
    <nav class="navbar">
        <ul>
           ${page==='project'? (
                `<li class="nav-title">
                    <a href="/">CEEO Innovations</a>
                </li>`
           ):(
            `<li>
                <a href="#about">ABOUT</a>
            </li>
            <li>
                <a href="#projects">PROJECTS</a>
            </li>
            `
            )}
        </ul>
    </nav>`
}

