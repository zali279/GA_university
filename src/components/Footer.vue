<template>
  <footer class="footer bg-[#41BA82]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://trello.com/b/TTEQnkSE/hungry-link"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src="/Untitled design-4.png" alt="Logo" class="h-10" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 m-0"
          >
            UNIVERSITY™
          </span>
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6"> About </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: auto;
}

.logo img {
  height: 4rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
  color: #fff;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.links a {
  margin-right: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #757575;
  text-decoration: none;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #ff0000;
}
</style>
