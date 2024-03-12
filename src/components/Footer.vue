<template>
  <footer class="footer bg-[#41BA82]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://trello.com/b/TTEQnkSE/hungry-link"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src="/public/Untitled design-4.png" alt="Logo" class="h-10" />
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
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm sm:text-center text-gray-900">
        © 2024
        <a
          href="https://trello.com/b/TTEQnkSE/hungry-link"
          class="hover:underline"
        >
          GA UNIVERSITY™
        </a>
        . All Rights Reserved.
      </span>
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
  height: 11%;
  z-index: 1;
  margin-top: 10%;
}
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.logo img {
  height: 2.5rem; /* Adjust as needed */
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
  color: #fff; /* Dark text color for dark background */
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
  color: #757575; /* Gray text color */
  text-decoration: none;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #333; /* Darker text color on hover */
}

.separator {
  width: 100%;
  max-width: 60rem; /* Adjust as needed */
  margin: 0 auto;
  border-top: 1px solid #e0e0e0; /* Light gray border */
}

.copyright {
  display: block;
  font-size: 0.875rem;
  color: #757575; /* Gray text color */
  text-align: center;
}

@media screen and (min-width: 640px) {
  .logo {
    margin-bottom: 0;
  }

  .links {
    margin-bottom: 0;
  }

  .links a {
    margin-right: 2rem;
  }
}
</style>
