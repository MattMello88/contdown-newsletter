document.getElementById('lista').innerHTML = '';

window.onload = async () => {
  let { data: newslatter, error } = await supabaseCli
    .from('newslatter')
    .select('*')
    
    if (error){
      alert("Falha ao buscar a newsletter. Error: " + error.message)
    } else {
      let table = ''
      newslatter.forEach(element => {
        table = table.concat(`<tr>
          <th>${element.id}</th>
          <th>${element.email}</th>
        </tr>`);
      });
      document.getElementById('lista').innerHTML = table;
    }
}