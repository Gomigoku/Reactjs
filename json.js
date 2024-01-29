Displaying data from local json file:
<script>
       const  listL = document.querySelector(‘ul’);

       fetch(‘./data.json’)
               .then(res => res.json()
               .then(data => {
                   data.forEach(post => {
                        listEl.insertAdjacentHTML(‘beforeend’, `<li>${post.title}</li>`);
                  })
                }
               .catch(error => {
                   console.log(error);
               })
</script>
