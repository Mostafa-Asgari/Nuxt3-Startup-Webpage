  <template>
    <div class="about-page">
      <div class="content">
          <h1 class="title-api">about - Todos - click on them:</h1>
          <div v-for="todo in todos" :key="todo.id" class="todo-box">
            <NuxtLink :to="`/arts/${todo.id}`" class="todo mr1">{{ todo.id }}</NuxtLink>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'custom'
  })
  const {data: todos} = await useFetch('https://jsonplaceholder.typicode.com/todos')
  // console.log(data);
  const title = 'About Page'
  </script>
  
  <style scoped>
    .about-page .content{
      padding: 3rem;
    }
    .todo-box{
      display: inline;
    }
    a.todo{
      text-decoration: none;
      color: var(--green);
      font-size: 2rem;
      border: 1px solid orangered;
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0.5rem;
      display: inline-block;
    }
    a.todo:hover{
      background: navy;
      color: #fff;
      border-color: rgb(20, 107, 141);
    }
    h1.title-api{
      margin: 1rem 0;
      font-family: 'Nunito-Medium';
    }
  </style>