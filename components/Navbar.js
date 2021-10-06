// return HTML for navigation section
export default function Navbar(page, items){
    return `
    <nav class="navbar">
        <div class="nav-wrapper">
        <ul>
           ${page==='project'? (
            `
            <li class="nav-title">
                <a href="/">
                    <img src="assets/global/CI-logo-left.png" class="nav-logo">
                </a>
            </li>
            <li>
                <a href="/#about">About</a>
            </li>
            <li>
                <a href="/#projects">Projects</a>
            </li>
            `
           ):(
            `
            <li class="nav-title">
                <img src="assets/global/CI-logo-left.png" class="nav-logo">
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            `
            )}
        </ul>
        </div>
    </nav>`
}

