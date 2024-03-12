<template>
  <div class="hero-container">
    <video
      src="/Welcome to Cambridge!.mp4"
      autoplay
      loop
      muted
      class="object-cover w-full h-full fixed z-[-2]"
    ></video>
    <div
      class="hero-content flex flex-col items-center justify-center w-full h-full fixed z-[-1]"
    >
      <h1 class="text-white text-6xl md:text-7xl lg:text-8xl">
        EDUCATION NEVER STOPS
      </h1>
      <p class="text-white text-2xl md:text-3xl lg:text-4xl mt-8">
        What are you waiting for?
      </p>
      <div class="hero-btns mt-32">
        <router-link
          to="/AddCourse"
          class="btn btn--outline btn--large md:btn--medium mr-6"
          >Add Course</router-link
        >
        <router-link
          to="/AddStudent"
          class="btn btn--primary btn--large md:btn--medium"
          >Add Student <i class="far fa-play-circle"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style>
.hero-container {
  position: absolute;
  margin-bottom: 80px;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 0;
}

.btn {
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.btn--primary {
  background-color: #fff;
  color: #242424;
  border: 1px solid #fff;
}

.btn--outline {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.btn--medium {
  padding: 8px 20px;
  font-size: 18px;
}

.btn--large {
  padding: 12px 26px;
  font-size: 20px;
}

.btn--large:hover,
.btn--medium:hover {
  background: #fff;
  color: #242424;
}
</style>
