console.log('client testing')

axios.get('./api/')
.then(res => console.log(res.data))
.catch(err => console.error(err))