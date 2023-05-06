  <template>
    <div class="every">
      <div>
        <!-- <h2>{{ useRoute().params.id }}</h2> -->
        <div style="margin-bottom: 2rem;">
          <span class="fs2">Route Params: </span><h2>{{ id }}</h2>
        </div>

        <div>  
          <span class="fs2">Rest API Title: </span><h1>{{ todo.title }}</h1>
        </div> 
      </div> 
    </div>
  </template>
  
  <script setup>
    const id = useRoute().params.id
    const uri = 'https://jsonplaceholder.typicode.com/todos/' + id
    // const uri = `https://jsonplaceholder.typicode.com/todos/${id}`
    const {data: todo} = await useFetch(uri, {key: id})
  </script>
  
  <style>
    .every{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .every h2, .every h1{
        color: #fff;
        padding: 1rem;
        background: crimson;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
    }
    .every h2{
      background: var(--blue);
      width: fit-content;
    }

  </style>    
