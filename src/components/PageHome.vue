<template>
  <div>
    <h1>Front-end Developer</h1>

    <img src="../assets/web-design.svg" alt="Web design" class="main-img" />

    <section class="about-me">
      <div>
        <h2>Hi, I’m Luis. Nice to meet you.</h2>
        <p>
          I'm beginning my journey as a Web Developer. I've graduated in Math
          and recently done some bootcamps, as well as Harvard's CS50 courses,
          and I'm taking all VueSchool courses. I'm working on a personal
          project where I'm developing a kind of a social media to eternalize my
          grandmother. I'm also working on some exercises, you'll find some of
          them below. I'm keen to solving problems, quietly confident, and
          constantly working on improving my skills one design problem at a
          time.
        </p>
        <div class="spacer"></div>
      </div>
    </section>

    <section class="skills">
      <div class="skills-div">
        <h2>Skills | Languages | Tools</h2>
        <div class="skills-icons">
          <img src="../assets/logos/HTML5.png" alt="HTML5" class="badge" />
          <img src="../assets/logos/CSS3.png" alt="CSS3" class="badge" />
          <img src="../assets/logos/JavaScript.png" alt="JavaScript" class="badge" />
          <img src="../assets/logos/github.png" alt="Github" class="badge" />
          <img src="../assets/logos/VSCode.png" alt="VSCode" class="badge" />
          <img src="../assets/logos/heroku.png" alt="Heroku" class="badge" />
          <img src="../assets/logos/Vue.png" alt="Vue" class="badge2" />
          <img src="../assets/logos/Vuetify.png" alt="Vuetify" class="badge2" />
        </div>
      </div>
    </section>

    <section class="projects">
      <h2>Projects</h2>
    </section>

    <section class="exercises">
      <h2>Exercises</h2>
      <router-link to="calculator">Calculator</router-link>
      <router-link to="petshop">Petshop</router-link>
      <div class="spacer"></div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
export default {
  name: "PageHome",
  components: {},
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  margin-top: 30px;
}

h2 {
  font-size: larger;
  margin-bottom: 30px;
}

a {
  color: #42b983;
}

.main-img {
  max-width: min(400px, 80%);
  margin-bottom: 20px;
}

.about-me {
  background: #068d9d;
  color: #dff8eb;
  min-height: 410px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.about-me div {
  max-width: min(800px, 80%);
  padding-top: 60px;
}

.about-me p {
  margin-top: 15px;
}

.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  background: none;
}

.skills-div {
  border: rgb(1, 22, 56, 0.8) 2px solid;
  border-radius: 15px;
  background-color: #dff8eb;
  min-height: 360px;
  max-width: min(80%, 1000px);
  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills-icons {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.badge {
  max-width: 40px;
  max-height: 40px;
  margin: 10px;
}

.badge2 {
  max-width: 100px;
  max-height: 40px;
  margin: 10px;
}

.projects {
  margin-top: 40px;
  height: 700px;
}

.exercises {
  margin-top: 40px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  height: 30px;
}

@media only screen and (min-width: 600px) {
  .about-me h2 {
    font-size: xx-large;
  }

  .about-me p {
    font-size: 1.28rem;
    line-height: 1.88rem;
  }

  .badge {
    max-width: 80px;
    max-height: 80px;
    margin: 30px;
  }

  .badge2 {
    max-width: 200px;
    max-height: 80px;
    margin: 30px;
  }
}
</style>
