console.log('client testing')

axios.get('./api/joke')
.then(res => console.log(res.data))
.catch(err => console.error(err))