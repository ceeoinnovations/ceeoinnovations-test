export default function About(about){
    return `
    <section id="about" class="intro">
            <div class="text-wrapper">
                <div class="intro-content">
                    <br>
                    <br>
                    <br>
                    <img src="assets/global/CI-logo-center.png" div class="logo">
                </div>
                <p class="intro-p">${about[0].description}</p>
                <br>
            </div>
    </section>`
}