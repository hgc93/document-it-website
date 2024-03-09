class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="text-center my-4">
      <a href="/html/index.html"
        ><img
          class="inline left-35"
          src="../img/icons/logo1.png"
          width="100px"
          alt=""
      /></a>
      <nav class="inline text-gray-400 text-lg my-5">
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/index.html"
          >home</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/projects.html"
          >projects</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/resume.html"
          >resume</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/learning.html"
          >learning</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/blog.html"
          >blog</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/contact.html"
          >contact</a
        >
        <a
          class="m-5 hover:text-gray-300 hover:duration-500"
          href="/html/test.html"
          >test</a
        >
      </nav>
    </div>
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
