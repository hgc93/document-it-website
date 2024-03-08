class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <nav
      class="bg-slate-700 text-gray-400 text-center text-lg p-4 font-semibold"
    >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/index.html"
        >HOME</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/projects.html"
        >PROJECTS</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/resume.html"
        >RESUME</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/learning.html"
        >LEARNING</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/blog.html"
        >BLOG</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/contact.html"
        >CONTACT</a
      >
      <a
        class="m-5 hover:text-gray-100 hover:duration-500"
        href="/html/test.html"
        >TEST</a
      >
    </nav>
        `;
  }
}

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer class="text-center text-2xl">
                <a class="text-gray-300 m-2 hover:text-gray-500 duration-300" href="https://www.linkedin.com/in/andy-hwang-b12321199/"><i class="fa-brands fa-linkedin"></i></a>
                <a class="text-gray-300 m-2 hover:text-gray-500 duration-300" href="https://www.instagram.com/hgc_93/"><i class="fa-brands fa-instagram"></i></a>
                <a class="text-gray-300 m-2 hover:text-gray-500 duration-300" href="https://www.facebook.com/hgc93"><i class="fa-brands fa-facebook"></i></a>
            </footer>
        `;
  }
}

customElements.define("custom-navbar", CustomNavbar);
customElements.define("custom-footer", CustomFooter);
